<template>
  <div>
    <span class="logo-wrapper logo-rotate-anim">
      <div id="logo" :style="{backgroundImage: 'url('+bgImage+')'}" @click="goHome" />
    </span>
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
  border-radius: 50%;
  background-repeat:no-repeat;
  background-size: cover;
}
</style>

<style>
#logo {
  position: fixed;
  width: 8vw;
  height: 8vw;
  z-index: var(--the-top);
}

.logo-wrapper{
  display: inline-block;
  width: 8vw;
  height: 8vw;
}

.logo-translate-anim{
  animation:1s cubic-bezier(.87,0,.13,1) 0s 1 normal forwards logoTranslateAnim;
  transform: translate(0%, 0%) !important;
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

@keyframes logoTranslateAnim{
  from{
    left: 50%;
    top: 50%;
  }
  to{
    left: 2vw;
    top: 2vw;
    z-index: var(--top-index);
  }
}
</style>
