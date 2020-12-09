<template>
  <div>
    <div id="soul">
      <div class="soul-item soul-s">
        <title>S</title>
      </div>
      <div class="soul-item soul-o" :style="{backgroundImage: 'url('+bgImage+')'}">
        <title>O</title>
      </div>
      <div class="soul-item soul-u">
        <title>U</title>
      </div>
      <div class="soul-item soul-l">
        <title>L</title>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Soul',
  data() {
    return {
      bgImage: require('@/assets/imgs/girl-illu.jpg')
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#soul{
    width: 100vw;
    height: 100vh;
    background-color: #c6a7a4;
    // filter: blur(1px);
}

.soul-item{
    display:inline-block;
    width:25vw;
    height: 100vh;
    border-right:1px solid gray;
    background-size: cover;

    &:first-child {
        border-right: 0px;
    }
}
</style>
