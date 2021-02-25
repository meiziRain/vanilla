<template>
  <div id="app">
    <div v-show="false" id="img-factory" style="width:0;height:0">
      <!-- 图片必须预先加载完, 否则动画会卡顿, 不要漏图片了 -->
      <img v-for="(item, i) in imgBox" :src="item" :key="i">
      <!-- 高质量的图片在layer的动画中会卡顿 -->
    </div>
    <div v-if="loader" id="loader">
      <Loader v-model="progressNumber" />
    </div>
    <div v-else id="container">
      <Zip ref="zip" />
      <Gates ref="gates" />
      <!-- 正文 -->
      <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path class="shape-overlays__path" />
        <path class="shape-overlays__path" />
        <path class="shape-overlays__path" />
        <path class="shape-overlays__path" />
      </svg>
      <div class="cursor" style="visibility:hidden">
        <div class="cursor-point" />
        <div class="cursor__inner--circle" />
      </div>
      <div id="mobile-header-wrapper">
        <div id="mobile" ref="mobile">
          <div id="mobile-header">
            <Ham id="hamburger" ref="ham" @click.native="onHamClick()" />
            <LightSwitch id="mobile-light-switch" />
          </div>
          <div id="mobile-nav" ref="mobile_nav" @click="jump">
            <router-link to="/">
              Home
            </router-link>
            <router-link to="/blog">
              Blog
            </router-link>
            <router-link to="/about">
              Me！
            </router-link>
          </div>
        </div>
      </div>
      <div id="pc">
        <div class="click-me" :style="{backgroundImage: 'url('+bgImage+')'}" />
        <LightSwitch id="pc-light-switch" size="6vh" />
        <Iris id="pc-nav" ref="nav" />
        <!-- <Logo id="pc-logo" />
        <Circlee id="logo-circle" size="8vw" /> -->
        <div id="pc-logo" class="logo">
          <router-link to="/">
            V
          </router-link>
        </div>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import { Expo } from 'gsap'
