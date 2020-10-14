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
          <p id="section-one-paragraph" class="section-one-text">
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
        <div class="section-content">
          <p>
            A strange idea, Tiny , Big, Break, Cure <br>
            such a touching scene. <br>
            I was just wondering. <br>
            A period of wanting to be accepted. <br>
            Close to.<br><br>

            Pride, Coward, Despise, Jealous. <br>
            Something has happened. <br>
            Hidden anger. <br>
            Run away.
          </p>
        </div>

      </div>
      <div class="section">
        Third section ...
      </div>
      <div class="section">
        Fourth section ...
      </div>
    </full-page>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Power1, Power2, Power4, Sine, Expo, gsap as GSAP } from 'gsap'
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
    showDetail() {
      // 初始化fullpage全屏滚动
      this.$nextTick(() => {
        this.$refs.fullpage.init()
      })

      // detail 进场
      const daisies = document.querySelectorAll('#daisies-detail-pc')
      GSAP.fromTo(daisies, 0.5, {
        alpha: 0
      }, {
        alpha: 1,
        ease: Expo.easeIn
      })

      // 点击el外其他的el退场
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        if (!it.classList.contains('trigger')) {
          GSAP.to(it, 0.2, {
            alpha: 0,
            ease: Expo.easeInOut
          })
        }
      })

      // closer进场
      GSAP.fromTo(document.querySelector('.daisies_closer'), 1, {
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
      // TODO: Find a way to resolve the distance problem
      const offset = getWindowWidth() - getWindowWidth() * 13 / 100 - trigger.clientWidth - trigger.offsetWidth
      GSAP.to(trigger, 0.9, {
        x: offset,
        scale: 1.3,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题y轴退场
      const content = document.querySelector('.tile__content')
      const direction = 'up'
      GSAP.to(content, 0.6, {
        y: direction === 'up' ? -200 : 200,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 详情页section content 进场
      const section_one_title = document.querySelector('.section-content')
      GSAP.fromTo(section_one_title, 1, {
        y: 600,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      }, {
        y: 0,
        alpha: 1,
        ease: Power2.easeInOut,
        force3D: true,
        onComplete: () => {
          this.title_line = true
        }
      })
    },
    // Animate all the bg images out and animate the new menu item's in
    toggleMenuItems(upcomingItem, direction = 'up') {
      const dir = direction === 'up' ? 1 : -1
      GSAP.timeline({
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
      this.$refs.fullpage.api.setAllowScrolling(false) // 点击关闭后快速滚动滑轮, el重新入场的bug
      document.querySelector('.daisies_closer').classList.add('non-clickable')
      // wrapper退场
      GSAP.fromTo(document.querySelector('#daisies-detail-pc'), 0.8, {
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
      GSAP.fromTo(section_content, 0.4, {
        y: 0,
        alpha: 1
      }, {
        y: 400,
        alpha: 0,
        ease: Power2.easeIn,
        force3D: true
      })

      // closer 退场
      GSAP.fromTo(document.querySelector('.daisies_closer'), 0.8, {
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
      GSAP.to(trigger, 0.8, {
        x: 0,
        scale: 1,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题复原
      GSAP.to(document.querySelector('.tile__content'), 0.5, {
        alpha: 1,
        y: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题外其他el恢复可视
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        GSAP.to(it, 0.7, {
          alpha: 1,
          ease: Power4.easeInOut
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
        const offset = getWindowWidth() - getWindowWidth() * 13 / 100 - trigger.clientWidth - trigger.offsetWidth
        GSAP.to(trigger, 1, {
          x: offset - 10,
          scale: 1.1,
          ease: Power2.easeInOut,
          force3D: true
        })
      }
    },
    pageOnLeave(origin, destination, direction) {
      if (origin.index === 1) {
        const trigger = document.querySelector('.trigger')
        const offset = getWindowWidth() - getWindowWidth() * 13 / 100 - trigger.clientWidth - trigger.offsetWidth
        GSAP.to(trigger, 1, {
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
  width: 100%;
  height: 100%;
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

.section-content>p{
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
