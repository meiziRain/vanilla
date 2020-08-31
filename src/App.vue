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
  display: flex;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid gray;
}

#hamburger {

}

#logo{
  height: 60px;
  width: 80px;
  background-color: red;
}

#mobile-nav {
}
</style>
