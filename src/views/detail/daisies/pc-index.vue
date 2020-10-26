<template>
  <div id="daisies-detail-pc">
    <!-- Full-page will init itself automatically on `mount`. -->
    <Closer class="daisies_closer" @clickHandler="closePage" />
    <NavIndicator id="daisies-nav" ref="daisies_nav_indicator" @choosed="onNavClick" />
    <full-page id="fullpage" ref="fullpage" :options="options" :skip-init="true">
      <div class="section active">
        <div class="section-content section-content-offset">
          <h2 class="section-one-text section-one-title">
            Rocks & <span class="title__offset title__offset--medium">Mountains</span>
          </h2>
          <p id="section-one-paragraph" class="section-one-text section-font">
            <RoughNotation
              :is-show="title_line"
              type="underline"
            >
              <span>Rough Notation is awesome</span>
            </RoughNotation>
            A small JavaScript library to create and animate annotations on a web page

            Rough Notation uses RoughJS to create a hand-drawn look and feel. Elements can be annotated in a number of different styles. Animation duration and delay can be configured, or just turned off.

            Rough Notation is 3.8kb in size when gzipped, and the code is available on GitHub.
          </p>
        </div>
      </div>
      <div id="second-section" class="section">
        <div class="section-content section-two-text section-font">
          <span>A strange idea,</span>
          <div class="rw-words rw-words-1">
            <span class="rw-word">Tiny,</span>
            <span class="rw-word">Big, </span>
            <span class="rw-word">Break, </span>
            <span class="rw-word">Cure</span>
          </div>
          such a touching scene. <br>
          I was just wondering. <br>
          A period of wanting to be accepted. <br>
          Close to.
          <br><br>
          <div class="rw-words rw-words-2">
            <span class="rw-word">Pride,</span>
            <span class="rw-word">Coward,</span>
            <span class="rw-word">Despise,</span>
            <span class="rw-word">Jealous.</span>
          </div>
          Something has happened. <br>
          Hidden anger. <br>
          Run away.
        </div>

      </div>
      <div class="section">
        <section class="rw-wrapper">
          <h2 class="rw-sentence">
            <span>Real poetry is like</span>
            <br>
            <span>creating beautiful butterflies</span>
            <br>
            <span>with a silent touch of</span>
            <div class="rw-words">
              <span>spice</span>
              <span>colors</span>
              <span>happiness</span>
              <span>wonder</span>
              <span>sugar</span>
              <span>happiness</span>
            </div>
          </h2>
        </section>
      </div>
      <div class="section">
        Fourth section ...
      </div>
    </full-page>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Power1, Power2, Power4, Sine, Expo } from 'gsap'
