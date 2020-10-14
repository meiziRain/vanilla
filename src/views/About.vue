<template>
  <div id="about">
    <div id="about-scroll-viewport">
      <div id="about-scroll-content">
        <div id="avatar-wrapper">
          <div id="avatar" />
          <div
            id="name"
            class="animate__animated animate__fadeInUp animate__delay-1s"
          >Title</div>
          <div
            id="introduce"
            class="animate__animated animate__fadeInUp animate__delay-2s"
          >INTRODUCE, eg: A beautiful tiny girl</div>
        </div>
        <div id="waterfall">
          <div id="plans">
            <div class="spine-wrapper">
              <div class="spine spine--routes" />
              <div class="spinelabel spinelabel--routes">
                <a class="spinelabel__inner">Rutas</a>
              </div>
            </div>
            <div class="plans-big">
              <picture class=" pri">
                <source media="(max-width: 1280px)" data-srcset="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv2-600x780.jpg" srcset="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv2-600x780.jpg">
                <source media="(max-width: 1920px)" data-srcset="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv2-800x1040.jpg" srcset="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv2-800x1040.jpg">
                <img data-src="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv2.jpg" alt="Kesy Shoes - Adv Campaign Sezine Adv 1" src="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv2.jpg">
              </picture>
              <div class="plans-small">
                <picture class="sub">
                  <source media="(max-width: 1920px)" data-srcset="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv3.jpg" srcset="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv3.jpg">
                  <img data-src="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv3.jpg" alt="Kesy Shoes - Adv Campaign Sezine Adv 2" src="https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv3.jpg">
                </picture>
              </div>
              <article id="plans-article">
                <div class="philosophy__title container-stagger-text-inview viewed">
                  <div class="row top overflow-stagger-text">
                    <h2 class="small-title stagger-text-inview">ADV CAMPAIGN</h2>
                  </div>
                  <div class="row bottom overflow-stagger-text">
                    <h2 class="small-title cindie verde stagger-text-inview">SS 2020</h2>
                  </div>
                </div>
                <div class="philosophy__content container-stagger-item-inview viewed">
                  <p
                    class="stagger-item-inview"
                  >Keys si racconta in una campagna pubblicitaria, che celebra la straordinarietà dell'ordinario, attraverso i momenti quotidiani di due donne dinamiche. Lo shooting è stato ambientato a Miami, metropoli che offre scenari urbani decisamente iconici, fondendo stile metropolitano e glamour d'antan.</p>
                </div>
              </article>
            </div>
          </div>
          <div id="bottom">
            <div id="css-doodle">
              <css-doodle>
                :doodle {
                @grid: 18 / 100vmax;
                background: var(--background-color);
                }
                --hue: calc(180 + 1.5 * @row * @col);
                background: hsl(var(--hue), 50%, 70%);
                margin: -.5px;
                transition: @r(.5s) ease;
                clip-path: polygon(@pick(
                '0 0, 100% 0, 100% 100%',
                '0 0, 100% 0, 0 100%',
                '0 0, 100% 100%, 0 100%',
                '100% 0, 100% 100%, 0 100%'
                ));
              </css-doodle>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
Scrollbar.use(OverscrollPlugin)

export default {
  data() {
    return {
      currentSlideID: 0,
      isAutoPlay: false
    }
  },
  mounted() {
    this.initScroll()
  },
  methods: {
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

    },
    // next
    gotoNextSlide() {
      var slideToGo = this.currentSlideID + 1
      if (slideToGo >= document.querySelectorAll('.slider__item').length) {
        slideToGo = 0
      }
      this.gotoSlide(slideToGo, 0.7, 'next')
    },
    gotoSlide(slideID, _time, _direction) {
      const prevSlideID = this.currentSlideID
      this.currentSlideID = slideID
      gsap.to(document.querySelectorAll('.slider__item')[prevSlideID].children, 1, { left: '100%' })
      gsap.fromTo(document.querySelectorAll('.slider__item')[this.currentSlideID].children, 1,
        { left: '-100%' },
        {
          left: '0',
          onComplete: () => {
            gsap.delayedCall(1, () => { this.gotoNextSlide() })
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
  display: block;
}

#about{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--background-color);
}

#about-scroll-viewport{
  width:100%;
  height: 100%;
  background-color: white;
  overflow:scroll;
}

#avatar-wrapper{
  height: 100vh;
  width: 100vw;
}

#avatar{
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-image: url(https://www.keysshoes.com/ecommerce/wp-content/uploads/2020/07/adv1.jpg);
  background-repeat:no-repeat;
  background-size: cover;
  transform: translateY(40%);
  margin: 0 auto;
}

#name{
  position: absolute;
  font-family: 'Cabin Sketch', cursive;
  left: 50%;
  font-size: 5vw;
  translate: -100%;
  // margin-left: -200px;
}

#introduce{
  position: absolute;
  left: 50%;
  translate: -100%;
  margin-top: 12vh;
  font-size: 2.5vw;
}

#bottom{
  width:100vw;
  height:30vh;
  margin-top: 200px;
  overflow: hidden;
}

#plans{
  height: 100vh;
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
