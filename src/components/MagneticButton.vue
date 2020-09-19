<template>
  <div id="magnetic">
    <button class="magnetic-button">
      <span class="magnetic-button__text">
        <span class="magnetic-button__text-inner">Discover</span>
      </span>
    </button>
  </div>
</template>

<script>
import Cursor from "@/assets/js/cursor";
import ButtonCtrl from "@/assets/js/buttonCtrl";
export default {
  name: "MagneticButton",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // initialize custom cursor
      const button = new ButtonCtrl(document.querySelector(".magnetic-button"));
    },
  },
};
</script>

<style lang="scss" scoped>
#magnetic {
  --button-border-radius: 7px;
  --button-bg: transparent;
  --button-stroke: #d8d4cf;
  --button-stroke-width: 0px;
  --button-text: #000;
  --button-bg-hover: #000;
  --button-stroke-hover: #000;
  --button-stroke-width-hover: 0px;
  --button-text-hover: #000;
  --button-text-focus: red;
  --cursor-stroke: red;
  --cursor-fill: red;
  --cursor-stroke-width: 0px;
  --button-bg-text: #e0d9d2;
  --color-bg: #d6ccc1;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.magnetic-button {
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-width: var(--button-stroke-width);
  border-color: var(--button-stroke);
  border-style: solid;
  color: var(--button-text);
  background: var(--button-bg);
  border-radius: var(--button-border-radius);
  min-width: 12rem;
  height: 5rem;
  padding: 0;
  margin: 1rem;
  font-family: "Poiret One", cursive;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.magnetic-button:focus,
.button--hover {
  outline: none;
  border-width: var(--button-stroke-width-hover);
  border-color: var(--button-stroke-hover);
  color: var(--button-text-hover);
}

.magnetic-button:focus {
  color: var(--button-text-focus);
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
  border-radius: var(--button-border-radius);
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
  flex: none;
  background: var(--button-bg-text);
  width: 100%;
  height: 5rem;
  border-radius: var(--button-border-radius);
}
</style>
