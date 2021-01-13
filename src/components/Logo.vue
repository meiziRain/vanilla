<template>
  <div>
    <span class="logo-wrapper">
      <div id="logo"  @click="goHome">
        <img src="@/assets/imgs/red-head-high.jpg">
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
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
  overflow: hidden;
  border-radius: 50%;

  &>img{
    transform: translate3D(1.3vw, 2.4vw, 0) scale3d(8, 8, 8);
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: optimizeQuality;
  }
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
