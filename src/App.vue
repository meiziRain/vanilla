<template>
  <div id="app">
    <div class="cursor">
      <div class="cursor-point" />
      <div class="cursor__inner--circle" />
    </div>
    <div id="mobile-header-wrapper">
      <div id="mobile" ref="mobile">
        <div id="mobile-header">
          <Ham id="hamburger" ref="ham" @click.native="onHamClick()" />
          <LightSwitch id="light-switch" />
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
      <LightSwitch id="pc-light-switch" />
      <Iris id="pc-nav" ref="nav" />
      <Logo />
    </div>

    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
// import { Expo } from 'gsap'
import Logo from '@/components/Logo.vue'
import Ham from '@/components/Ham.vue'
import Iris from '@/components/Iris.vue'
import LightSwitch from '@/components/LightSwitch.vue'
import { getMousePos, lerp } from '@/assets/js/utils.js'
export default {
  components: {
    Logo,
    Ham,
    Iris,
    LightSwitch
  },
  data() {
    return {
      cursor: {}
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
    this.initCursor()
    this.initMouse()
    this.$refs.nav.keepNavRender()
  },
  methods: {
    initCursor() {
      window.onload = () => {
        const oDiv = document.querySelector('.cursor-point')
        window.onmousemove = function(event) {
          const ev = event || window.event
          const ofLeft = document.documentElement.offsetLeft || document.body.offsetLeft
          const ofTop = document.documentElement.offsetTop || document.body.offsetTop
          const oLeft = ev.clientX + ofLeft
          const oTop = ev.clientY + ofTop
          oDiv.style.display = 'block'
          oDiv.style.left = oLeft + 'px'
          oDiv.style.top = oTop + 'px'
        }
      }
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

#app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#mobile-header-wrapper {
  position: absolute;
  height: 60px;
}

#mobile {
  position: fixed;
  z-index: 99; // 暂定并不是最上层，在 detail-view 下面
}

#mobile-header {
  display: flex;
  background-color: white;
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

#pc-light-switch{
  position: fixed;
  bottom: 0;
}

#mobile-nav {
  position: relative;
  height: 1px;
  z-index: 999;
  overflow: hidden;
  background-color: white;
  box-shadow: inset 0px -1px 0px #e7e7e7;
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

@media (min-width: 920px) {
  #mobile,
  #mobile-header-wrapper {
    display: none;
  }
}

@media (max-width: 920px) {
  #pc-nav {
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

@media (any-pointer: fine) {
	.cursor {
		display: block;
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
    background-color: var(--background-color);
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
    border: 3px solid var(--background-color);
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
    border: 1px solid var(--background-color);
    border-radius: 50%;
    opacity: .45;
    -webkit-animation: cursor-circle-outer-scale 3s ease-in-out .4s infinite;
    animation: cursor-circle-outer-scale 3s ease-in-out .4s infinite;
    // FIXME: 为什么设置mix-blend-mode: difference;后边界会超出
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
</style>
