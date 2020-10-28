<template>
  <div id="detail-view">
    <Closer class="closer" @clickHandler="closePage" />
    <div id="detail-view-container">
    </div>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import HorizontalScrollPlugin from '@/assets/js/HorizontalScrollPlugin'
Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)
import Closer from '@/components/Closer.vue'
import { Power2 } from 'gsap'
export default {
  name: 'DetailView',
  components: {
    Closer
  },
  mounted() {},
  methods: {
    // Scrollbar 的要点在于有一个固定大小的视口 viewport ，里面还有一个大于视口宽度或者高度的滚动元素。
    // Scrollbar.init(viewport)初始化滚动，而且设置 viewport.style.overflow = 'scroll'
    initScroller() {
      this.detailScroll = Scrollbar.init(document.querySelector('#detail-view'), {
        delegateTo: document,
        continuousScrolling: false,
        overscrollEffect: 'bounce',
        damping: 0.05
      })

      this.Scroll.track.xAxis.element.remove()
      this.Scroll.track.yAxis.element.remove()
      Scrollbar.detachStyle()
      // this.Scroll.addListener((s) => { this.onScroll(s) })
    },
    open() {
      // FIXME: 为什么第一个参数使用this.$refs.el取元素，this.GSAP无法渲染效果
      this.GSAP.fromTo(document.querySelector('#detail-view'), 0.5, {
        scale: 0,
        alpha: 0
      }, {
        scale: 1,
        alpha: 1,
        ease: Power2.easeInOut,
        force3D: true
      })
      this.GSAP.fromTo(document.querySelector('.closer'), 1, {
        rotate: -45,
        scale: 0,
        alpha: 0
      }, {
        rotate: 0,
        scale: 1,
        alpha: 1,
        ease: Power2.easeInOut,
        force3D: true
      })
    },
    closePage() {
      this.$emit('close', '')
      Scrollbar.destroy(document.querySelector('#detail-view'))
      this.GSAP.to(document.querySelector('.closer'), 0.5, {
        rotate: -45,
        scale: 0,
        alpha: 0,
        ease: Power2.easeInOut,
        force3D: true
      })
    }
  }
}
</script>
<style lang="scss" scoped>

#detail-view{
  width:100%;
  height: 100%;
  background-color: bisque;
  overflow:scroll;
}
.closer{
  position: absolute;
}

#detail-view-container{
  width: 100%;
  height: 200vh;
}

.cover-img{
  // position: relative;
  z-index:0;
  border-radius: var(--main-border-radius);
  width: 250px;
  height: 350px;
  object-fit: cover;
  object-position: center;
  transition: opacity .3s;
}
</style>
