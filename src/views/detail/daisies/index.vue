<template>
  <div id="daisies-detail-pc">
    <!-- Full-page will init itself automatically on `mount`. -->
    <Closer class="daisies_closer" @clickHandler="closePage" />
    <NavIndicator id="daisies-nav" ref="daisies_nav_indicator" outcolor="rgb(118, 153, 179)" incolor="rgb(159, 134, 110)" @choosed="onNavClick" />
    <full-page id="fullpage" ref="fullpage" :options="options" :skip-init="true">
      <div class="section active">
        <div class="section-content section-content-offset">
          <h2 class="section-one-text section-one-title">
            阿巴阿巴
          </h2>
          <p id="section-one-paragraph" class="section-one-text section-padding">
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
        <div class="section-content section-two-text section-padding">
          <div class="blush-img blush-img-left"><img ref="left_img" src="@/assets/imgs/blush-her.png"></div>
          <div class="blush-chat">
            <div class="talk-img"><img src="@/assets/imgs/leg.jpg"></div>
            <div class="blush-words">
              <p class="blush-word her">i just bought a swimsuit.</p>
              <p class="blush-word man">i want to fuck u in the ass right now</p>
              <p class="blush-word her">...</p>
              <p class="blush-word her">✋打住</p>
            </div>
          </div>
          <div class="blush-img blush-img-right"><img ref="right_img" src="@/assets/imgs/blush-man-2.png"></div>
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
    </full-page>
  </div>
</template>

<script>
import Closer from '@/components/Closer.vue'
import NavIndicator from '@/components/NavIndicator.vue'
import { getWindowWidth, getWindowHeight } from '@/assets/js/utils'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
Scrollbar.use(OverscrollPlugin)
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
      title_line: false,
      scroll: {},
      offset: 0,
      chatTimeline: {}
    }
  },
  mounted() {
    this.initChatTimeline()
  },
  methods: {
    onNavClick(index) {
      this.$refs.fullpage.api.moveTo(index + 1)
    },
    showDetail(scroll) {
      this.scroll = scroll
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
        ease: 'Expo.easeIn'
      })

      // 点击el外其他的el退场
      const els = document.querySelectorAll('.article-wrapper:not(.trigger)')
      this.$GSAP.to(els, 0.2, {
        alpha: 0,
        ease: 'Expo.easeInOut'
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
        ease: 'Power2.easeInOut',
        force3D: true
      })

      // 点击el进场
      const trigger = document.querySelector('.trigger')
      this.offset = getWindowWidth() - getWindowWidth() * 13 / 100 -
      trigger.clientWidth +
      this.scroll.offset.x -
      document.querySelector('.begin-word').clientWidth -
      getWindowWidth() * 5 / 100 - // (begin-word的margin，适当减小)
      getWindowHeight() * 60 / 100
      this.$GSAP.to(trigger, 0.9, {
        x: this.offset,
        scale: 1.3,
        ease: 'Power2.easeInOut',
        force3D: true
      })

      // 详情页section content 进场
      const section_one_title = document.querySelector('.section-content')
      this.$GSAP.fromTo(section_one_title, 1, {
        alpha: 0
      }, {
        alpha: 1,
        ease: 'Power2.easeInOut',
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
      this.$refs.fullpage.api.setAllowScrolling(false) // 点击关闭后快速滚动滑轮, el重新入场的bug
      document.querySelector('.daisies_closer').classList.add('non-clickable')
      // wrapper退场
      this.$GSAP.fromTo(document.querySelector('#daisies-detail-pc'), 0.8, {
        alpha: 1
      }, {
        alpha: 0,
        ease: 'Expo.easeIn',
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
        ease: 'Power2.easeIn'
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
        ease: 'Power2.easeInOut',
        force3D: true,
        onComplete: () => {
          document.querySelector('.daisies_closer').classList.remove('non-clickable')
        }
      })

      // 点击el退场复原
      const trigger = document.querySelector('.trigger')
      this.$GSAP.to(trigger, 0.8, {
        x: 0,
        alpha: 1,
        scale: 1,
        ease: 'Power2.easeInOut',
        force3D: true
      })

      // 点击el标题外其他el恢复可视
      const els = document.querySelectorAll('.article-wrapper:not(.trigger)')
      // opacity变化事件由article-wrapper的：transition: opacity 0.8s 控制
      els.forEach(it => {
        this.$GSAP.fromTo(it,
          { alpha: 0 },
          {
            alpha: 1,
            ease: 'Expo.easeInOut',
            force3D: true
          })
      })
    },
    pageOnLeave(origin, destination, direction) {
      console.log('pageOnLeave', origin, destination, direction)
      const trigger = document.querySelector('.trigger')
      if (destination.index === 1) {
        this.$GSAP.killTweensOf('.trigger')// 防止进去Section2时依然执行的alpha = 1动画
        this.$GSAP.to(trigger, {
          alpha: 0,
          ease: 'Power2.easeOut',
          duration: 0.3,
          force3D: true
        })
      }
      if (origin.index === 1) {
        this.chatTimeline.pause()
      }
    },
    // origin, destination, direction 这三者的含义要清楚
    afterLoad(origin, destination, direction) {
      console.log('afterLoad', origin, destination, direction)
      const trigger = document.querySelector('.trigger')
      this.$refs.daisies_nav_indicator.itemChoosed(destination.index)
      if (destination.index === 0 && direction === 'up') {
        console.log('Section 1 ended loading')
        this.$GSAP.to(trigger, 0.5, {
          x: this.offset,
          alpha: 1,
          scale: 1.3,
          ease: 'Power2.easeInOut',
          force3D: true
        })
      }
      if (destination.index === 1) {
        console.log('Section 2 ended loading')
        this.chatTimeline.resume()
      }
    },
    initChatTimeline() {
      this.chatTimeline = this.$GSAP.timeline({ repeat: 0, repeatDelay: 0, paused: true })
      const talk_img = document.querySelector('.talk-img')
      const blush_word_1 = document.querySelector('.blush-word:nth-child(1)')
      const blush_word_2 = document.querySelector('.blush-word:nth-child(2)')
      const blush_word_3 = document.querySelector('.blush-word:nth-child(3)')
      const blush_word_4 = document.querySelector('.blush-word:nth-child(4)')
      const blush_img_right = document.querySelector('.blush-img-right')
      this.chatTimeline.fromTo(talk_img, {
        top: '100%',
        alpha: 0
      }, {
        top: '10%',
        alpha: 1,
        ease: 'Power2.easeInOut',
        duration: 1,
        force3D: true
      }).to([talk_img, blush_word_1], {
        delay: 3,
        top: '-100%',
        duration: 1,
        alpha: 0,
        ease: 'Power2.easeInOut',
        force3D: true
      }).fromTo(blush_word_1, {
        top: '100%',
        alpha: 0
      }, {
        top: '30%',
        alpha: 1,
        ease: 'Power2.easeInOut',
        duration: 1,
        force3D: true
      }, '-=3').fromTo([blush_img_right, blush_word_2], {
        top: '100%',
        alpha: 0,
        ease: 'Power2.easeInOut',
        force3D: true
      }, {
        top: '20%',
        duration: 1,
        alpha: 1,
        ease: 'Power2.easeInOut',
        force3D: true,
        onComplete: () => {
          this.$refs.left_img.src = require('@/assets/imgs/blush-her-unhappy2.png')
          this.$GSAP.delayedCall(2, () => {
            this.$refs.left_img.src = require('@/assets/imgs/blush-her-unhappy.png')
          })
        }
      }, '-=1').to([blush_word_2], {
        top: '10%',
        alpha: 1,
        duration: 1,
        ease: 'Power2.easeInOut',
        force3D: true,
        onComplete: () => {
          this.$refs.right_img.src = require('@/assets/imgs/blush-man-1.png')
        }
      }).to([blush_word_3], {
        top: '40%',
        alpha: 1,
        duration: 1,
        ease: 'Power2.easeInOut',
        force3D: true
      }, '-=1').to([blush_word_2, blush_word_3], {
        delay: 1.5,
        top: '-100%',
        alpha: 1,
        duration: 1,
        ease: 'Power2.easeInOut',
        force3D: true
      }).fromTo(blush_word_4, {
        top: '100%',
        alpha: 0
      }, {
        top: '20%',
        alpha: 1,
        duration: 1,
        ease: 'Power2.easeInOut',
        force3D: true,
        onComplete: () => {
          this.$refs.right_img.src = require('@/assets/imgs/blush-astonish-man.png')
        }
      }, '-=1')
    }
  }
}
</script>

