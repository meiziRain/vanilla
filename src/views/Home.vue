<template>
  <div id="home">
    <div id="word">
      <Flashword
        :key="refreshKey"
        :mode="dark"
      />
      <MagneticButton />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MagneticButton from '@/components/MagneticButton.vue'
import Flashword from '@/components/Flashword.vue'
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
  mounted() {
    this.$eventHub.$on('darkListener', (data) => {
      // 利用修改key的属性值，重新加载子组件，触发create事件
      this.refreshKey = new Date().getTime()
      this.dark = data
    })
  }
}
</script>

<style lang="scss" scoped>
#home{
  width:100vw;
  height: 100vh;
  background-color:#e5e3df;
}

#word {
  position: absolute;
  font-size: 5vw;
  width: 100vw;
  height: 20rem;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  opacity: 0.9;
  z-index: 999;
}
</style>
