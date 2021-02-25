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
          <div class="chat-box">
            <div class="chat-box-border" />
            <div class="chat-box-main">
              <div class="chat-conversation-header" />
              <div class="chat-conversation-list">
                <div class="chat-conversation-list-right">
                  <div class="chat-bubble-right">I just bought a swimsuit.</div>
                  <div class="img"><img src="@/assets/imgs/shancheng-high.jpg"></div>
                </div>

                <div v-for="(item, key) in myMsgs" :key="key" class="chat-conversation-list-left">
                  <div class="chat-bubble-left">{{ item }}</div>
                </div>
              </div>
              <div class="chat-conversation-input">
                <div class="message-box">
                  <input v-model="msg" type="text" class="message-input" placeholder="Type message...">
                  <button type="submit" class="message-submit" @click="send">Send</button>
                </div>
              </div>
            </div>
          </div>
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
      msg: '',
      myMsgs: ['😍'],
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
      offset: 0
    }
  },
  mounted() {
  },
  methods: {
    send() {
      this.myMsgs.push(this.msg)
      this.$nextTick(() => {
        const ele = document.querySelector('.chat-conversation-list')
        ele.scrollTop = ele.scrollHeight
      })
      this.msg = ''
    },
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
        // document.querySelector('#daisies > img')
        //   .setAttribute('src', require('@/assets/imgs/red-head-high.jpg'))
        this.$GSAP.to(trigger, 0.2, {
          alpha: 0,
          ease: 'Power2.easeOut',
          force3D: true
        })
      }
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

.section-font{
  text-align: center;
  font-size: 2vw;
  padding: 10vh 10vw 0vh 10vw;
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

$chat-border: red;
.chat-box {
  & .chat-box-border {
    position: absolute;
    width: 48vh;
    height: 72vh;
    right: 0;
    z-index: -1;
    border: 2px solid $chat-border;
    transform:  translate(calc(-30% + 1vw), 1vw);

    &::after {
      content: '';
      position: absolute;
      width: 48vh;
      height: 72vh;
      right: 0;
      z-index: -1;
      border: 2px solid $chat-border;
      transform: translate(1vw, 1vw);
    }
  }

  & .chat-box-main{
    width: 48vh;
    height: 72vh;
    right: 0;
    position: absolute;
    border: 2px solid $chat-border;
    background-color: var(--background-color);
    transform:  translate(-30%, 0);
    font-size: 3vh;
    word-break:break-all;
    color: black;

    .chat-conversation-header {
      height:6vh;
    }

    .chat-conversation-list {
      height: 58vh;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color:  #595959;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
      }

      & .chat-conversation-list-right{
        position: relative;
        & .chat-bubble-right {
          position: relative;
          transform: translate(-1.5vh, 4vh);
          float: right;
          width: 20vh;
          padding: 1vh;
          z-index: 2;
          background-color: rgb(235, 255, 116);
          border: 2px solid rgb(79, 66, 205);
        }

        & .img {
          position: relative;
          height: 35vh;
          float: right;
          width: 30vh;
          z-index: 1;
          margin: 2.5vh 5vh 0 0;
          object-fit: fill;
          border: 2px solid rgb(79, 66, 205);
        }

        &::after {
          content: "123";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
      }

      & .chat-conversation-list-left {
        margin-top: 2vh;
        position: relative;
        & .chat-bubble-left {
          text-align: justify;
          transform: translate(1.5vh, 0);
          position: relative;
          width: 20vh;
          z-index: 2;
          padding: 1vh;
          background-color: rgb(218, 183, 249);
          border: 2px solid rgb(79, 66, 205);
        }
      }
    }

    .chat-conversation-input {
      padding: 1vh;
      height: 8vh;

      & .message-box{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 10vh;
        padding: 0.8vh 0.8vh 0.8vh 1.6vh;
        border: 1px solid #ccc;

        & input {
          background: none;
          border: none;
          outline: none !important;
          resize: none;
          font-size: 1.8vh;
          margin: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 3vh;
          padding-right: 4vh;
          width: 39vh;
          color: #444;
        }

        & button {
          position: absolute;
          z-index: 1;
          top: 50%;
          right: 1vh;
          transform: translateY(-50%);
          color: #4A90E2;
          border: none;
          /* background: #c29d5f; */
          background: #fff;
          font-size: 1.8vh;
          text-transform: uppercase;
          line-height: 1;
          padding: 1vh 1.5vh;
          border-radius: 10vh;
          outline: none !important;
          transition: background 0.2s ease;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