<style lang="scss" scoped>
#daisies-detail-pc{
  color: var(--text-color);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: '楷体';
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
  & img{
    width: 100%;
    height: auto;
    filter: none;
  }
}

.section-content{
  width: 100%;
  height: 100%;
  text-align: center;
}

.section-one-text {
  width: 80vw;
  margin: 0 auto;
}

.section-two-text{
  text-align: left !important;
}

.section-padding {
  position: relative;
  text-align: center;
  font-size: 2vw;
  padding: 10vh 10vw 0vh 15vw;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.2;
}

.section-one-title{
  font-size: 5vw;
  padding-top: 10vh;
  text-align: center;
}

.section-content-offset{
  transform: translateX(-100px);
}

.blush-img {
  width: 45vh;
}

.blush-img-right {
  position: absolute;
  right: 5%;
  transform: rotateY(180deg);
  top: 100%;
}

.blush-words {
  & p {
    font-size: 2vw;
    padding: 2vh;
  }
}

.blush-chat {
  align-content: space-between;
  position: absolute;
  border: 2vh solid var(--text-color);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  width: 40vw;
  height: 70vh;
  left: 50%;
  top: 0;
  padding: 2vh;
  overflow: hidden;
  transform: translate(-50%, 10vh);

  & .talk-img, & .blush-words .blush-word {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, 0);
  }

  & .blush-word {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    &.her {
      background-color: darksalmon;
      border: 2px dashed darkred;
    }

    &.man {
      background-color: darkblue;
      border: 2px dashed darkred;
    }
  }

  .talk-img{
    width: 20vw;
  }
}
</style>
