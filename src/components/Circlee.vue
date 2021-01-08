<template>
  <div>
    <div id="circles" ref="circle" class="circles">
      <div class="circle" />
      <div class="circle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Circlee',
  props: {
    size: {
      type: String,
      default: '55vmin',
      description: '尺寸'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$refs.circle.style.width = this.size
      this.$refs.circle.style.height = this.size
    }
  }
}
</script>

<style lang="scss" scoped>
$spin-time: 5.5s;
$circle-size: 55vmin;
$circle-stroke: 1px;
$displacement: 1%;

.circles {
    height: $circle-size;
    width: $circle-size;
}

.circle {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: $circle-stroke solid transparent;
    border-radius: 115% 140% 145% 110%/125% 140% 110% 125%;
    mix-blend-mode: screen;
    &:nth-child(1) {
        border-color:var(--text-color);
        transform-origin: 50%-$displacement 50%;
        animation: spin1 $spin-time linear infinite;
    }
    &:nth-child(2) {
        border-color: rgb(247, 138, 117);
        transform-origin: 50% 50%+$displacement;
        animation: spin2 $spin-time linear infinite;
    }
    &:nth-child(3) {
        border-color: #4285F4;
        transform-origin: 50%+$displacement 50%;
        animation: spin3 $spin-time linear infinite;
    }
    &:nth-child(4) {
        border-color: #0F9D58;
        transform-origin: 50% 50%-$displacement;
        animation: spin4 $spin-time linear infinite;
    }
}

@keyframes spin1 {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin2 {
    0% {
        transform: rotate(72deg);
    }
    100% {
        transform: rotate(-288deg);
    }
}

@keyframes spin3 {
    0% {
        transform: rotate(-144deg);
    }
    100% {
        transform: rotate(216deg);
    }
}

@keyframes spin4 {
    0% {
        transform: rotate(216deg);
    }
    100% {
        transform: rotate(-144deg);
    }
}

body,
html {
    background-color: black;
}
</style>
