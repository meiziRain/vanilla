<template>
  <div id="about">
    <h1 ref="bg_title" class="page-title | title">What's your next <span class="slideshow__title__offset | title__offset">destination?</span></h1>
    <section class="cata">
      <div class="scroll-content">
        <article ref="daisies" class="slideshow-list__el" @click="showDetail">
          <img
            src="@/assets/gooey-hover/img/tiles/woods/base.jpg"
            data-hover="@/assets/gooey-hover/img/tiles/woods/hover.jpg"
            alt="Woods & Forests"
          >
          <div class="tile__content">
            <h2 class="tile__title | title title--medium ">
              Rocks & <span class="title__offset title__offset--medium">Mountains</span></h2>
            <div class="tile__cta">
              <span class="btn-inline">See more</span>
            </div>
          </div>
        </article>
        <article class="slideshow-list__el">
          <img
            src="@/assets/gooey-hover/img/tiles/woods/base.jpg"
            data-hover="@/assets/gooey-hover/img/tiles/woods/hover.jpg"
            alt="Woods & Forests"
          >
          <div class="tile__content">
            <h2 class="tile__title | title title--medium ">
              Rocks & <span class="title__offset title__offset--medium">Mountains</span></h2>
            <div class="tile__cta">
              <span class="btn-inline">See more</span>
            </div>
          </div>
        </article>
        <article class="slideshow-list__el">
          <img
            src="@/assets/gooey-hover/img/tiles/woods/base.jpg"
            data-hover="@/assets/gooey-hover/img/tiles/woods/hover.jpg"
            alt="Woods & Forests"
          >
          <div class="tile__content">
            <h2 class="tile__title | title title--medium ">
              Rocks & <span class="title__offset title__offset--medium">Mountains</span></h2>
            <div class="tile__cta">
              <span class="btn-inline">See more</span>
            </div>
          </div>
        </article>
      </div>
    </section>
    <div id="detail-wrapper" ref="daisies_dv">
      <DetailView v-if="false" ref="mobile_dv" @close="closeDetailView" />
      <div id="dev-pc">
        <!-- Full-page will init itself automatically on `mount`. -->
        <Closer class="closer" @clickHandler="closePage" />
        <full-page id="fullpage" ref="fullpage" :options="options" :skip-init="true">
          <div class="section active">
            First sectio123123123123123n ...
          </div>
          <div class="section">
            Second sect123123123123123123ion ...
          </div>
        </full-page>
      </div>
    </div>
    <div ref="progress_ctn" class="slideshow__progress-ctn"><span ref="progress" class="slideshow__progress" /></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { TweenMax as TM, Power1, Power2, Power4, Sine, Expo } from 'gsap'
