<template>
  <div id="magnetic">
    <div class="magnetic-button">
      <span class="magnetic-button__text">
        <span class="magnetic-button__text-inner">Discover</span>
      </span>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { EventEmitter } from 'events'
import { lerp, getMousePos, calcWinsize, distance } from '@/assets/js/utils.js'
export default {
  name: 'MagneticButton',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
  },
  methods: {
    init() {
      // Calculate the viewport size
      // eslint-disable-next-line no-unused-vars
      let winsize = calcWinsize()
      window.addEventListener('resize', () => {
        winsize = calcWinsize()
      })

      // Track the mouse position
      let mousepos = { x: 0, y: 0 }
      window.addEventListener('mousemove', ev => { mousepos = getMousePos(ev) })

      class ButtonCtrl extends EventEmitter {
        constructor(el) {
          super()
          // DOM elements
          // el: main button
          // text: inner text element
          this.DOM = { el: el }
          this.DOM.text = this.DOM.el.querySelector('.magnetic-button__text')
          this.DOM.textinner = this.DOM.el.querySelector('.magnetic-button__text-inner')
          // amounts the button will translate
          this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.1 },
            ty: { previous: 0, current: 0, amt: 0.1 }
          }
          // button state (hover)
          this.state = {
            hover: false
          }
          // calculate size/position
          this.calculateSizePosition()
          // init events
          this.initEvents()
          // loop fn
          requestAnimationFrame(() => this.render())
        }
        calculateSizePosition() {
          // size/position
          this.rect = this.DOM.el.getBoundingClientRect()
          // the movement will take place when the distance from the mouse to the center of the button is lower than this value
          this.distanceToTrigger = this.rect.width * 1
        }
        initEvents() {
          this.onResize = () => this.calculateSizePosition()
          window.addEventListener('resize', this.onResize)
        }
        render() {
          // calculate the distance from the mouse to the center of the button
          const distanceMouseButton = distance(mousepos.x, mousepos.y, this.rect.left + this.rect.width / 2, this.rect.top + this.rect.height / 2)
          // new values for the translations
          let x = 0
          let y = 0

          if (distanceMouseButton < this.distanceToTrigger) {
            if (!this.state.hover) {
              this.enter()
            }
            x = (mousepos.x - (this.rect.left + this.rect.width / 2)) * 0.3
            y = (mousepos.y - (this.rect.top + this.rect.height / 2)) * 0.3
          } else if (this.state.hover) {
            this.leave()
          }

          this.renderedStyles['tx'].current = x
          this.renderedStyles['ty'].current = y

          for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt)
          }

          this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`
          this.DOM.text.style.transform = `translate3d(${this.renderedStyles['tx'].previous * 0.5}px, ${this.renderedStyles['ty'].previous * 0.5}px, 0)`

          requestAnimationFrame(() => this.render())
        }
        enter() {
          this.emit('enter')
          this.state.hover = true
          this.DOM.el.classList.add('button--hover')
          document.body.classList.add('active')

          gsap.killTweensOf(this.DOM.textinner)

          gsap
            .timeline()
            .to(this.DOM.textinner, 0.15, {
              ease: 'Power2.easeIn',
              opacity: 0,
              x: '20%'
            })
            .to(this.DOM.textinner, 0.2, {
              ease: 'Expo.easeOut',
              opacity: 1,
              startAt: { x: '-20%' },
              x: '0%'
            })
        }
        leave() {
          this.emit('leave')
          this.state.hover = false
          this.DOM.el.classList.remove('button--hover')
          document.body.classList.remove('active')

          gsap.killTweensOf(this.DOM.textinner)

          gsap
            .timeline()
            .to(this.DOM.textinner, 0.15, {
              ease: 'Power2.easeIn',
              opacity: 0,
              x: '-20%'
            })
            .to(this.DOM.textinner, 0.2, {
              ease: 'Expo.easeOut',
              opacity: 1,
              startAt: { x: '20%' },
              x: '0%'
            })
        }
      }
      // initialize custom cursor
      new ButtonCtrl(document.querySelector('.magnetic-button'))
    }
  }
}
</script>

<style lang="scss" scoped>
#magnetic {
  --button-text-focus: red;
  --cursor-stroke: red;
  --cursor-fill: red;
  --cursor-stroke-width: 0px;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
}

.magnetic-button {
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-width: 0px;
  border-style: solid;
  color: var(--el-text-color);
  width: 10vw;
  height: 4vw;
  padding: 0;
  font-family: "Poiret One", cursive;
  font-weight: bold;
  font-size: 1.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnetic-button:focus,
.button--hover {
  outline: none;
  color: var(--el-text-color);
}

.magnetic-button::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background: rgba(0, 0, 0, 0.3);
  filter: blur(13px);
}

.magnetic-button__text,
.magnetic-button__text-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.magnetic-button__text {
  width: 10vw;
  height: 4vw;
  flex: none;
  background: var(--text-color);
  border-radius: 0.4vw;
}

@media (max-width: 800px){
  .magnetic-button{
    width: 12vw;
    height: 5vw;
    font-size: 1vw;
  }

    .magnetic-button__text {
      width: 12vw;
      height: 5vw;
      border-radius: 6px;
  }
}

@media (max-width: 600px){
  .magnetic-button{
    width: 10rem;
    height: 4rem;
    font-size: 1rem;
  }

  .magnetic-button__text {
    width: 10rem;
    height: 4rem;
    border-radius: 4px;
  }
}
</style>
