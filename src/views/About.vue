<template>
  <div id="about">
    <h1 ref="bg_title" class="page-title | title">What's your next <span class="slideshow__title__offset | title__offset">destination?</span></h1>
    <section class="cata">
      <div class="scroll-content">
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
        <div class="slideshow-list__el">
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
        </div>
        <div class="slideshow-list__el">
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
        </div>
        <div class="slideshow-list__el">
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
        </div>
      </div>
    </section>
    <DetailView />
    <div ref="progress_ctn" class="slideshow__progress-ctn"><span ref="progress" class="slideshow__progress" /></div>
  </div>
</template>

<script>
// import Stage from "@/assets/gooey-hover/js/Stage";
// import DetailView from "@/assets/gooey-hover/js/Detail";
import { TweenMax as TM } from 'gsap'
import { map } from '@/assets/gooey-hover/js/utils/utils'
// 滚动
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/gooey-hover/js/utils/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
import DetailView from '@/views/detail/index.vue'
export default {
  components: {
    DetailView
  },
  data() {
    return {
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
      this.$refs.detail.style.display = 'inherit'
      this.$refs.detail.classList.toggle('is-interactive')
      this.$refs.detail.classList.toggle('is-visible')
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

.scroll-viewport{
  display: block;
}

.slideshow-list__el {
  cursor: pointer;
  width: 250px;
  height: 350px;
  min-width: 25rem;
  max-width: 40vmin;
  margin-left: 15vw;
}

img {
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
