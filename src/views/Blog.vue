<template>
  <!-- :style="{backgroundImage: 'url('+bgImage+')'}" !-->
  <div id="blog" ref="blog">
    <h1 ref="bg_title" class="page-title | title">What's your next <span class="slideshow__title__offset | title__offset">destination?</span></h1>
    <section class="cata">
      <div class="scroll-content">
        <article
          ref="daisies"
          class="slideshow-list__el"
          @click="showDetail('Daisies')"
          @mouseenter="articleHover('rgb(207, 130, 125)')"
        >
          <img
            src="@/assets/imgs/miao1.jpg"
            data-hover="@/assets/gooey-hover/img/tiles/woods/hover.jpg"
            alt="Woods & Forests"
          >
          <div class="tile__content">
            <h2 class="tile__title | title title--medium ">
              Rocks & <span class="title__offset title__offset--medium">Mountains</span></h2>
          </div>
        </article>
        <article
          ref="gardenias"
          class="slideshow-list__el"
          @mouseenter="articleHover('rgb(136, 114, 103)')"
        >
          <img
            id="gardeniasImg"
            src="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv1.jpg"
            data-hover="@/assets/gooey-hover/img/tiles/woods/hover.jpg"
            alt="Woods & Forests"
          >
          <div class="tile__content">
            <h2 class="tile__title | title title--medium ">
              Rocks & <span class="title__offset title__offset--medium">Mountains</span></h2>
          </div>
        </article>
        <article class="slideshow-list__el">
          <img
            src="@/assets/gooey-hover/img/tiles/deserts/base.jpg"
            data-hover="@/assets/gooey-hover/img/tiles/woods/hover.jpg"
            alt="Woods & Forests"
          >
          <div class="tile__content">
            <h2 class="tile__title | title title--medium ">
              Rocks & <span class="title__offset title__offset--medium">Mountains</span></h2>
          </div>
        </article>
      </div>
    </section>
    <div id="detail-wrapper" ref="daisies_dv">
      <!-- eslint-disable-next-line vue/valid-v-else -->
      <DetailView v-if="isMobile" ref="mobile_dv" @close="closeDaisiesDetailPage" />
      <!-- eslint-disable-next-line vue/valid-v-else -->
      <PcDetailView v-else ref="pc_daisies_dv" />
    </div>
    <div ref="progress_ctn" class="slideshow__progress-ctn"><span ref="progress" class="slideshow__progress" /></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Power1, Power2, Power4, Sine, Expo } from 'gsap'
import { map } from '@/assets/js/utils'
// 滚动
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/js/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
import DetailView from '@/views/detail/daisies/index.vue'
import PcDetailView from '@/views/detail/daisies/pc-index.vue'
export default {
  components: {
    DetailView,
    PcDetailView
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
      cataScroll: {}
    }
  },
  created() {
    // 让slide-el动画完成再可点击
    document.body.classList.add('non-clickable')
  },
  activated() {
    console.log('Blog activated')
    this.initAnim()
  },
  mounted() {
    console.log('Blog mounted')
    this.initScroller()
  },
  methods: {
    initAnim() {
      this.$GSAP.killTweensOf((document.querySelectorAll('.slideshow-list__el')))
      const blogActivatedTimeline = this.$GSAP.timeline({ repeat: 0, repeatDelay: 0 })
      blogActivatedTimeline.fromTo(document.querySelectorAll('.slideshow-list__el'), {
        alpha: 0,
        y: 200
      }, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        duration: 1.5
      })
      blogActivatedTimeline.fromTo(
        document.querySelectorAll('.slideshow-list__el:nth-child(odd)'), {
          y: 0,
          boxShadow: ''
        }, {
          y: 40,
          boxShadow: '0 2px 4px rgba(0,0,0,.1)',
          ease: Expo.easeOut,
          duration: 1.5
        }, 1.5)
      blogActivatedTimeline.fromTo(
        document.querySelectorAll('.slideshow-list__el:nth-child(even)'), {
          y: 0,
          boxShadow: ''
        }, {
          y: -40,
          boxShadow: '0 2px 4px rgba(0,0,0,.1)',
          alpha: 1,
          ease: Expo.easeOut,
          duration: 1.5
        }, 1.5)
      blogActivatedTimeline.eventCallback('onComplete', () => {
        document.body.classList.remove('non-clickable')
      })
    },
    articleHover(color) {
      // this.$refs.blog.style.setProperty('background-color', color)
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
        this.$refs.pc_daisies_dv.showDetail(this.scroll)
      }
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
@import '@/assets/gooey-hover/sass/styles.scss';
#blog {
  width: 100vw;
  height: 100vh;
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  background-color: var(--background-color);
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

.slideshow-list__el {
  cursor: pointer;
  width: 40vw;
  height: 60vh;
  min-width: 25rem;
  border-radius: var(--main-border-radius);
  max-width: 40vmin;
  margin-left: 15vw;
  // box-shadow: 5px 5px 10px  2px rgba(0,0,0,0.6);
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

.slideshow-list__el{
  transition: opacity 1s;
}

img {
  // relative/absolute/fixed  z-index被激活，
  // 如果不设置#mobile的z-index, nav的层级仍然小于这个，原因在于z-index取决于父级元素
  position: relative;
  border-radius: var(--main-border-radius);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity .3s;
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
