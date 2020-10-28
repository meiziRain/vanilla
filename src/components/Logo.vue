<template>
  <div id="logo" @click="goHome" />
</template>

<script>
export default {
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
  left: 1vw;
  background-image: url(https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv1.jpg);
  background-repeat:no-repeat;
  background-size: cover;
  top: 1vw;
  z-index: var(--top-index);
}
</style>
