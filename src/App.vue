<template>
  <div id="app">
    <div id="mobile-header-wrapper">
      <div id="mobile" ref="mobile">
        <div id="mobile-header">
          <Ham id="hamburger" ref="ham" @click.native="onHamClick()" />
          <div id="logo" />
          <LightSwitch id="light-switch" />
        </div>

        <div id="mobile-nav" ref="mobile_nav" @click="jump">
          <router-link to="/">
            Home
          </router-link>
          <router-link to="/about">
            About
          </router-link>
        </div>
      </div>
    </div>
    <div id="pc">
      <Iris id="pc-nav" ref="nav" />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Ham from '@/components/Ham.vue'
import Iris from '@/components/Iris.vue'
import LightSwitch from '@/components/LightSwitch.vue'
export default {
  components: {
    Ham,
    Iris,
    LightSwitch
  },
  created() {
    if (this._isMobile()) {
      console.log('Mobile')
      this.$store.state.isMobile = true
    } else {
      console.log('PC')
      this.$store.state.isMobile = false
    }
  },
  mounted() {
    this.$refs.nav.keepNavRender()
  },
  methods: {
    jump() {
      const nav = this.$refs.mobile_nav
      nav.style.animation = 'headerShrink 500ms forwards'
      nav.classList.toggle('active')
      this.$refs.ham.toggle()
    },
    onHamClick() {
      const nav = this.$refs.mobile_nav
      if (nav.classList.contains('active')) {
        nav.style.animation = 'headerShrink 500ms forwards'
      } else {
        nav.style.animation = 'headerExpand 500ms forwards'
      }
      nav.classList.toggle('active')
    },
    _isMobile() {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/_reset.scss";
@import "@/assets/css/_base.scss";

#app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#mobile-header-wrapper {
  height: 60px;
}

#mobile {
  position: fixed;
  z-index: 99; // 暂定并不是最上层，在 detail-view 下面
}

#mobile-header {
  display: flex;
  background-color: white;
  justify-content: space-between;
  height: 60px;
  width: 100vw;
}

#pc-nav {
  position: fixed;
  z-index: 999;
  right: 5%;
  top: 2%;
}

#logo {
  height: 60px;
  width: 120px;
  background-color: red;
}

#light-switch {
  height: 60px;
  width: 80px;
}

#mobile-nav {
  position: relative;
  height: 1px;
  z-index: 999;
  overflow: hidden;
  background-color: white;
  box-shadow: inset 0px -1px 0px #e7e7e7;
}

#mobile-nav>a {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  z-index: 999;
  padding: 12px 24px;
  display: block;
  color: #6e6d7a;
  -webkit-transition: color 100ms;
  transition: color 100ms;
  cursor: pointer;
  text-decoration: none;
}

@media (min-width: 920px) {

    #mobile,
    #mobile-header-wrapper {
        display: none;
    }
}

@media (max-width: 920px) {
    #pc-nav {
        display: none;
    }
}

@keyframes headerExpand {
    from {
        height: 1px;
    }

    to {
        height: 90px;
    }
}

@keyframes headerShrink {
    from {
        height: 90px;
    }

    to {
        height: 1px;
    }
}
</style>
