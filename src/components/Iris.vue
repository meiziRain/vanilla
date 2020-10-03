<template>
  <div>
    <nav
      id="menu"
      class="menu menu--iris"
    >
      <ul class="menu__list">
        <li :class="0==currentindex ? 'menu__item menu__item--current':'menu__item'">
          <a
            class="menu__link"
            @click="toHome"
          >Home</a>
        </li>
        <li :class="1==currentindex ? 'menu__item menu__item--current':'menu__item'">
          <a
            class="menu__link"
            @click="toBlog"
          >Blog</a>
        </li>
        <li :class="2==currentindex ? 'menu__item menu__item--current':'menu__item'">
          <a
            class="menu__link"
            @click="toAbout"
          >Me！</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Iris',
  components: {},
  data() {
    return {
      currentindex: 0,
      ways: ['home', 'blog', 'about']
    }
  },
  watch: {
    $route(to, from) {
      this.keepNavRender()
    }
  },
  created() {
    this.keepNavRender = this.keepNavRender.bind(this)
  },
  mounted() {
  },
  methods: {
    keepNavRender() {
      const me = this
      const path = me.$route.path
      for (const i in this.ways) {
        if (path.indexOf(this.ways[i]) > -1) {
          this.currentindex = i
        }
      }
    },

    toHome() {
      const me = this
      me.currentindex = 0
      me.$router.push('/')
    },
    toBlog() {
      const me = this
      me.currentindex = 1
      // sessionStorage.setItem("currentindex", 0); 是按字符型存储的，如果在HTML中使用 === 运算符与整形运算，那么就是false。
      me.$router.push('blog')
    },
    toStudio() {
      const me = this
      me.currentindex = 2
      me.$router.push('studio')
    },
    toAbout() {
      const me = this
      me.currentindex = 3
      me.$router.push('about')
    }
  }
}
</script>
<style lang="scss">
$mainColor:#000000;
/*----------------------------------------------- */
/* Common styles for all menus */
#menu {
  font-family: "Poiret One", cursive;
  font-size: 1.1em;
}

.menu__list {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu__item {
  display: block;
  margin: 0;
}

.menu__link {
  font-size: 1.05em;
  font-weight: bold;
  display: block;
  padding: 1em;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.menu__link:hover,
.menu__link:focus {
  outline: none;
}

/* Individual styles */
/* Iris */
.menu--iris .menu__item {
  margin: 0 1em;
}

.menu--iris .menu__link {
  position: relative;
  text-align: center;
  color: #b5b5b5;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}

.menu--iris .menu__link:hover,
.menu--iris .menu__link:focus {
  color: $mainColor;
}

.menu--iris .menu__item--current .menu__link {
  color: $mainColor;
}

.menu--iris .menu__link::before,
.menu--iris .menu__link::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  opacity: 0;
  border: 2px solid $mainColor;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.17, 0.67, 0.05, 1.29);
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.05, 1.29);
}

.menu--iris .menu__link::before {
  top: 0;
  left: 0;
  border-width: 2px 0 0 2px;
  -webkit-transform: translate3d(10px, 10px, 0);
  transform: translate3d(10px, 10px, 0);
}

.menu--iris .menu__link::after {
  right: 0;
  bottom: 0;
  border-width: 0 2px 2px 0;
  -webkit-transform: translate3d(-10px, -10px, 0);
  transform: translate3d(-10px, -10px, 0);
}

.menu--iris .menu__item--current .menu__link::before,
.menu--iris .menu__item--current .menu__link::after {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
/* Media queries */

/* Stack items for smaller screens */
@media screen and (max-width: 55em) {
  .menu__list {
    display: block;
    margin: 0 auto;
  }
}
</style>
