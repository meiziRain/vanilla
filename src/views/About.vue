<template>
  <div id="about">
    <div id="about-scroll-viewport">
      <div id="about-scroll-content">
        <div>
          <div id="avatar-wrapper">
            <div class="holder-slider-wrapper">
              <Slider width="60" height="100" :duration="4" />
            </div>
            <div class="image-slider-wrapper">
              <Slider id="image-slider" :duration="4" :animation-time="1.2" width="55" height="55" :image="true" :backgrounds="sliderImages" />
            </div>
            <div id="avatar-text">
              <div
                id="name"
                class="animate__animated animate__fadeInUp animate__delay-1s"
              >Title</div>
              <div
                id="introduce"
                class="animate__animated animate__fadeInUp animate__delay-2s"
              >Rubén de Eguía,
                <br> modernizar a los clásicos
              </div>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="contact-title">
            <h2 class="big-title big-title--no-p"> HAVE A(N)
              <div class="swapper">
                <div class="swaps" />
              </div>
            </h2>
            <p>Feel free to reach out whether you're interested in working together, have coffee, talk about movies or just want to say hi.</p>
          </div>
          <div class="contact-info">
            <div class="contact-info-item">
              <h6>🏠Address</h6>
              <p>Around the world</p>
            </div>
            <div class="contact-info-item">
              <h6>📠Phone</h6>
              <p>+52 1 66 7102 3892</p>
            </div>
            <div class="contact-info-item">
              <h6>📧Email</h6>
              <a href="mailto:hola@miistudio.com.mx">hola@miistudio.com.mx</a>
            </div>
            <div class="qr-code">
              <img src=" " alt="">
            </div>
          </div>
        </div>
        <div id="bottom">
          <!-- <div id="bottom-developer">
            Made with ❤️ by <a>Meizi</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
Scrollbar.use(OverscrollPlugin)

export default {
  components: {
    Slider
  },
  data() {
    return {
      currentSlideID: 0,
      isAutoPlay: false,
      rotateIndex: 0,
      sliderImages: ['https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv1.jpg', 'https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv1.jpg', 'https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv1.jpg']
      // sliderImages: [require('@/assets/imgs/tree.jpg'), require('@/assets/imgs/tree.jpg'), require('@/assets/imgs/tree.jpg')]
    }
  },
  activated() {
    console.log('About activated')
  },
  created() {
  },
  mounted() {
    this.$store.state.about = this
    this.initAnim()
    this.initScroll()
  },
  methods: {
    initAnim() {
      const swaps = document.querySelector('.swaps')
      this.$GSAP.killTweensOf(swaps)
      this.$GSAP.timeline({
        repeat: -1
      })
        .fromTo(swaps, {
          y: 100 + '%'
        }, {
          duration: 0.5,
          y: 0 + '%',
          ease: 'expo.inOut',
          force3D: true,
          onStart: () => {
            const word = this.getRotateWord()
            swaps.innerHTML = word
          }
        }).to(swaps, {
          delay: 2,
          duration: 0.8,
          y: -100 + '%',
          ease: 'expo.inOut',
          force3D: true
        })
    },
    getRotateWord() {
      const words = [`<div class="swap">CAT<span class="u-color-yellow">?</span></div>`,
        `<div class="swap">IDEA<span class="u-color-yellow">?</span></div>`,
        `<div class="swap">DRINK<span class="u-color-yellow">!</span></div>`,
        `<div class="swap">NICE DAY<span class="u-color-yellow">.</span></div>`]
      const word = words[this.rotateIndex % words.length]
      this.rotateIndex++
      return word
    },
    initScroll() {
      this.about_Scroll = Scrollbar.init(document.querySelector('#about-scroll-viewport'), {
        delegateTo: document.querySelector('#about'),
        continuousScrolling: false,
        damping: 0.05
      })
      this.about_Scroll.track.xAxis.element.remove()
      this.about_Scroll.track.yAxis.element.remove()
      Scrollbar.detachStyle()
      this.about_Scroll.updatePluginOptions('overscroll', {
        effect: false
      })
      this.about_Scroll.addListener((s) => { this.onScroll(s) })
    },
    /* Handlers
    --------------------------------------------------------- */
    onScroll({ limit, offset }) {

    },
    /* Actions
    --------------------------------------------------------- */
    updateScrollBar() {

    }
  }
}
</script>

<style lang="scss" scoped>
#about{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // background: var(--background-color);
  background-color: rgb(253, 251, 243);
}

#about-scroll-viewport{
  width:100%;
  height: 100%;
  overflow:scroll;
}

.image-slider-wrapper, .holder-slider-wrapper{
  position: absolute;
}

.image-slider-wrapper{
  transform: translate(20vw, 50%);
}

#avatar-wrapper{
  height: 100vh;
  width: 100vw;
  overflow:hidden;
}

#avatar-text{
  color: white;
  left: 50%;
  position: absolute;
  margin-top: 20vh;
  mix-blend-mode: difference;
}

#name{
  font-family: 'Cabin Sketch', cursive;
  font-size: 5vw;
}

#introduce{
  margin-top: 12vh;
  font-size: 2.5vw;
}

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  transform: translate(20vw, 20vh);

  & .contact-info {
    line-height: 2vw;
    transform: translateX(-10vw);
    justify-self: center;
    align-self: flex-start;
    margin-top: 0;

    & .contact-info-item {
      padding-top: 2vh;
    }
  }

  & .contact-title {
    font-size: 8vw;

    & p{
      line-height: 2vw;
      transform: translateY(10vh);
      font-size: 1.5vw;
      max-width:50vw;
    }

    & .swapper {
      line-height: 1.2;
      height: 8vw;
      overflow-y: hidden;

      & .swap {
        height: 8vw;
      }
    }
  }
}

#bottom{
  position:relative; // 保证下面的bottom-developer absolute不会参照更上层容器
  width:100vw;
  height:30vh;
}

#plans{
  width: 100vw;
}

#plans-article{
  position: absolute;
  left: 63vw;
  top: 50%;
  transform: translateY(-50%);
}

.plans-big{
  position: relative;
  width: 38vw;
  height: calc(38vw * 1.3);
  order: 2;
}

.plans-small{
  position: absolute;
  width: 15vw;
  left: 100%;
  top: 0;
  transform: translate(-5vw,5vw);
}

.stagger-item-inview{
  font-family: "Poiret One", cursive;
  font-size: 2vw;
  color: #4a473c;
  font-weight: 800;
  line-height: 1.2;
}

.else{
  width: 100vw;
  height: 20vh;
  font-size: 2vw;
  align-items: center;
  vertical-align: baseline;
}

.spine-wrapper{
  position: absolute;
  z-index: 10;
  height: 100vh;
  width: 100vw;
}

.spine {
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #a5d3ee;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.spinelabel{
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg) translateX(-50%) translateY(-50%);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  &__inner{
    font-size: 2.42em;
    display: inline-block;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 1.5vw;
    background-color: #fdfbf3;
    letter-spacing: .5em;
  }
}
</style>
