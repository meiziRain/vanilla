<template>
  <!-- :style="{backgroundImage: 'url('+bgImage+')'}" !-->
  <div id="blog" ref="blog">
    <h1 ref="bg_title" class="page-title | title">What's your next <br> <span class="slideshow__title__offset | title__offset">destination?</span></h1>
    <section class="cata">
      <div class="scroll-content">
        <article
          id="daisies"
          ref="daisies"
          class="slideshow-list__el"
          :style="{backgroundImage: 'url('+ require('@/assets/imgs/shancheng.jpg') +')'}"
          @click="showDetail('Daisies')"
          @mouseenter="articleMouseenter('rgb(166, 142, 119)')"
          @mouseleave="articleMouseleave"
          @mousemove="articleMove"
        >
        <!-- 使用大图sugar-bee.jpg(>3M)时，第一次加载位移动画会卡顿 -->
          <p
            class="tile__content tile__title"
            :style="{backgroundImage: 'url('+ require('@/assets/imgs/sugar-bee.jpg') +')'}"
          >
            山城
          </p>
        </article>
        <article
          ref="gardenias"
          class="slideshow-list__el"
          @mouseenter="articleMouseenter('rgb(136, 114, 103)')"
          @mousemove="articleMove"
        />
        <article
          class="slideshow-list__el"
          @mousemove="articleMove"
        />
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
import { getMousePos } from '@/assets/js/utils.js'
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
      y: 200
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
      console.time('slideshow')
      blogActivatedTimeline.fromTo(document.querySelectorAll('.slideshow-list__el'), {
        alpha: 0,
        y: 200
      }, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        duration: 1,
        onComplete: () => {
          console.timeEnd('slideshow')
        }
      })
      blogActivatedTimeline.fromTo(
        document.querySelectorAll('.slideshow-list__el:nth-child(odd)'), {
          y: 0,
          boxShadow: ''
        }, {
          y: 40,
          boxShadow: '5px 5px 10px  2px rgba(0,0,0,0.6)',
          ease: Expo.easeOut,
          duration: 1.5
        }, 1.2)
      blogActivatedTimeline.fromTo(
        document.querySelectorAll('.slideshow-list__el:nth-child(even)'), {
          y: 0,
          boxShadow: ''
        }, {
          y: -40,
          boxShadow: '5px 5px 10px  2px rgba(0,0,0,0.6)',
          alpha: 1,
          ease: Expo.easeOut,
          duration: 1.5
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
    articleMove(ev) {
      requestAnimationFrame(() => {
        // Tilt the current slide.
        this.tilt(ev)
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
    },
    tilt(ev) {
      const mousepos = getMousePos(ev)
      // Document scrolls.
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop
      }
      const bounds = ev.target.getBoundingClientRect()
      // Mouse position relative to the main element (this.DOM.el).
      const relmousepos = {
        x: mousepos.x - bounds.left - docScrolls.left,
        y: mousepos.y - bounds.top - docScrolls.top
      }

      // Move the element from -20 to 20 pixels in both x and y axis.
      // Rotate the element from -15 to 15 degrees in both x and y axis.
      const t = { x: [-20, 20], y: [-20, 20] }
      const r = { x: [-15, 15], y: [-15, 15] }

      const transforms = {
        translation: {
          x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
          y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0]
        },
        rotation: {
          x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
          y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0]
        }
      }

      // Move the texts wrap.
      this.$GSAP.to(ev.target.querySelectorAll('.move-text'), 1.5, {
        ease: 'Power1.easeOut',
        x: -1 * transforms.translation.x,
        y: -1 * transforms.translation.y
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#blog {
  width: 100vw;
  height: 100vh;
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;//设置文字填充色为透明
  color:transparent;
  &:first-letter {
    font-size:4em;
  }
}

.slideshow-list__el {
  opacity: 0;
  width: 40vh;
  height: 60vh;
  margin-left: 15vw;
  will-change: transform, opacity;
  min-width: 25rem;
  max-width: 40vh;
  background-size: cover;
  transition: opacity 1s;
  // box-shadow: 5px 5px 10px  2px rgba(0,0,0,0.6);
  &:nth-child(1){
    border-radius: 10px 100px / 120px;
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
  font-family: '楷体';
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
