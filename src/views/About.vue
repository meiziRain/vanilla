<template>
  <div id="about">
    <div id="about-scroll-viewport">
      <div id="about-scroll-content">
        <div id="avatar-wrapper">
          <div id="avatar" />
        </div>
        <css-doodle>
          :doodle {
          @grid: 18 / 100vmax;
          background: #0a0c27;
          }
          --hue: calc(180 + 1.5 * @row * @col);
          background: hsl(var(--hue), 50%, 70%);
          margin: -.5px;
          transition: @r(.5s) ease;
          clip-path: polygon(@pick(
          '0 0, 100% 0, 100% 100%',
          '0 0, 100% 0, 0 100%',
          '0 0, 100% 100%, 0 100%',
          '100% 0, 100% 100%, 0 100%'
          ));
        </css-doodle>
        <div class="spine spine--plans" />
        <div class="spinelabel spinelabel--plans">
          <a class="spinelabel__inner" data-router-link="" style="will-change: transform; transform-origin: 50% 50%; transform: translate3d(0.1548vw, 0px, 0px);">Planes</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/gooey-hover/js/utils/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
export default {
  data() {
    return {
      currentSlideID: 0,
      isAutoPlay: false
    }
  },
  mounted() {
    // gsap.delayedCall(1, () => { this.gotoNextSlide() })
    this.initScroll()
  },
  methods: {
    initScroll() {
      this.about_Scroll = Scrollbar.init(document.querySelector('#about-scroll-viewport'), {
        delegateTo: document,
        continuousScrolling: false,
        overscrollEffect: 'bounce',
        damping: 0.05
      })

      this.about_Scroll.track.xAxis.element.remove()
      this.about_Scroll.track.yAxis.element.remove()
      Scrollbar.detachStyle()
      this.about_Scroll.addListener((s) => { this.onScroll(s) })
    },
    /* Handlers
    --------------------------------------------------------- */
    onScroll({ limit, offset }) {

    },
    /* Actions
    --------------------------------------------------------- */
    updateScrollBar() {

    },
    // next
    gotoNextSlide() {
      var slideToGo = this.currentSlideID + 1
      if (slideToGo >= document.querySelectorAll('.slider__item').length) {
        slideToGo = 0
      }
      this.gotoSlide(slideToGo, 0.7, 'next')
    },
    gotoSlide(slideID, _time, _direction) {
      const prevSlideID = this.currentSlideID
      this.currentSlideID = slideID
      gsap.to(document.querySelectorAll('.slider__item')[prevSlideID].children, 1, { left: '100%' })
      gsap.fromTo(document.querySelectorAll('.slider__item')[this.currentSlideID].children, 1,
        { left: '-100%' },
        {
          left: '0',
          onComplete: () => {
            gsap.delayedCall(1, () => { this.gotoNextSlide() })
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#about{
  width: 100vw;
  height: 100vh;
  background: var(--background-color);

}

// #first{
//   transform: translateX(-30%);
// }
#about-scroll-viewport{
  width:100%;
  height: 100%;
  background-color: bisque;
  overflow:scroll;
}

#avatar-wrapper{
  height: 100vh;
  width: 100vw;
}

.sliders {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: auto;
    width: 80vw;
    height: 30vw;
}

.sliders__backgrounds {
  position: absolute;
  width: 70vw;
  height: 100vh;
  top: 50%;
  left: -10vw;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  overflow: hidden;
  pointer-events: none;
}

.sliders__backgrounds .background {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.background__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: 50%;
  background-color: var(--bg-grey);
}

.spine {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  &--plans {
    background-color: #a5d3ee;
  }
}

.spinelabel {
  z-index: 1;
}

.spinelabel {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg) translateX(-50%) translateY(-50%);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;

    &__inner {
    will-change: transform;
    transform-origin: 50% 50%;
    transform: translate3d(0.1548vw, 0px, 0px);

    font-size: 2.42em;
    font-weight: 400;
    display: inline-block;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 1.5vw;
    background-color: #fdfbf3;
    letter-spacing: .5em;
  }
}
</style>
