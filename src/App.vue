<template>
  <div id="app">
    <div id="header-wrapper">
      <div id="mobile">
        <div id="mobile-header">
          <Ham id="hamburger" />
          <div id="logo" />
          <div id="left" />
        </div>

        <div id="mobile-nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
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
#header-wrapper{
    height: 60px;
}

#mobile {
  position: fixed;
}

#mobile-header{
  display: flex;
  justify-content:space-between;
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid gray;
}

#logo{
  height: 60px;
  width: 80px;
  background-color: red;
}

#left{
  height: 60px;
  width: 80px;
}

#mobile-nav {
}
</style>