import Closer from '@/components/Closer.vue'
import NavIndicator from '@/components/NavIndicator.vue'
import { getWindowWidth } from '@/assets/js/utils'
export default {
  components: {
    Closer,
    NavIndicator
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
      title_line: false
    }
  },
  mounted() {
  },
  methods: {
    onNavClick(index) {
      this.$refs.fullpage.api.moveTo(index + 1)
    },
    showDetail(scroll) {
      // 初始化fullpage全屏滚动
      this.$nextTick(() => {
        this.$refs.fullpage.init()
      })

      // detail 进场
      const daisies = document.querySelectorAll('#daisies-detail-pc')
      this.$GSAP.fromTo(daisies, 0.5, {
        alpha: 0
      }, {
        alpha: 1,
        ease: Expo.easeIn
      })

      // 点击el外其他的el退场
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        if (!it.classList.contains('trigger')) {
          this.$GSAP.to(it, 0.2, {
            alpha: 0,
            ease: Expo.easeInOut
          })
        }
      })

      // closer进场
      this.$GSAP.fromTo(document.querySelector('.daisies_closer'), 1, {
        rotate: -45,
        scale: 0,
        alpha: 0
      }, {
        rotate: 0,
        scale: 1,
        alpha: 1,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el进场
      const trigger = document.querySelector('.trigger')
      console.log(scroll)
      // TODO: Find a way to resolve the distance problem
      const offset = getWindowWidth() - getWindowWidth() * 13 / 100 -
      trigger.clientWidth -
      trigger.offsetWidth +
      scroll.offset.x
      this.$GSAP.to(trigger, 0.9, {
        x: offset,
        scale: 1.3,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题y轴退场
      const content = document.querySelector('.tile__content')
      const direction = 'up'
      this.$GSAP.to(content, 0.6, {
        y: direction === 'up' ? -200 : 200,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 详情页section content 进场
      const section_one_title = document.querySelector('.section-content')
      this.$GSAP.fromTo(section_one_title, 1, {
        alpha: 0
      }, {
        alpha: 1,
        ease: Power2.easeInOut,
        onComplete: () => {
          this.title_line = true
        }
      })
    },
    // Animate all the bg images out and animate the new menu item's in
    toggleMenuItems(upcomingItem, direction = 'up') {
      const dir = direction === 'up' ? 1 : -1
      this.$GSAP.timeline({
        defaults: {
          duration: 1,
          ease: 'expo.inOut'
        }
      })
        .to(upcomingItem, {
          ease: 'expo.in',
          duration: 0.5,
          y: dir * -100 + '%'
        }, 0)
        .to(upcomingItem, {
          ease: 'expo',
          duration: 0.8,
          startAt: { y: dir * 100 + '%' },
          y: '0%'
        }, 0.5)
    },
    closePage() {
      console.log('click')
      this.$refs.fullpage.api.setAllowScrolling(false) // 点击关闭后快速滚动滑轮, el重新入场的bug
      document.querySelector('.daisies_closer').classList.add('non-clickable')
      // wrapper退场
      this.$GSAP.fromTo(document.querySelector('#daisies-detail-pc'), 0.8, {
        alpha: 1
      }, {
        alpha: 0,
        ease: Expo.easeIn,
        onComplete: () => {
          this.$nextTick(() => {
            this.$parent.closeDaisiesDetailPage()
          })
        }
      })

      // section-content退场
      const section_content = document.querySelector('.section-content')
      this.$GSAP.fromTo(section_content, 0.4, {
        alpha: 1
      }, {
        alpha: 0,
        ease: Power2.easeIn
      })

      // closer 退场
      this.$GSAP.fromTo(document.querySelector('.daisies_closer'), 0.8, {
        rotate: 0,
        scale: 1,
        alpha: 1
      }, {
        rotate: -45,
        scale: 0,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true,
        onComplete: () => {
          document.querySelector('.daisies_closer').classList.remove('non-clickable')
        }
      })

      // 点击el退场复原
      const trigger = document.querySelector('.trigger')
      this.$GSAP.to(trigger, 0.8, {
        x: 0,
        scale: 1,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题复原
      this.$GSAP.to(document.querySelector('.tile__content'), 0.5, {
        alpha: 1,
        y: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题外其他el恢复可视
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        this.$GSAP.fromTo(it, 0.2,
          { alpha: 0 },
          {
            alpha: 1,
            ease: Expo.easeInOut
          })
      })
    },
    // origin, destination, direction 这三者的含义要清楚
    afterLoad(origin, destination, direction) {
      this.$refs.daisies_nav_indicator.itemChoosed(destination.index)
      if (destination.index === 0) {
        console.log('Section 1 ended loading')
      }
      if (destination.index === 1) {
        const trigger = document.querySelector('.trigger')
        const offset = getWindowWidth() - getWindowWidth() * 13 / 100 -
        trigger.clientWidth -
        trigger.offsetWidth +
        scroll.offset.x
        this.$GSAP.to(trigger, 0.8, {
          x: offset - 10,
          scale: 1.1,
          ease: Power2.easeInOut,
          force3D: true,
          onComplete: () => {
          }
        })
      }
    },
    pageOnLeave(origin, destination, direction) {
      // 这种位移动画演示完毕才可以关闭, 否则会停留在
      if (origin.index === 1) {
        const trigger = document.querySelector('.trigger')
        const offset = getWindowWidth() - getWindowWidth() * 13 / 100 -
        trigger.clientWidth -
        trigger.offsetWidth +
        scroll.offset.x
        this.$GSAP.to(trigger, 1, {
          x: offset - 10,
          scale: 1.3,
          ease: Power2.easeInOut,
          force3D: true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#daisies-detail-pc{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.daisies_closer{
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

.section{
  width: 100%;
  height: 100%;
}

.section-content{
  width: 100%;
  height: 100%;
  text-align: center;
}

.section-one-text{
  width: 80vw;
  margin: 0 auto;
}

.section-two-text{
  text-align: left !important;
}

.section-font{
  text-align: center;
  font-size: 2vw;
  padding: 10vh 10vw 0vh 10vw;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.2;
}

.section-one-title{
  font-size: 5vw;
  color: var(--color-text1);
  padding-top: 10vh;
  text-align: center;
}

.section-content-offset{
  transform: translateX(-100px);
}

</style>
