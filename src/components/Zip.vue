<template>
  <div id="zip">

  </div>
</template>

<script>
import { Expo } from 'gsap'
export default {
  name: 'Logo',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    zip() {
      this.$GSAP.to(document.querySelector('#zip'), {
        height: '100%',
        ease: Expo.easeIn,
        duration: 1,
        onComplete: () => {
          this.$GSAP.to(document.querySelector('#zip'), {
            scale: 0,
            ease: Expo.easeIn,
            duration: 0.3
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#zip {
    position: absolute;
    left: 50%;
    height: 0%;
    transform: translateX(-50%);
    width: 2px;
    background-color: #fff;
    transform-origin: bottom;
    z-index: var(--the-top)
}
</style>
