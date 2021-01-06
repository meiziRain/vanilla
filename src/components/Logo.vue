<template>
  <div>
    <span class="logo-wrapper">
      <div id="logo" :style="{backgroundImage: 'url('+bgImage+')'}" @click="goHome" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      bgImage: require('@/assets/imgs/red-head-high.jpg')
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
  color:white;
  cursor: pointer;
  border-radius: 50%;
  background-repeat:no-repeat;
  background-size: cover;
}
</style>

<style>
#logo {
  position: fixed;
  width: 6vw;
  height: 6vw;
}

.logo-wrapper{
  display: inline-block;
  width: 6vw;
  height: 6vw;
}

.logo-rotate-anim{
  animation: 10s linear infinite logoRotateAnim;
}

@keyframes logoRotateAnim{
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
