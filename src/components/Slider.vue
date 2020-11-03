<template>
  <div ref="slider" :class="'slider slider-' + className">
    <div v-for="(bg, index) in backgrounds" :key="index" :class="'slide-item slide-item-' + className" />
  </div>
</template>

<script>
import { Power4 } from 'gsap'
export default {
  props: {
    start: {
      type: Number,
      default: 0,
      description: '开始时间'
    },
    className: {
      type: String,
      default: 'default',
      description: '类名'
    },
    image: {
      type: Boolean,
      default: false,
      description: '图片背景true  纯色false'
    },
    backgrounds: {
      type: Array,
      default() {
        return ['rgb(190, 226, 246)', 'rgb(255, 153, 127)', 'rgb(193, 245, 207)']
      },
      description: 'slide item 背景'
    },
    animationTime: {
      type: Number,
      default: 1,
      description: '滚动时间'
    },
    duration: {
      type: Number,
      default: 3,
      description: '轮播间隔'
    },
    width: {
      type: String,
      default: '50',
      description: '宽度'
    },
    height: {
      type: String,
      default: '50',
      description: '高度'
    }
  },
  data() {
    return {
      slideItems: [],
      prevSlideID: null,
      currentSlideID: 0,
      prevSlide: {},
      currentSlide: {},
      isAnimating: false
    }
  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.setStyle()
      this.slideItems = this.$refs.slider.querySelectorAll(`.slide-item-${this.className}`)
      this.$GSAP.set(this.slideItems, { left: '100%' })
      this.play()
    },
    setStyle() {
      this.$refs.slider.style = `width: ${this.width}vw;height: ${this.height}vh`
      Array.from(this.$refs.slider.querySelectorAll(`.slide-item-${this.className}`)).forEach((it, index) => {
        this.image ? it.style = `width: ${this.width}vw;height: ${this.height}vh;background-image:url(${this.backgrounds[index]})`
          : it.style = `width: ${this.width}vw;height: ${this.height}vh;background:${this.backgrounds[index]}`
      })
    },
    play() {
      this.gotoNextSlide()
      this.$GSAP.delayedCall(this.duration, () => {
        this.play()
      })
    },
    gotoNextSlide() {
      let slideToGo = this.currentSlideID + 1
      if (slideToGo >= this.slideItems.length) {
        slideToGo = 0
      }
      this.gotoSlide(slideToGo, this.animationTime, 'next')
    },
    gotoSlide(slideID, time, _direction) {
      if (!this.isAnimating) {
        this.isAnimating = true
        this.prevSlideID = this.currentSlideID
        this.currentSlideID = slideID
        this.prevSlide = this.slideItems[this.prevSlideID]
        this.currentSlide = this.slideItems[this.currentSlideID]
        this.$GSAP.to(this.prevSlide, time, {
          left: '100%',
          ease: Power4.easeIn
        })
        this.$GSAP.fromTo(this.currentSlide, time, {
          left: '-100%',
          ease: Power4.easeIn
        }, { left: '0', ease: Power4.easeIn })
      }
      this.$GSAP.delayedCall(time, () => {
        this.isAnimating = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slider{
    position: relative;
    width: 50vw;
    outline: none;
    height: 50vh;
    overflow: hidden;
    // -webkit-transform: translateZ(0px);
    // transform: translateZ(0px)
}
.slide-item{
    position: absolute;
    outline: none;
    width: 50vw;
    // -webkit-transform: translateZ(0px);
    // transform: translateZ(0px);
    height: 50vh;
    background-color: black;
    will-change: transform;
    background-repeat:no-repeat;
    background-size: cover;
}

</style>
