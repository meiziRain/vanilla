<template>
  <div id="home">
    <!-- :style="{backgroundImage: 'url('+bgImage+')'}" -->
    <!-- <div id="triangle" :style="{backgroundImage: 'url('+bgImage+')'}" /> -->
    <Soul v-if="false" id="soul" />
    <Marquee v-if="false" />
    <div class="intro">
      <div class="content">
        <div class="grid">
          <div class="grid__item grid__item--a">
            <img src="@/assets/imgs/sunset.jpg">
          </div>
          <div class="grid__item grid__item--b">
            <img src="@/assets/imgs/side.jpg">
          </div>
          <div class="grid__item grid__item--c">
            <img src="@/assets/imgs/lookback.png">
          </div>
          <div class="grid__item grid__item--d">
            <img src="@/assets/imgs/leg.jpg">
          </div>
          <div class="grid__item grid__item--e">
            <img src="@/assets/imgs/smile.jpg">
          </div>
          <div class="grid__item grid__item--f">
            <img src="@/assets/imgs/miao1.jpg">
          </div>
        </div>
      </div>
      <div class="layers">
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage1+')'}" />
        </div>
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage2+')'}" />
        </div>
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage3+')'}" />
        </div>
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage4+')'}" />
        </div>
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage5+')'}" />
        </div>
        <!-- <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage6+')'}" />
        </div> -->
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage7+')'}" />
        </div>
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage8+')'}" />
        </div>
        <!-- <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage9+')'}" />
        </div> -->
        <div class="layers__item">
          <div class="layers__item-img" :style="{backgroundImage: 'url('+bgImage10+')'}" />
        </div>
      </div>
    </div>
    <div>
      <div id="word">
        <Flashword
          v-if="flash"
          ref="words"
          :key="refreshKey"
          :dark="dark"
        />
        <div class="this-is">This is?</div>
      </div>
      <a v-if="false" href="https://hitcount.io" target="__blank" style="position:absolute;">
        <img alt="Hit counter" src="https://hitcount.io/api/_gAVzrOcg">
      </a>
      <div id="corner" />
      <div id="magnetic-btn" @click="diiiscover">
        <MagneticButton :key="refreshKey" ref="btn" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Revealer from '@/assets/js/revealer'
import Marquee from '@/components/Marquee.vue'
import Soul from '@/components/Soul.vue'
import MagneticButton from '@/components/MagneticButton.vue'
import Flashword from '@/components/Flashword.vue'
import { Expo } from 'gsap'
export default {
  name: 'Home',
  components: {
    Flashword,
    MagneticButton,
    Soul,
    Marquee
  },
  data() {
    return {
      dark: false,
      refreshKey: '',
      flash: false,
      cataScroll: {},
      bgImage1: require('@/assets/imgs/sunset.jpg'),
      bgImage2: require('@/assets/imgs/back-low.jpg'),
      bgImage3: require('@/assets/imgs/teeth.png'),
      bgImage4: require('@/assets/imgs/skirt.jpg'),
      bgImage5: require('@/assets/imgs/mountain.jpg'),
      // bgImage6: require('@/assets/imgs/smile.jpg'),
      bgImage7: require('@/assets/imgs/cute.jpg'),
      bgImage8: require('@/assets/imgs/side.jpg'),
      // bgImage9: require('@/assets/imgs/lookback-low.jpg'),
      bgImage10: require('@/assets/imgs/9.jpg')
    }
  },
  created() {
    document.body.classList.add('non-clickable')
  },
  activated() {
    this.$GSAP.set(document.querySelector('#magnetic-btn'), {
      y: 0,
      scale: 0
    })
  },
  mounted() {
    console.log('Home mounted')
    this.$store.state.home = this
    if (this.$store.state.isInitAnimations) {
      // 从其他页进入 home 时也要触发
      this.$GSAP.delayedCall(1, () => {
        console.log('其他页进入 home 时也要触发')
        // 其他页面进入时, Overlay也需要1s时间，加上initRevealer中的1s，所以此种情况共等了2s
        this.initRevealer(() => {
          console.log('refresh')
          // Revealer 动画完成后才执行flashword动画
          this.flash = true
          this.magBtnAnim()
        })
      })
    }
    this.$eventHub.$on('initAnimations', () => {
      // 直接从home页进入的情况
      console.log('Home page:initAnimations')
      this.initRevealer(() => {
        this.flash = true
        this.magBtnAnim()
      })
      this.initAnim()
    })
    this.$eventHub.$on('darkListener', (data) => {
      // 利用修改key的属性值，重新加载子组件，触发create事件
      this.dark = data
    })
  },
  methods: {
    initRevealer(callback) {
      this.$GSAP.delayedCall(1, () => {
        // 给定1s 来显示 `this is`
        const revealer = new Revealer(callback)
        revealer.reveal()
      })
    },
    initAnim() {
      // 每次切换路由会调用
      console.log('home store: initHomeAnim')
      // this.initBeginnings()
      if (this.flash) {
        this.magBtnAnim()
      }
    },
    magBtnAnim() {
      this.$GSAP.fromTo(document.querySelector('#magnetic-btn'), {
        y: 0,
        scale: 0
      }, {
        y: '-50%',
        scale: 1,
        ease: Expo.easeOut,
        force3D: true,
        duration: 1,
        onComplete: () => {
          this.$refs.btn.init()
        }
      })
    },
    initBeginnings() {
      const timeline = this.$GSAP.timeline({ repeat: 0, repeatDelay: 0 })
      timeline.to(document.querySelector('.beginnings.left'), {
        x: '-70%',
        rotate: -10,
        duration: 0.8,
        ease: 'expo.inOut'
      })
      timeline.to(document.querySelector('.beginnings.right'), {
        x: '60%',
        rotate: 5,
        duration: 0.8,
        ease: 'expo.inOut'
      })
    },
    diiiscover() {
      this.$router.push('blog')
    }
  }
}
</script>

