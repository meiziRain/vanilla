<template>
  <div id="magnetic">
    <div class="magnetic-button">
      <span class="magnetic-button__text">
        <span class="magnetic-button__text-inner">Discover</span>
      </span>
    </div>
  </div>
</template>

<script>
import ButtonCtrl from '@/assets/js/buttonCtrl'
export default {
  name: 'MagneticButton',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // initialize custom cursor
      new ButtonCtrl(document.querySelector('.magnetic-button'))
    }
  }
}
</script>

<style lang="scss" scoped>
#magnetic {
  --button-text-focus: red;
  --cursor-stroke: red;
  --cursor-fill: red;
  --cursor-stroke-width: 0px;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
}

.magnetic-button {
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-width: 0px;
  border-style: solid;
  color: var(--el-text-color);
  width: 10vw;
  height: 4vw;
  padding: 0;
  font-family: "Poiret One", cursive;
  font-weight: bold;
  font-size: 1.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnetic-button:focus,
.button--hover {
  outline: none;
  color: var(--el-text-color);
}

.magnetic-button::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background: rgba(0, 0, 0, 0.3);
  filter: blur(13px);
}

.magnetic-button__text,
.magnetic-button__text-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.magnetic-button__text {
  width: 10vw;
  height: 4vw;
  flex: none;
  background: var(--text-color);
  border-radius: 0.4vw;
}

@media (max-width: 800px){
  .magnetic-button{
    width: 12vw;
    height: 5vw;
    font-size: 1vw;
  }

    .magnetic-button__text {
      width: 12vw;
      height: 5vw;
      border-radius: 6px;
  }
}

@media (max-width: 600px){
  .magnetic-button{
    width: 10rem;
    height: 4rem;
    font-size: 1rem;
  }

  .magnetic-button__text {
    width: 10rem;
    height: 4rem;
    border-radius: 4px;
  }
}
</style>
