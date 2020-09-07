<template>
  <div id="home">
    <div id="word">
      <Flashword />
    </div></div>
</template>

<script>
// @ is an alias to /src
import Flashword from '@/components/Flashword.vue'
export default {
  name: 'Home',
  components: {
    Flashword
  }
}
</script>

<style lang="scss" scoped>
#home{
  width:100vw;
  height: 100vh;
  background-color:beige;
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
