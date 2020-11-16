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
  background-repeat:no-repeat;
  background-size: cover;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--the-top);
}
</style>

<style>
.logo-anim{
  animation:1s ease 0s 1 normal forwards logoAnim;
  transform: translate(0%, 0%) !important;
}

@keyframes logoAnim{
  from{
    left: 50%;
    top: 50%;
  }
  to{
    left: 2vw;
    top: 2vw;
  }
}
</style>
