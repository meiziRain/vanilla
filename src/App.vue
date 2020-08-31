<template>
  <div id="app">
    <div id="mobile">
      <div id="header">
        <Ham id="hamburger" />
        <div id="logo" />
      </div>

      <div id="mobile-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Ham from '@/components/Ham.vue'
export default {
  components: {
    Ham
  }
}
</script>
<style lang="scss">
#mobile {
  position: fixed;
}

#header{
  display: inline-block;
  height: 80px;
  width: 100vw;
}

#logo{
  display: inline-block;
  height: 80px;
  width: 80px;
  margin-left: auto;
  margin-right: auto;
}
#hamburger {
  width: 80px;
  height: 80px;
  margin-left: -10px;
  margin-top: -10px;
  display: inline-block;
}

#mobile-nav {
}
</style>
