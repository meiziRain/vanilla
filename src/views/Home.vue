<template>
  <div id="home">
    <div id="triangle" :style="{backgroundImage: 'url('+bgImage+')'}" />
    <Soul v-if="false" id="soul" />
    <div>
      <div id="word">
        <Flashword
          :key="refreshKey"
          :mode="dark"
        />
      </div>
      <a v-if="false" href="https://hitcount.io" target="__blank" style="position:absolute;">
        <img alt="Hit counter" src="https://hitcount.io/api/_gAVzrOcg">
      </a>
      <div id="corner" />
      <div id="magnetic-btn">
        <router-link to="/blog">
          <MagneticButton />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Soul from '@/components/Soul.vue'
import MagneticButton from '@/components/MagneticButton.vue'
import Flashword from '@/components/Flashword.vue'
import { Expo } from 'gsap'
export default {
  name: 'Home',
  components: {
    Flashword,
    MagneticButton,
    Soul
  },
  data() {
    return {
      dark: false,
      refreshKey: '',
      homeBgImage: require('@/assets/imgs/egg-shell.png'),
      bgImage: require('@/assets/imgs/girl-illu-triangle.png')
    }
  },
  activated() {
    // this.initAnim()
  },
  mounted() {
    console.log('Home mounted')
    this.$eventHub.$on('initAnimations', () => {
      this.initAnim()
    })
    this.$eventHub.$on('darkListener', (data) => {
      // 利用修改key的属性值，重新加载子组件，触发create事件
      this.refreshKey = new Date().getTime()
      this.dark = data
    })
  },
  methods: {
    initAnim() {
      this.$GSAP.fromTo(document.querySelector('#magnetic-btn'), 1, {
        y: 100,
        scale: 0
      }, {
        y: '-50%',
        scale: 1,
        ease: Expo.easeOut,
        force3D: true
      })
    },
    discover() {
      this.$router.push('blog')
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  width:100vw;
  height: 100vh;
  background-color: var(--background-color);
  overflow: hidden;
}

#soul{
  position:absolute;
}

#word {
  width: 100vw;
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 5vw;
  text-align: center;
  position: absolute;
}

#magnetic-btn{
  position: absolute;
  margin-top: 80vh;
  width: 40vw;
  z-index: 999;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
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
</style>
