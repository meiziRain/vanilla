<template>
  <!-- :style="{backgroundImage: 'url('+bgImage+')'}" !-->
  <div id="blog" ref="blog">
    <h1 ref="bg_title" class="page-title | title">What's your next <br> <span class="slideshow__title__offset | title__offset">destination?</span></h1>
    <section class="cata">
      <div class="scroll-content">
        <article
          id="daisies"
          ref="daisies"
          class="slideshow-list__el odd"
          @click="showDetail('Daisies')"
          @mouseenter="articleMouseenter('rgb(166, 142, 119)')"
        >
          <img src="@/assets/imgs/shancheng-high.jpg">
          <!-- article 放其他有内容的元素也会引起图片模糊，👴要崩溃了 -->
        </article>
        <article
          id="gardenias"
          ref="gardenias"
          class="slideshow-list__el"
          @click="showDetail('Gardenias')"
          @mouseenter="articleMouseenter('rgb(166, 142, 119)')"
        >
          <img src="@/assets/imgs/shancheng-high.jpg">
        </article>
      </div>
    </section>
    <div id="detail-wrapper" ref="daisies_dv">
      <!-- FIXME: 为什么这里DaisiesPcDetailView不用v-if控制不占位会导致滚动条可以下拉？ -->
      <DaisiesPcDetailView v-if="showDaisiesPcDetailView" ref="pc_daisies_dv" />
    </div>
    <div ref="progress_ctn" class="slideshow__progress-ctn"><span ref="progress" class="slideshow__progress" /></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Power1, Power2, Power3, Power4, Sine, Expo } from 'gsap'
import { map } from '@/assets/js/utils'
// 滚动
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/js/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
// import DetailView from '@/views/detail/daisies/index.vue'
import DaisiesPcDetailView from '@/views/detail/daisies/pc-index.vue'
// import { getMousePos } from '@/assets/js/utils.js'
export default {
  components: {
    DaisiesPcDetailView
  },
  data() {
    return {
      options: {
        lockAnchors: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        onLeave: this.pageOnLeave
      },
      offsetTitle: 100,
      progress: 0,
      margin: 27,
      isMobile: this.$store.state.isMobile,
      scroll: {
        limit: 0,
        offset: {
          x: 0
        }
      },
      cataScroll: {},
      showDaisiesPcDetailView: false
    }
  },
  created() {
    // 让slide-el动画完成再可点击
    document.body.classList.add('non-clickable')
  },
  activated() {
    console.log('Blog activated')
    this.$GSAP.set(document.querySelectorAll('.slideshow-list__el'), {
      alpha: 0,
      y: 200,
      force3D: true
    })
  },
  mounted() {
    console.log('Blog mounted')
    this.initScroller()
    this.$store.state.blog = this

    // this.initEvents()
    this.$eventHub.$on('initAnimations', () => {
      this.$GSAP.set(document.querySelectorAll('.slideshow-list__el'), {
        alpha: 0,
        y: 200,
        force3D: true,
        onComplete: () => {
          this.initAnim()
        }
      })
    })
  },
  methods: {
    initAnim() {
      this.$GSAP.killTweensOf((document.querySelectorAll('.slideshow-list__el')))
      const blogActivatedTimeline = this.$GSAP.timeline({ repeat: 0, repeatDelay: 0 })
      blogActivatedTimeline.fromTo(document.querySelectorAll('.slideshow-list__el'), {
        alpha: 0,
        y: 100,
        force3D: true
      }, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        duration: 0.8,
        force3D: true
      })
      blogActivatedTimeline.fromTo(
        document.querySelectorAll('.slideshow-list__el:nth-child(odd)'), {
          y: 0,
          force3D: true
        }, {
          y: 40,
          ease: Expo.easeOut,
          duration: 1.5,
          force3D: true
        }, 1.2)
      blogActivatedTimeline.fromTo(
        document.querySelectorAll('.slideshow-list__el:nth-child(even)'), {
          y: 0,
          force3D: true
        }, {
          y: -40,
          ease: Expo.easeOut,
          duration: 1.5,
          force3D: true
        }, 1.2)
      blogActivatedTimeline.eventCallback('onComplete', () => {
        document.body.classList.remove('non-clickable')
      })
    },
    articleMouseleave(ev) {
      requestAnimationFrame(() => {
        // Reset tilt and image scale.
        this.$GSAP.to(ev.target.querySelectorAll('.move-text'), 1.8, {
          ease: 'Power4.easeOut',
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0
        })
      })
    },
    articleMouseenter(color) {
      this.$refs.bg_title.style.setProperty('color', color)
    },
    initScroller() {
      this.cataScroll = Scrollbar.init(document.querySelector('.cata'), {
        delegateTo: document.querySelector('#blog'), // 必须有这个属性,而且需要设置 blog overflow hidden, 否则会出现fullpage的el元素
        overscrollEffect: 'bounce',
        damping: 0.05,
        plugins: {
          horizontalScroll: {
            events: [/wheel/]
          }
        }
      })
      Scrollbar.detachStyle()
      this.cataScroll.track.xAxis.element.remove()
      this.cataScroll.addListener((s) => { this.onScroll(s) })
    },
    closeDaisiesDetailPage() {
      this.$refs.pc_daisies_dv.$refs.fullpage.destroy()
      this.showDaisiesPcDetailView = false
      this.$refs.daisies_dv.classList.toggle('visible')
      this.$refs.daisies.classList.toggle('trigger')
      this.cataScroll.updatePluginOptions('horizontalScroll', {
        events: [/wheel/]
      })
      this.cataScroll.setPosition(this.scroll.x, 0)
      const fade_ele = document.querySelectorAll('#pc-logo, #logo-circle, .slideshow__progress-ctn')
      this.$GSAP.to(fade_ele, 0.3, {
        alpha: 1,
        ease: Expo.easeIn
      })
      // iris
      const pcNav = document.querySelector('#pc-nav')
      this.$GSAP.to(pcNav, 0.5, {
        x: 0,
        alpha: 1,
        ease: Expo.easeOut
      })
    },
    showDetail(item) {
      this.$GSAP.killTweensOf((document.querySelectorAll('.slideshow-list__el')))
      const fade_ele = document.querySelectorAll('#pc-logo, #logo-circle, .slideshow__progress-ctn')
      this.$GSAP.to(fade_ele, 0.5, {
        alpha: 0,
        ease: Expo.easeIn
      })

      if (item === 'Daisies') {
        this.showDaisiesDetail()
      }
      if (item === 'Gardenias') {
        this.showGardeniasDetail()
      }
    },
    showDaisiesDetail() {
      // list页滚动条退场
      const pcNav = document.querySelector('#pc-nav')
      this.$GSAP.to(pcNav, 0.5, {
        x: 800,
        alpha: 0,
        ease: Expo.easeIn
      })
      this.cataScroll.updatePluginOptions('horizontalScroll', {
        events: []
      })

      if (this.$store.state.isMobile) {
        this.$refs.mobile_dv.open()
        this.$refs.daisies_dv.classList.toggle('visible')
        this.$refs.daisies.classList.toggle('trigger')
      } else {
        this.$refs.daisies_dv.classList.toggle('visible')
        this.$refs.daisies.classList.toggle('trigger')
        this.showDaisiesPcDetailView = true
        this.$nextTick(() => {
          this.$refs.pc_daisies_dv.showDetail(this.scroll)
        })
      }
    },
    showGardeniasDetail() {
      this.$GSAP.to('#gardenias', 0.9, {
        scale: 1.3,
        ease: Power2.easeInOut
      })
    },
    /* Handlers
    --------------------------------------------------------- */
    onScroll({ limit, offset }) {
      this.scroll = { limit, offset }
      this.progress = offset.x / limit.x
      // this.$GSAP.to(this.$refs.bg_title, 0.3, { x: -this.progress * this.offsetTitle, force3D: true })
      this.updateScrollBar()
    },
    /* Actions
    --------------------------------------------------------- */
    updateScrollBar() {
      const progress = map(this.progress * 100, 0, 100, 5, 100)
      this.$GSAP.to(this.$refs.progress, 0.3, { xPercent: progress, force3D: true })
    }
  }
}
</script>
<style lang="scss" scoped>
#blog {
  width: 100vw;
  height: 100vh;
  // background-color: var(--background-color);
  background-color: rgb(253, 251, 243);
  transition-property: background-color;
  -webkit-transition-property: background-color;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  overflow: hidden;
}

