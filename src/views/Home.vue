<template>
  <div id="home">
    <div id="word">
      <Flashword
        :key="refreshKey"
        class="flashWord"
        :mode="dark"
      />
    </div>
    <div id="magnetic-btn">
      <router-link to="/blog">
        <MagneticButton />
      </router-link>
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
      refreshKey: ''
    }
  },
  activated() {
    console.log('Home activated')
    this.initAnim()
  },
  mounted() {
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
        y: 0,
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
  background: var(--background-color);
  overflow: hidden;
}

#word {
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 5vw;
  text-align: center;
  opacity: 0.9;
  z-index: 999;
}

.flashWord{
  transform: translateY(-20%);
}

#magnetic-btn{
  display: flex;
  align-items:center;
  justify-content:center;
  transform: translateY(-50%);
}
</style>
