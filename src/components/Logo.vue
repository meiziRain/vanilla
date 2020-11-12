<template>
  <div>
    <div id="logo" @click="goHome" :style="{backgroundImage: 'url('+bgImage+')'}" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      bgImage: require('@/assets/imgs/Logo-2.png')
    }
  },
  created() {
  },
  methods: {
    goHome() {
      const me = this
      me.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
#logo{
  cursor: pointer;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  position: fixed;
  left: 2vw;
  background-repeat:no-repeat;
  background-size: cover;
  top: 2vw;
  z-index: var(--top-index);
}
</style>
