<template>
  <div class="gates">
    <div class="gate gate--left" />
    <div class="gate gate--right" />
  </div>
</template>

<script>
import { Expo } from 'gsap'
export default {
  name: 'Gates',
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    openGates() {
      this.$GSAP.to(document.querySelector('.gate--left'), {
        x: '-100%',
        ease: Expo.easeIn,
        duration: 1
      })
      this.$GSAP.to(document.querySelector('.gate--right'), {
        x: '100%',
        ease: Expo.easeIn,
        duration: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.gates .gate {
    z-index: var(--top-index);
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    background-color: #000;
}

.gates .gate--left {
    left: 0;
}

.gates .gate--right {
    right: 0;
}
</style>