import Loader from '@/components/Loader.vue'
import Zip from '@/components/Zip.vue'
import Gates from '@/components/Gates.vue'
// import Circlee from '@/components/Circlee.vue'
// import Logo from '@/components/Logo.vue'
import Ham from '@/components/Ham.vue'
import Iris from '@/components/Iris.vue'
import LightSwitch from '@/components/LightSwitch.vue'
import { getMousePos, lerp } from '@/assets/js/utils.js'
export default {
  components: {
    // Circlee,
    // Logo,
    Ham,
    Iris,
    LightSwitch,
    Gates,
    Zip,
    Loader
  },
  data() {
    return {
      cursor: {},
      loader: true,
      progressNumber: 4,
      bgImage: require('@/assets/imgs/click-me.png'),
      imgBox: [require('@/assets/imgs/red-head-high.jpg'),
        require('@/assets/imgs/shancheng-high.jpg'),
        require('@/assets/imgs/Logo.png'),
        require('@/assets/imgs/miao1.jpg'),
        require('@/assets/imgs/9.jpg'),
        require('@/assets/imgs/back.png'),
        require('@/assets/imgs/leg.jpg'),
        require('@/assets/imgs/side.jpg'),
        require('@/assets/imgs/sunset.jpg'),
        require('@/assets/imgs/cute.jpg'),
        require('@/assets/imgs/mountain.jpg'),
        require('@/assets/imgs/skirt.jpg'),
        require('@/assets/imgs/smile.jpg'),
        require('@/assets/imgs/teeth.png'),
        require('@/assets/imgs/back-low.jpg'),
        require('@/assets/imgs/lookback.png'),
        require('@/assets/imgs/lookback-low.jpg'),
        require('@/assets/imgs/click-me.png'),
        require('@/assets/imgs/blush-her-unhappy2.png'),
        require('@/assets/imgs/blush-her-unhappy.png'),
        require('@/assets/imgs/blush-her-fake-smile.png'),
        require('@/assets/imgs/blush-her.png'),
        require('@/assets/imgs/blush-man-1.png'),
        require('@/assets/imgs/blush-man-2.png')
      ]
    }
  },
  created() {
    if (this._isMobile()) {
      console.log('Mobile')
      this.$store.state.isMobile = true
    } else {
      console.log('PC')
      this.$store.state.isMobile = false
    }
  },
  mounted() {
    console.log('APP mounted')
    const imgLoad = this.$imagesLoaded('#img-factory')
    imgLoad
      .on('progress', (res) => {
        this.progressNumber += Math.floor(96 / res.images.length)
      })
      .on('done', (imgs) => {
        this.loader = false
        this.$nextTick(() => {
          this.init()
        })
      })
  },
  methods: {
    init() {
      document.fonts.ready.then(() => {
        console.log('fonts.ready')
        this.initCursor()
        if (!this._isMobile) {
          this.$refs.nav.keepNavRender()
        }
        this.initOverlay()
        this.$refs.zip.zip()
        this.$GSAP.delayedCall(1 /* zip 下拉动画过渡时间 */, () => {
          this.$refs.gates.openGates()
        })
        document.querySelector('.cursor').style.visibility = 'visible'

        this.$GSAP.delayedCall(2, () => {
          // 这2s时Gates动画完成时间
          console.log('App: initAnimations')
          this.$store.state.isInitAnimations = true
          this.$eventHub.$emit('initAnimations')
        })
      })
    },
    initOverlay() {
      console.log('initOverlay')
      const ease = {
        exponentialIn: (t) => {
          return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
        },
        exponentialOut: (t) => {
          return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
        },
        exponentialInOut: (t) => {
          return t === 0.0 || t === 1.0
            ? t
            : t < 0.5
              ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
              : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
        },
        sineOut: (t) => {
          const HALF_PI = 1.5707963267948966
          return Math.sin(t * HALF_PI)
        },
        circularInOut: (t) => {
          return t < 0.5
            ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
            : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0)
        },
        cubicIn: (t) => {
          return t * t * t
        },
        cubicOut: (t) => {
          const f = t - 1.0
          return f * f * f + 1.0
        },
        cubicInOut: (t) => {
          return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
        },
        quadraticOut: (t) => {
          return -t * (t - 2.0)
        },
        quarticOut: (t) => {
          return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
        }
      }
      class ShapeOverlays {
        constructor(elm) {
          this.elm = elm
          this.path = elm.querySelectorAll('path')
          this.numPoints = 2.5
          this.duration = 1200
          this.delayPointsArray = []
          this.delayPointsMax = 180
          this.delayPerPath = 70
          this.timeStart = Date.now()
          this.isOpened = false
          this.isAnimating = false
        }
        toggle() {
          this.isAnimating = true
          const range = Math.random() * Math.PI * 2
          for (let i = 0; i < this.numPoints; i++) {
            const radian = (i / (this.numPoints - 1)) * Math.PI * 2
            this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax
          }
          if (this.isOpened === false) {
            this.open()
          } else {
            this.close()
          }
        }
        open() {
          this.isOpened = true
          this.elm.classList.add('is-opened')
          this.timeStart = Date.now()
          this.renderLoop()
        }
        close() {
          this.isOpened = false
          this.elm.classList.remove('is-opened')
          this.timeStart = Date.now()
          this.renderLoop()
        }
        updatePath(time) {
          const points = []
          for (let i = 0; i < this.numPoints; i++) {
            points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
          }

          let str = ''
          str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `
          for (let i = 0; i < this.numPoints - 1; i++) {
            const p = (i + 1) / (this.numPoints - 1) * 100
            const cp = p - (1 / (this.numPoints - 1) * 100) / 2
            str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `
          }
          str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`
          return str
        }
        render() {
          if (this.isOpened) {
            for (let i = 0; i < this.path.length; i++) {
              this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)))
            }
          } else {
            for (let i = 0; i < this.path.length; i++) {
              this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))))
            }
          }
        }
        renderLoop() {
          this.render()
          if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
            requestAnimationFrame(() => {
              this.renderLoop()
            })
          } else {
            this.isAnimating = false
          }
        }
      }
      const elmOverlay = document.querySelector('.shape-overlays')
      this.$store.state.overlay = new ShapeOverlays(elmOverlay)
    },
    initCursor() {
      const oDiv = document.querySelector('.cursor-point')
      window.onmousemove = (event) => {
        const ev = event || window.event
        const ofLeft = document.documentElement.offsetLeft || document.body.offsetLeft
        const ofTop = document.documentElement.offsetTop || document.body.offsetTop
        const oLeft = ev.clientX + ofLeft
        const oTop = ev.clientY + ofTop
        oDiv.style.display = 'block'
        oDiv.style.left = oLeft + 'px'
        oDiv.style.top = oTop + 'px'
      }
      this.initMouse()
    },
    initMouse() {
      // Calculate the viewport size
      let winsize
      // eslint-disable-next-line no-return-assign
      const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight }
      calcWinsize()
      window.addEventListener('resize', calcWinsize)

      // Track the mouse position
      let mousepos = { x: winsize.width / 2, y: winsize.height / 2 }
      // eslint-disable-next-line no-return-assign
      window.addEventListener('mousemove', ev => mousepos = getMousePos(ev))

      // Custom cursor
      class Cursor {
        constructor(el) {
          this.DOM = { el: el }
          this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle')
          this.bounds = this.DOM.circle.getBoundingClientRect()

          this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.2 },
            ty: { previous: 0, current: 0, amt: 0.2 },
            scale: { previous: 1, current: 1, amt: 0.2 }
          }
          requestAnimationFrame(() => this.render())
        }
        render() {
          this.renderedStyles['tx'].current = mousepos.x - this.bounds.width / 2
          this.renderedStyles['ty'].current = mousepos.y - this.bounds.height / 2

          for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt)
          }

          this.DOM.circle.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`
          requestAnimationFrame(() => this.render())
        }
        enter() {
          this.renderedStyles['scale'].current = 1.9
        }
        leave() {
          this.renderedStyles['scale'].current = 1
        }
        click() {
          this.renderedStyles['scale'].previous = 0.4
        }
      }
      this.cursor = new Cursor(document.querySelector('.cursor'))
    },
    //  'font-family: ' + '"' + 'Cabin Sketch' + '"' + ', cursive',
    jump() {
      const nav = this.$refs.mobile_nav
      nav.style.animation = 'headerShrink 500ms forwards ease'
      nav.classList.toggle('active')
      this.$refs.ham.toggle()
    },
    onHamClick() {
      const nav = this.$refs.mobile_nav
      if (nav.classList.contains('active')) {
        nav.style.animation = 'headerShrink 500ms forwards ease'
      } else {
        nav.style.animation = 'headerExpand 500ms forwards ease'
      }
      nav.classList.toggle('active')
    },
    _isMobile() {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/_reset.scss";
@import "@/assets/css/_base.scss";
.disable{
  pointer-events: none;
}

#loader{
  position: absolute;
  // background-color: var(--background-color);
  background-color: black;
  width: 100vw;
  height: 100vh;
  z-index: var(--top-index);
}

