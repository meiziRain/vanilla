<template>
  <!-- :style="{backgroundImage: 'url('+bgImage+')'}" !-->
  <div id="blog" ref="blog">
    <h1 v-show="false" ref="bg_title" class="page-title | title">What's your next <br> <span class="slideshow__title__offset | title__offset">destination?</span></h1>
    <div class="cata">
      <div id="scroll-content">
        <div class="gallery__text__wrapper">
          <div class="begin-word begin-end-word">
            <div class="gallery__text">
              <span
                class="gallery__text-inner  begin-end-word-up"
              >Story</span>
              <span
                class="gallery__text-inner  begin-end-word-down"
              >Begin</span>
            </div>
          </div>
        </div>
        <div ref="daisies" class="article-wrapper">
          <div class="article-serial">
            <span class="gallery__item-number">01</span>
            <span class="gallery__item-title">Daisies</span>
          </div>
          <article
            id="daisies"
            class="slideshow-list__el"
            @click="showDetail('Daisies')"
            @mouseenter="articleMouseenter('rgb(166, 142, 119)')"
          >
            <img src="@/assets/imgs/shancheng-high.jpg">
          <!-- article 放其他有内容的元素也会引起图片模糊，👴要崩溃了 -->
          </article>
          <div class="article-text">
            <span>
              #Sun #Tree #Red & Gray
            </span>
          </div>
        </div>
        <div class="article-wrapper">
          <div class="article-serial">
            <span class="gallery__item-number">02</span>
            <span class="gallery__item-title">Gardenias</span>
          </div>
          <article
            id="gardenias"
            ref="gardenias"
            class="slideshow-list__el even"
            @click="showDetail('Gardenias')"
            @mouseenter="articleMouseenter('rgb(166, 142, 119)')"
          >
            <img src="@/assets/imgs/shancheng-high.jpg">
          </article>
          <div class="article-text">
            <span>
              #Neon #Dance in the Dark
            </span>
          </div>
        </div>
        <div class="gallery__text__wrapper">
          <div class="end-word begin-end-word">
            <div class="gallery__text">
              <span
                class="gallery__text-inner  begin-end-word-up"
              >End</span>
              <span
                class="gallery__text-inner  begin-end-word-down"
              >The</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="detail-wrapper" ref="daisies_dv_wrapper">
      <!-- FIXME: 为什么这里DaisiesPcDetailView不用v-if控制不占位会导致滚动条可以下拉？ -->
      <DaisiesPcDetailView v-if="showDaisiesPcDetailView" ref="daisies_dv" />
    </div>
    <div ref="progress_ctn" class="slideshow__progress-ctn"><span ref="progress" class="slideshow__progress" /></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Power2, Expo } from 'gsap'
import { map } from '@/assets/js/utils'
// 滚动
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/js/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
import DaisiesPcDetailView from '@/views/detail/daisies/index.vue'
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
    this.$GSAP.set(document.querySelectorAll('.article-wrapper'), {
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
      this.$GSAP.set(document.querySelectorAll('.article-wrapper'), {
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
      this.$GSAP.killTweensOf((document.querySelectorAll('.article-wrapper')))
      const blogActivatedTimeline = this.$GSAP.timeline({ repeat: 0, repeatDelay: 0 })
      blogActivatedTimeline.fromTo(document.querySelectorAll('.article-wrapper'), {
        alpha: 0,
        y: 100
      }, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        duration: 0.8,
        force3D: true
      })
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
      this.$refs.daisies_dv.$refs.fullpage.destroy()
      this.showDaisiesPcDetailView = false
      this.$refs.daisies_dv_wrapper.classList.toggle('visible')
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

      // 标题退场, 进场放在Closer组件中
      this.$GSAP.to(document.querySelectorAll('.article-serial'), 0.2, {
        alpha: 0,
        ease: Expo.easeInOut
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

      this.$refs.daisies_dv_wrapper.classList.toggle('visible')
      this.$refs.daisies.classList.toggle('trigger')
      this.showDaisiesPcDetailView = true
      this.$nextTick(() => {
        this.$refs.daisies_dv.showDetail(this.scroll)
      })
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
      this.updateBeginWord()
    },
    updateBeginWord() {
      const progress = map(this.progress * 400, 0, 100, 5, 100)
      this.$GSAP.to(document.querySelector('.begin-word .begin-end-word-up'), 0.3, { yPercent: -progress, force3D: true })
      this.$GSAP.to(document.querySelector('.begin-word .begin-end-word-down'), 0.3, { yPercent: progress, force3D: true })
      const end_progress = map(this.progress * 200, 0, 200, 5, 100)
      this.$GSAP.to(document.querySelector('.end-word .begin-end-word-up'), 0.3, { yPercent: end_progress, force3D: true })
      this.$GSAP.to(document.querySelector('.end-word .begin-end-word-down'), 0.3, { yPercent: -end_progress, force3D: true })
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
  background-color: var(--background-color);
  // background-color: rgb(253, 251, 243);
  transition-property: background-color;
  -webkit-transition-property: background-color;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  transition-timing-function: ease;
  -webkit-transition-timing-function: ease;
  overflow: hidden;
}

.gallery__text-inner {
	display: block;
}

.begin-end-word {
  z-index: 0 !important; // 小于slideshow-list__el
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20vw;
  line-height: 0.8;
  margin: 0 0 0 14vw;
  padding: 0 4vh 0 0;
  text-transform: lowercase;
  font-family: moret, serif;
  -webkit-text-stroke: 1px red;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-style: italic;
  align-self: center;
}

.gallery__text__wrapper {
  height: 100vh;
  flex-shrink: 0;
  overflow-y: hidden;
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

.article-serial{
  z-index: 10;  // > slide-el
  position: absolute;
  font-family: moret, serif;
  font-weight: 800;
  font-style: italic;
  align-self: center;
  transform: translateX(8vh);

  & .gallery__item-number {
    color: blue;
    font-size: clamp(2.5rem,9vw,6.5rem);
    font-family: Monoton,cursive;
    text-shadow: var(--blue-shadow);
  }

  & .gallery__item-title {
    padding-left: 2vh;
    color: rgb(74, 82, 94);
    font-size: clamp(2rem,5vw,4rem);
  }
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

#scroll-content {
  display: flex;
  height: 100vh;
  align-items: center;
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

.article-wrapper{
  position:relative;
  z-index:9; // 大于begin-end-word
  transition: opacity 0.3s; // 可以覆盖gsap的
}

.slideshow-list__el {
  width: 45vh;
  height: 60vh;
  margin-left: 15vw;
  will-change: transform, opacity;

  &>img{
    width:auto;
    height:auto;
    max-height:100%;
  }
}

.article-text{
  text-align: right;
  transform: translate3d(0, 20px, 0);
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

.slideshow__progress-ctn {
  overflow: hidden;
  position: absolute;
  bottom: 5%;
  left: calc(50% - 6.5rem);
  width: 13rem;
  height: .4rem;
  background-color: rgba(255, 32, 51, 0.2);
  border-radius: .4rem;
  will-change: transform;
}

.slideshow__progress {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: .4rem;
  transform: translateX(-100%);
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
