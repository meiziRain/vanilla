<template>
  <div id="dev-pc">
    <!-- Full-page will init itself automatically on `mount`. -->
    <Closer class="daisies_closer" @clickHandler="closePage" />
    <NavIndicator id="daisies-nav" ref="daisies_nav_indicator" @choosed="onNavClick" />
    <full-page id="fullpage" ref="fullpage" :options="options" :skip-init="true">
      <div class="section active">
        <div class="section-content section-content-offset">
          <h2 class="section-one-title">
            Rocks & <span class="title__offset title__offset--medium">Mountains</span>
          </h2>
        </div>
      </div>
      <div class="section">
        Second section ...
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
import { TweenMax as TM, Power1, Power2, Power4, Sine, Expo } from 'gsap'
import Closer from '@/components/Closer.vue'
import NavIndicator from '@/components/NavIndicator.vue'
export default {
  components: {
    Closer,
    NavIndicator
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
      progress: 0,
      margin: 27
    }
  },
  methods: {
    getWindowWidth() {
      if (document.compatMode === 'CSS1Compat') {
        return document.documentElement.clientWidth
      } else {
        return document.body.clientWidth
      }
    },
    onNavClick(index) {
      this.$refs.fullpage.api.moveTo(index + 1)
    },
    showDetail() {
      // 初始化全屏滚动
      this.$nextTick(() => {
        this.$refs.fullpage.init()
      })

      // 点击el外其他的el退场
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        if (!it.classList.contains('trigger')) {
          TM.to(it, 0.2, {
            alpha: 0,
            ease: Expo.easeIn
          })
        }
      })

      // closer进场
      TM.fromTo(document.querySelector('.daisies_closer'), 1, {
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
      const offset = this.getWindowWidth() - this.getWindowWidth() * 13 / 100 - trigger.clientWidth - trigger.offsetWidth
      TM.to(trigger, 1, {
        x: offset,
        scale: 1.3,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题y轴退场
      const content = document.querySelector('.tile__content')
      TM.to(content, 0.5, {
        y: 500,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 详情页section 1 标题进场
      const section_one_title = document.querySelector('.section-one-title')
      TM.fromTo(section_one_title, 1, {
        y: 600,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      }, {
        y: 0,
        alpha: 1,
        ease: Power2.easeInOut,
        force3D: true
      })
    },
    closePage() {
      // closer 退场
      TM.to(document.querySelector('.daisies_closer'), 1, {
        rotate: -45,
        scale: 0,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el退场复原, 销毁fullpage
      const trigger = document.querySelector('.trigger')
      TM.to(trigger, 1, {
        x: 0,
        scale: 1,
        ease: Power2.easeInOut,
        force3D: true,
        onComplete: () => {
          // 需要使用 setTimeout 之类的异步方式调用, 否则关闭时<section>会叠在一起(样式已经丢失).
          // FIXME: Why can not use nextTick() ?
          this.$refs.fullpage.destroy()
        }
      })

      // 点击el标题复原
      const content = document.querySelector('.tile__content')
      TM.to(content, 0.5, {
        alpha: 1,
        y: 0,
        ease: Power2.easeInOut,
        force3D: true
      })

      // 点击el标题外其他el恢复可视
      const els = document.querySelectorAll('.slideshow-list__el')
      els.forEach(it => {
        TM.to(it, 0.7, {
          alpha: 1,
          ease: Power4.easeInOut
        })
      })
      this.$parent.closePage()
    },
    // origin, destination, direction 这三者的含义要清楚
    afterLoad(origin, destination, direction) {
      this.$refs.daisies_nav_indicator.itemChoosed(destination.index)
      if (destination.index === 0) {
        console.log('Section 1 ended loading')
      }
      if (destination.index === 1) {
        const trigger = document.querySelector('.trigger')
        const offset = this.getWindowWidth() - this.getWindowWidth() * 13 / 100 - trigger.clientWidth - trigger.offsetWidth
        TM.to(trigger, 1, {
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
        const offset = this.getWindowWidth() - this.getWindowWidth() * 13 / 100 - trigger.clientWidth - trigger.offsetWidth
        TM.to(trigger, 1, {
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
#dev-pc{
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

.section-one-title{
  font-size: 5vw;
  color: var(--color-text1);
  padding-top: 10vh;
}

.section-content-offset{
  transform: translateX(-100px);
}
</style>