#container{
  width: 100vw;
  height: 100vh;
}

#app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#mobile-header-wrapper {
  position: absolute;
}

#mobile {
  position: fixed;
  z-index: 99; // 暂定并不是最上层，在 detail-view 下面
}

#mobile-header {
  display: flex;
  background-color: var(--background-color);
  justify-content: space-between;
  height: 60px;
  width: 100vw;
}

#pc-nav {
  position: fixed;
  z-index: 999;
  right: 3%;
  top: 3%;
}

.click-me {
  bottom: -20vh;
  left: -20vh;
  position: fixed;
  width: 60vh;
  height: 60vh;
  background-size: cover;
  z-index: calc(var(--top-index) - 1);
  animation: 10s linear infinite logoRotateAnim;
  filter: contrast(0);
}

@keyframes logoRotateAnim{
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(-180deg);
  }
  100%{
    transform: rotate(-360deg);
  }
}

#pc-light-switch{
  position: absolute;
  bottom: 5vh;
  left: 5vh;
  z-index: var(--top-index);
}

#mobile-light-switch {
  height: 30px;
  position: relative;
  top: 50%;
  right:3%;
  transform: translateY(-50%);
}

#mobile-nav {
  position: relative;
  height: 1px;
  z-index: 999;
  overflow: hidden;
  background-color: var(--background-color);
  box-shadow: inset 0px -1px 0px var(--background-color);
}

#mobile-nav>a {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  z-index: 999;
  padding: 12px 24px;
  display: block;
  color: #6e6d7a;
  -webkit-transition: color 100ms;
  transition: color 100ms;
  cursor: pointer;
  text-decoration: none;
}

#logo-circle{
  z-index:1;
  position: absolute;
  top: 1vw;
  left: 1vw;
}

#pc-logo{
  position: fixed;
  top: 2vw;
  left: 2vw;
  z-index: 999;
}