import { map } from '@/assets/gooey-hover/js/utils/utils'
// 滚动
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/gooey-hover/js/utils/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
import DetailView from '@/views/detail/index.vue'
import Closer from '@/components/Closer.vue'
export default {
  components: {
    DetailView,
    Closer
  },
  data() {
    return {
      options: {
        // fullpage.js afterLoad 回调 index 取值有问题, 这里使用anchor标记滚动到了which section
        lockAnchors: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        onLeave: this.pageOnLeave
      },
      offsetTitle: 100,
      progress: 0
    }
  },
  created() {},
  mounted() {
    // new Stage();
    this.initScroller()
  },
  methods: {
    closePage() {
      this.initScroller()
      this.$refs.daisies_dv.classList.toggle('visible')
      const trigger = document.querySelector('.trigger')
      TM.to(trigger, 1, {
        x: 0,
        scale: 1,
        ease: Power2.easeInOut,
        force3D: true,
        onComplete: () => {
          // 需要使用 setTimeout 之类的异步方式调用, 否则关闭时<section>会叠在一起(样式已经丢失).
          // FIXME: 为什么 nextTick 不行?
          this.$refs.fullpage.destroy()
        }
      })
      this.$refs.daisies.classList.toggle('trigger')
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        TM.to(it, 0.7, {
          alpha: 1,
          ease: Power4.easeInOut
        })
      })
    },
    // origin, destination, direction 这三者的含义要清楚
    afterLoad(origin, destination, direction) {
      // console.log(destination)
      if (destination.index === 0) {
        console.log('Section 1 ended loading')
      }
      if (destination.index === 1) {
        const trigger = document.querySelector('.trigger')
        const offset = window.innerWidth - trigger.clientWidth - trigger.offsetWidth - 10
        TM.to(trigger, 1, {
          x: offset - 10,
          scale: 1.2,
          ease: Power2.easeInOut,
          force3D: true
        })
      }
    },
    pageOnLeave(origin, destination, direction) {
      if (origin.index === 1) {
        const trigger = document.querySelector('.trigger')
        const offset = window.innerWidth - trigger.clientWidth - trigger.offsetWidth - 10
        TM.to(trigger, 1, {
          x: offset - 10,
          scale: 1.4,
          ease: Power2.easeInOut,
          force3D: true
        })
      }
    },
    initScroller() {
      this.Scroll = Scrollbar.init(document.querySelector('.cata'), {
        delegateTo: document,
        continuousScrolling: false,
        overscrollEffect: 'bounce',
        damping: 0.05,
        plugins: {
          horizontalScroll: {
            events: [/wheel/]
          }
        }
      })

      this.Scroll.track.xAxis.element.remove()
      this.Scroll.track.yAxis.element.remove()
      Scrollbar.detachStyle()
      this.Scroll.addListener((s) => { this.onScroll(s) })
    },
    showDetail() {
      if (this.$store.state.isMobile) {
        this.$refs.mobile_dv.open()
        Scrollbar.destroy(document.querySelector('.cata'))
        this.$refs.daisies_dv.classList.toggle('visible')
      } else {
        Scrollbar.destroy(document.querySelector('.cata'))
        this.$refs.daisies_dv.classList.toggle('visible')

        this.$refs.daisies.classList.toggle('trigger')
        const els = document.querySelectorAll('.slideshow-list__el')
        els.forEach(it => {
          if (!it.classList.contains('trigger')) {
            TM.to(it, 0.2, {
              alpha: 0,
              ease: Expo.easeIn
            })
          }
        })

        const trigger = document.querySelector('.trigger')
        const offset = window.innerWidth - trigger.clientWidth - trigger.offsetWidth - 10
        TM.to(trigger, 1, {
          x: offset,
          scale: 1.4,
          ease: Power2.easeInOut,
          force3D: true
        })

        // 初始化全屏滚动
        this.$nextTick(() => {
          this.$refs.fullpage.init()
        })
      }
    },
    closeDetailView() {
      this.initScroller()
      this.$refs.daisies_dv.classList.toggle('visible')
    },
    /* Handlers
    --------------------------------------------------------- */
    onScroll({ limit, offset }) {
      this.progress = offset.x / limit.x
      TM.to(this.$refs.bg_title, 0.3, { x: -this.progress * this.offsetTitle, force3D: true })
      this.updateScrollBar()
    },
    /* Actions
    --------------------------------------------------------- */
    updateScrollBar() {
      const progress = map(this.progress * 100, 0, 100, 5, 100)
      TM.to(this.$refs.progress, 0.3, { xPercent: progress, force3D: true })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/gooey-hover/sass/styles.scss';
#about {
  width: 100vw;
  height: 100vh;
}

.page-title {
  position: fixed;
  top: 9rem;
  left: 5vw;
  z-index: -1;
  white-space: nowrap;
  font-size: calc(4vw + 8rem);
  line-height: .975;
  color: var(--textColor);
  opacity: .1;
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
}

.scroll-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.slideshow-list__el {
  cursor: pointer;
  width: 250px;
  height: 350px;
  min-width: 25rem;
  max-width: 40vmin;
  margin-left: 15vw;
}

#dev-pc{
  border:1px solid red;
  width: 100%;
  height: 100%;
}

.closer{
  position: absolute;
  left: 10%;
  top :7%;
  z-index: 99999;
}

#detail-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  // height: calc(100vh - 60px);
  height: 100vh;
  // padding: 60px 2vw 2vh 2vw;
  opacity: 0;
  z-index: -999;
  transition: opacity .4s ease-in-out;
}

.section{
  width: 100%;
  // height: calc(100vh - 60px);
  height: 100%;
  // padding: 60px 2vw 2vh 2vw;
}
// ID选择器 优先级大于 类选择器
.visible{
  opacity: 1 !important;
  z-index: 99 !important;
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

@media (min-width: 920px) {
  .slideshow-list__el:nth-child(odd) {
    transform: translateY(10%);
  }

  .slideshow-list__el:nth-child(even) {
    transform: translateY(-10%);
  }
}

@media (max-width: 920px) {
  #about {
    width: 100vw;
    height: calc(100vh - 60px);
  }

  .cata {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }
}
</style>
