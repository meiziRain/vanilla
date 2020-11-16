<template>
  <div id="home">
    <div id="triangle" :style="{backgroundImage: 'url('+bgImage+')'}" />
    <div>
      <div id="word">
        <Flashword
          :key="refreshKey"
          class="flashWord"
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
import MagneticButton from '@/components/MagneticButton.vue'
import Flashword from '@/components/Flashword.vue'
import { Expo } from 'gsap'
export default {
  name: 'Home',
  components: {
    Flashword,
    MagneticButton
  },
  data() {
    return {
      dark: false,
      refreshKey: '',
      bgImage: require('@/assets/imgs/girl-illu.jpg')
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

#word {
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 5vw;
  text-align: center;
  opacity: 0.9;
}

.flashWord{
  color: white;
  transform: translateY(-20%);
}

#magnetic-btn{
  display: flex;
  align-items:center;
  justify-content:center;
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

#triangle{
  position: absolute;
  z-index:0;
  width: 99.9vh;
  height: 86.6vh;
  left:50%;
  top:50%;
  padding: -1px -1px -1px -1px;
  transform: translate(-50%,-50%);
  background-size: cover;
  // background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);

  &::after{
    position: absolute;
    content: '';
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-left: 50vh dashed var(--background-color);
    border-right: 50.1vh dashed var(--background-color);
    border-bottom: 86.7vh dashed transparent;
  }
}

</style>
