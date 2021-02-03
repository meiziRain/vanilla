<template>
  <div id="flashword">
    <div class="text">
      <h2 class="flashword__content__title">V A N I L L A</h2>
      <div class="flashword__content__subtitle">Click following button, Dive into me</div>
    </div>
    <div class="overlay" />
  </div>
</template>

<script>
import { TweenMax, Expo, Quad } from 'gsap'
const charming = require('charming')
export default {
  name: 'Flashword',
  props: {
    dark: {
      type: Boolean,
      default: false,
      description: 'light or dark mode'
    }
  },
  data() {
    return {
      animated: false
    }
  },
  created() {
    // 点击切换 light/dark 模式
  },
  mounted() {
    this.$GSAP.killTweensOf(document.querySelector('.flashword__content__title'))
    this.$GSAP.killTweensOf(document.querySelector('.flashword__content__subtitle'))
    this.$GSAP.killTweensOf(Array.from(document.querySelectorAll('span')))
    window.localStorage.getItem('dark') === 'true' ? this.animateTitles(true) : this.animateTitles(false) // true -> 白色 #fff
    this.$eventHub.$on('darkListener', (data) => {
      !data ? this.animateTitles(true) : this.animateTitles(false) // true -> 白色 #fff
    })
  },
  methods: {
    getRandomColor() {
      return (
        '#' + ('00000' + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6)
      )
    },
    staggerTo() {
      TweenMax.to(document.querySelector('.overlay'), 2, {
        ease: Quad.easeOut,
        opacity: 0
      })

      TweenMax.set(Array.from(document.querySelector('.flashword__content__title').querySelectorAll('span')), {
        opacity: 0
      })
      TweenMax.staggerTo(
        Array.from(document.querySelector('.flashword__content__title').querySelectorAll('span')),
        1.5, {
          ease: Expo.easeOut,
          startAt: {
            rotationX: -100,
            z: -1000
          },
          opacity: 1,
          rotationX: 0,
          z: 0
        },
        0.1
      )
    },
    animateTitles(dark) {
      const getRandomNumber = (min, max) => Math.random() * (max - min) + min
      const title = document.querySelector('.flashword__content__title')
      const subtitle = document.querySelector('.flashword__content__subtitle')
      this.$GSAP.killTweensOf(title)
      this.$GSAP.killTweensOf(subtitle)
      this.$GSAP.killTweensOf(titleLetters)
      charming(title)
      const titleLetters = Array.from(title.querySelectorAll('span'))
      this.staggerTo()
      TweenMax.set(subtitle, {
        opacity: 0
      })
      TweenMax.to(subtitle, 1.5, {
        ease: Expo.easeOut,
        startAt: {
          y: 30
        },
        opacity: 1,
        y: 0
      })

      const glitch = (el, cycles) => {
        if (cycles === 0 || cycles > 3) return
        TweenMax.set(el, {
          x: getRandomNumber(-20, 20),
          y: getRandomNumber(-20, 20),
          color: [this.getRandomColor(), this.getRandomColor(), this.getRandomColor()][
            cycles - 1
          ]
        })
        setTimeout(() => {
          TweenMax.set(el, {
            x: 0,
            y: 0
          })
          glitch(el, cycles - 1)
        }, getRandomNumber(20, 100))
      }

      const loop = startAt => {
        setTimeout(() => {
          const titleLettersShuffled = titleLetters.sort(
            (a, b) => 0.5 - Math.random()
          )
          const lettersSet = titleLettersShuffled.slice(
            0,
            getRandomNumber(1, titleLetters.length + 1)
          )
          for (let i = 0, len = lettersSet.length; i < len - 1; ++i) {
            glitch(lettersSet[i], 3)
          }
          loop()
        }, startAt || getRandomNumber(500, 3000))
      }
      loop(1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.text{
  color:var(--text-color);
}
</style>

<style>
.flashword__content__title {
  font-size: 10vw;
  margin: 0 auto;
}

.flashword__content__title span {
  display: inline-block;
  white-space: pre;
  transform-origin: 50% -50%;
}

.flashword__content__title {
  font-family: 'Bungee Inline';
  color: var(--text-color);
  /* color: red;
  font-family: "Monoton", cursive; */
}

.flashword__content__subtitle {
  font-family: 'Cabin Sketch', cursive;
  color: wheat;
  margin-top: 3vw;
  font-size: 2vw;
}

@media screen and (max-width: 600px) {
  .flashword__content__title {
    font-size: 4em;
  }

  .flashword__content__subtitle {
    font-size: 0.8em;
  }
}
</style>
