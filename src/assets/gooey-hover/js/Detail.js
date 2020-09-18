import { TweenMax as TM, Power2, Power3, Power4, Expo } from 'gsap/all'
import { wrap, unwrap, ev } from './utils/utils'

export default class DetailView {

    constructor() {
        this.$els = {
            el: document.querySelector('.detail-view'),
            closeBtn: document.querySelector('.close-detail'),
            title: document.querySelector('.detail-view__title'),
        }

        this.bindEvent()
    }

    bindEvent() {
        document.addEventListener('view:toggle', ({ detail }) => { this.toggleReveal(detail) })

        this.$els.closeBtn.addEventListener('click', () => { this.onClose() })
    }

    onToggleView(shouldOpen = true) {
        this.$els.el.classList.toggle('is-interactive', shouldOpen)
        this.$els.el.classList.toggle('is-visible', shouldOpen)
    }

    onOpen() {
        const title = this.$els.el.querySelector('.detail-view__title')
        const text = this.$els.el.querySelectorAll('p')
        const { title: pageTitle } = APP.Stage.$els

        TM.to(pageTitle, 0.5, {
            alpha: 0,
            force3D: true,
        })

        TM.fromTo(this.$els.closeBtn, 0.5, {
            rotate: -45,
            scale: 0,
            alpha: 0,
        }, {
            rotate: 0,
            scale: 1,
            alpha: 1,
            ease: Power2.easeInOut,
            force3D: true,
        })

        this.onToggleView()
    }

    onClose() {
        const { title: pageTitle } = APP.Stage.$els

        TM.to(pageTitle, 0.5, {
            alpha: 0.1,
            force3D: true,
        })

        TM.to(this.$els.closeBtn, 0.5, {
            rotate: -45,
            scale: 0,
            alpha: 0,
            ease: Power2.easeInOut,
            force3D: true,
        })

        TM.delayedCall(0.3, () => {
            ev('toggleDetail', {
                open: false,
                force: true,
            })
        })
    }

    toggleReveal({ shouldOpen, target }) {
        if (!shouldOpen) return

        this.$els.title.innerText = target.$els.title
        this.onOpen()
    }

}