.logo {
  font-size: 9vh;
  font-family: Monoton,cursive;
  font-weight: var(--logo-weight);
  z-index: var(--top-index);
  color: red;
  text-shadow: var(--red-shadow)
}

@media (min-width: 600px) {
  #mobile,
  #mobile-header-wrapper {
    display: none;
  }
}

@media (max-width: 600px) {
  #pc-nav, #pc-logo, #pc-light-switch, #pc-nav, .click-me {
    display: none;
  }
}

@keyframes headerExpand {
  from {
    height: 1px;
  }

  to {
    height: 130px; // 增加路由时需要增加此值
  }
}

@keyframes headerShrink {
  from {
    height: 130px;
  }

  to {
    height: 1px;
  }
}

$cursor-color: var(--cursor-color);  //mix-blend-mode 元素颜色必须设置和背景相同
@media (any-pointer: fine) {
	.cursor {
		display: block;
    // mix-blend-mode: difference; FIXME: // 这个属性与z-index
	}

  .cursor-point {
    z-index: var(--the-top);
    display: none;
    position: absolute;
    width: 10px;
    height: 10px;
    transform: translate(-50%,-50%);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: $cursor-color;
    -webkit-animation: cursor-scale 2.6s ease-in-out infinite;
    animation: cursor-scale 2.6s ease-in-out infinite;
    mix-blend-mode: difference;
    pointer-events: none !important;
  }

	.cursor__inner--circle {
    z-index: var(--the-top);
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 50%;
		width: 40px;
		height: 40px;
    border: 3px solid $cursor-color;
    // 这个属性会让此元素与父元素颜色混合&
    mix-blend-mode: difference;
    pointer-events: none !important;
	}

  .cursor__inner--circle::before{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 60px;
    height: 60px;
    border: 1px solid $cursor-color;
    border-radius: 50%;
    opacity: .45;
    -webkit-animation: cursor-circle-outer-scale 3s ease-in-out .4s infinite;
    animation: cursor-circle-outer-scale 3s ease-in-out .4s infinite;
    // FIXME: 为什么设置mix-blend-mode: difference后 边界会超出
  }
}

@keyframes cursor-scale{
  0% {
    opacity: .75;
    -webkit-transform: translate(-50%,-50%) scale(.95);
    transform: translate(-50%,-50%) scale(.95);
  }
  50% {
    opacity: 1;
    -webkit-transform: translate(-50%,-50%) scale(1.35);
    transform: translate(-50%,-50%) scale(1.35);
  }
  100% {
    opacity: .75;
    -webkit-transform: translate(-50%,-50%) scale(.95);
    transform: translate(-50%,-50%) scale(.95);
  }
}

@keyframes cursor-circle-outer-scale {
  0% {
    opacity: .5;
    -webkit-transform: translate(-50%,-50%) scale(.9);
    transform: translate(-50%,-50%) scale(.9);
  }
  50% {
    opacity: .2;
    -webkit-transform: translate(-50%,-50%) scale(1.1);
    transform: translate(-50%,-50%) scale(1.1);
  }
  100% {
    opacity: .5;
    -webkit-transform: translate(-50%,-50%) scale(.9);
    transform: translate(-50%,-50%) scale(.9);
  }
}

.shape-overlays {
  &-home-to-others {
    // 颜色由上至下
    --path-fill-1: var(--background-color);
    // --path-fill-1: #fdfbf3;
    --path-fill-2: #869ccc;
    --path-fill-3: black;
    --path-fill-4: var(--background-color);
  }

  &-others-to-home {
    --path-fill-1: var(--background-color);
    --path-fill-2: #869ccc;
    --path-fill-3: black;
    // --path-fill-4: rgb(253, 251, 243);
    --path-fill-4: var(--background-color);
  }

  z-index: 1000000;
	width: 100vw;
	height: 100vh;
	pointer-events: none;
	position: fixed;
	top: 0;
	left: 0;
}

.shape-overlays.is-opened {
	pointer-events: auto;
}

.shape-overlays__path {
  will-change: transform;

  &:nth-of-type(1) {
    fill: var(--path-fill-1);
  }

  &:nth-of-type(2) {
    fill: var(--path-fill-2);
  }

  &:nth-of-type(3) {
    fill: var(--path-fill-3);
  }

  &:nth-of-type(4) {
    fill: var(--path-fill-4);
  }
}
</style>