<style lang="scss" scoped>
#home, #home-content{
  width:100vw;
  height: 100vh;
  background-color: var(--background-color);
  // background-color: #c6a7a4;
  overflow: hidden;
}

#soul{
  position:absolute;
}

#word {
  width: 100vw;
  margin-top: 50vh;
  z-index:9;
  transform: translateY(-50%);
  font-size: 5vw;
  text-align: center;
  position: absolute;
}

.this-is {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: green;
  font-size: 18vh;
  font-family: 'Bungee Inline';
  text-shadow: var(--green-shadow)
}

#magnetic-btn{
  position: absolute;
  margin-top: 80vh;
  z-index: 999;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) scale(0);
}

#scene{
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 1000px;
  position: absolute;
  transform-style: preserve-3d;
	transform: rotateY(0deg) rotateX(20deg);
	animation: rotate 20s infinite linear;
}

#corner{
  position: absolute;
  bottom: 3vh;
  right: 3vh;
  width: 10vw;
  height: 10vh;
  border: 5px solid var(--text-color);
  border-top: none; border-left: none;
  background-color: transparent;
}

#triangle {
  position: absolute;
  z-index:0;
  width: 88.6vh;
  height: 76.9vh;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  background-size: cover;
}

.beginnings{
  will-change: transform;
  left: 50%;
  top: 50%;
  z-index:1;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 45vh;
  height: 60vh;

  &:nth-child(2) {
    z-index:2;
  }
}

//////////////////////////////////
.grid {
  grid-area: 1 / 1 / 2 / 2;
  width: 80%;
  height: 93%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(13,1fr);
  grid-template-rows: repeat(8,1fr);
  grid-gap: 1vw;
  position: relative;
}

.grid::after {
	content: '';
	height: 6rem;
	width: 1px;
	background: #fff;
	position: absolute;
	bottom: 2rem;
	left: 50%;
}

img {
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover
}

.grid__item {
  opacity: 0;
}

.grid__item--a {
  grid-area: 2 / 1 / 5 / 4;
}

.grid__item--b {
  grid-area: 6 / 2 / 9 / 5;
}

.grid__item--c {
  grid-area: 3 / 4 / 7 / 7;
}

.grid__item--d {
  grid-area: 1 / 8 / 4 / 10;
}

.grid__item--e {
  grid-area: 3 / 10 / 6 / 14;
}

.grid__item--f {
  grid-area: 6 / 9 / 9 / 12;
}

.layers {
  top: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index: 999;
  pointer-events: none;
}

.layers__item {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translate3d(0, 101%, 0);
}

.layers__item-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  transform: translate3d(0, -101%, 0);
}

.content, .layers {
  position:absolute;
  height: 100vh;
  width:100vw;
}
</style>