.page-title {
  font-family: 'Cabin Sketch', cursive;
  position: fixed;
  top: 9rem;
  left: 5vw;
  z-index: 0;
  white-space: nowrap;
  font-size: calc(4vw + 8rem);
  line-height: .975;
  color: var(--textColor);
  transition-property: color;
  -webkit-transition-property: color;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  // transform: rotate(8deg);
}

@media (min-width: 920px) {
  .page-title {
    font-size: 11vw;
  }
}

@media (max-width: 920px) {
  .page-title {
    font-size: calc(4rem + 3vw);
  }
}

.cata {
  height: 100vh;
  display: flex;
  align-items: center;
  // transform: rotate(-8deg);
}

.scroll-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.tile__content move-text {
  transition: color .3s;
}

.tile__title {
  position:absolute;
  bottom: 10%;
  left: -30%;
  white-space: nowrap;
  font-size: 6em;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;//设置文字填充色为透明
  color:transparent;
  &:first-letter {
    font-size:4em;
  }
}

.slideshow-list__el {
  opacity: 0;
  width: 45vh;
  height: 60vh;
  margin-left: 15vw;
  will-change: transform, opacity;
  transition: opacity 1s;
  // transform: translate3D(0, 0, 0);
  // overflow: hidden;

  &:nth-child(3){
    width: 40vh;
    height: 60vh;
    background-size: cover;
    max-width: 40vh;
    max-height: 60vh;
  }

  &>img{
    width:auto;
    height:auto;
    max-height:100%;
  }
}

.closer{
  position: absolute;
  left: 10%;
  top :7%;
  z-index: 99999;
}

#daisies-nav{
  position: absolute;
  bottom : 10%;
  left: 6%;
}

#detail-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -1;
  transition: opacity .4s ease-in-out;
}

#daisies{
  font-family: "Poiret One", cursive;
}

.section{
  width: 100%;
  height: 100%;
}
// ID选择器 优先级大于 类选择器
// detail最开始在blog cata下面，点击el后才改变z-index上升为可点击
.visible{
  opacity: 1 !important;
  z-index: var(--top-index) !important;
}

@media (max-width: 920px) {
  .cata {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }
}
@media (max-width: 400px) {
  .slideshow-list__el{
    width: 80vw !important;
    min-width: 80vw;
    max-width: 80vw;
    margin-left: 10vw;
  }
}

</style>
