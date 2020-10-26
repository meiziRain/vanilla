<template>
  <div id="app" @mousedown="onPointerDown" @mouseup="onPointerUp">
    <div class="cursor">
      <div class="cursor__inner cursor__inner--circle">
        <div class="cursor__side cursor__side--left" />
        <div class="cursor__side cursor__side--right" />
      </div>
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
import { Expo } from 'gsap'
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
    this.$refs.nav.keepNavRender()
    this.initMouse()
  },
  methods: {
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
          this.DOM.arrows = {
            right: this.DOM.el.querySelector('.cursor__side--right'),
            left: this.DOM.el.querySelector('.cursor__side--left')
          }
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
    onPointerDown() {
      // Scale up the cursor
      this.cursor.renderedStyles['scale'].current = 1.5
      // And show the "drag mode" arrows
      this.showArrows()
    },
    onPointerUp() {
      // Scale down the cursor (reset)
      this.cursor.renderedStyles['scale'].current = 1
      // And hide the "drag mode" arrows
      this.hideArrows()
    },
    showArrows() {
      this.$GSAP.to(Object.values({
        right: document.querySelector('.cursor__side--right'),
        left: document.querySelector('.cursor__side--left')
      }), 1, {
        ease: Expo.easeOut,
        startAt: { x: i => i ? 10 : -10 },
        opacity: 1,
        x: 0
      })
    },
    hideArrows() {
      this.$GSAP.to(Object.values({
        right: document.querySelector('.cursor__side--right'),
        left: document.querySelector('.cursor__side--left')
      }), 1, {
        ease: Expo.easeOut,
        x: i => i ? 10 : -10,
        opacity: 0
      })
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

.cursor {
	display: none;
}

@media (any-pointer: fine) {
	.cursor {
		display: block;
	}
	.cursor__inner {
    z-index: var(--the-top);
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		mix-blend-mode: difference;
		border-radius: 50%;
	}
	.cursor__side {
		position: absolute;
		top: 50%;
		width: 5px;
		height: 1px;
		background: #de6565;
		opacity: 0;
	}
	.cursor__side--left {
		right: calc(100% + 5px);
	}
	.cursor__side--right {
		left: calc(100% + 5px);
	}
	.cursor__inner--circle {
		width: 40px;
		height: 40px;
		border: 1px solid #de6565;
	}
}
</style>
