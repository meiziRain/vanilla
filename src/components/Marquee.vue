<template>
  <div id="marquee">
    <div id="marquee">
      <div class="marquee__slide slide-right">
        <div class="marquee__block">
          <span class="marquee__message">Art Direction</span>
          <!-- <img src="/assets/icons/at-field.svg" alt="decagon shape" class="marquee__icon"> -->
          <span class="marquee__message">Branding</span>
          <!-- <img src="/assets/icons/glitter.svg" alt="stars shape" class="marquee__icon"> -->
        </div>

        <div class="marquee__block">
          <span class="marquee__message">Art Direction</span>
          <!-- <img src="/assets/icons/at-field.svg" alt="decagon shape" class="marquee__icon"> -->
          <span class="marquee__message">Branding</span>
          <!-- <img src="/assets/icons/glitter.svg" alt="stars shape" class="marquee__icon"> -->
        </div>

        <div class="marquee__block">
          <span class="marquee__message">Art Direction</span>
          <!-- <img src="/assets/icons/at-field.svg" alt="decagon shape" class="marquee__icon"> -->
          <span class="marquee__message">Branding</span>
          <!-- <img src="/assets/icons/glitter.svg" alt="stars shape" class="marquee__icon"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.marquee__slide {
  font-size: 4vw;
  position: absolute;
  display: flex;
  white-space: nowrap;
}

.marquee__slide.slide-right {
  right: 0;
}

.slide-right .marquee__block {
  -webkit-animation-name: c;
  animation-name: c;
}

.marquee__block {
  display: flex;
  align-items: center;
  will-change: transform;
  -webkit-animation-duration: 12s;
  animation-duration: 12s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@keyframes c {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(100%,0,0);
  }
}
</style>
