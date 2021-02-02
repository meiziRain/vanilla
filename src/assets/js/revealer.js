import { gsap } from 'gsap'
import { randomFloat } from './utils'

class ImageLayer {
  constructor(el) {
    this.DOM = { el: el }
    this.DOM.image = this.DOM.el.querySelector('.layers__item-img')
  }
}

export default class Revealer {
  constructor(callback) {
    console.log('callback', typeof callback)
    this.DOM = {}
    this.layers = [];
    [...document.querySelectorAll('.layers__item')].forEach(item => this.layers.push(new ImageLayer(item)))
    this.layersTotal = this.layers.length
    this.gridItems = [...document.querySelectorAll('.grid__item')]
    this.options = {
      duration: 1,
      panelDelay: 0.15
    }
    this.createTimeline(callback)
  }
  createTimeline(callback) {
    this.tl = gsap.timeline({ paused: true })

    // animate the Image layers
    for (let i = 0, len = this.layersTotal; i <= len - 1; ++i) {
      this.tl.to([this.layers[i].DOM.el, this.layers[i].DOM.image], {
        duration: this.options.duration,
        ease: 'Power2.easeInOut',
        y: 0
      }, this.options.panelDelay * i)
    }

    this.tl.addLabel('halfway', this.options.panelDelay * (this.layersTotal - 1) + this.options.duration)
      .call(() => {
        // hide all Image layers except the last one (at this point the last Image layer is visible fullscreen)
        this.layers.filter((_, pos) => pos !== this.layers.length - 1).forEach((panel, pos) => {
          gsap.set(panel.DOM.el, { opacity: 0 })
        })
      }, this, 'halfway')
    // now hide the last Image Layer
      .to([this.layers[this.layersTotal - 1].DOM.el, this.layers[this.layersTotal - 1].DOM.image], {
        duration: this.options.duration,
        ease: 'Expo.easeInOut',
        y: (index) => index ? '101%' : '-101%',
        onComplete: () => {
          callback()
        }
      }, 'halfway')
    // show grid items
      .fromTo(this.gridItems, { y: () => randomFloat(100, 500) }, {
        duration: this.options.duration * 2,
        ease: 'Expo.easeOut',
        y: 0,
        opacity: 1
      }, 'halfway')
  }
  reveal() {
    this.tl.restart()
  }
}
