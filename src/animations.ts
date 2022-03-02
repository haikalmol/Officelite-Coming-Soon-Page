import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const progressCardTimeline = gsap.timeline({ ease: "power2.easeIn" })
const lettersCardTimeline = gsap.timeline({ ease: "power2.easeIn" })
const statsCardTimeline = gsap.timeline({ ease: "power2.easeIn" })

const heroTextTimeline = gsap.timeline({ ease: "power2.easeIn" })
const pricingCardsTimeline = gsap.timeline({ ease: "power2.easeIn" }) 
const footerTimeline = gsap.timeline({ ease: "power2.easeIn" })

const signUpFormTimeline = gsap.timeline({ ease: "power2.easeIn" })
const countdownTimeline = gsap.timeline({ ease: "power2.easeIn" })
const formDeliveredTimeline = gsap.timeline({ ease: "power2.easeIn" })


export const heroTextAnim = () => {
  heroTextTimeline.from(".hero-text > *", {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 1.2
  })
}

export const signUpFormAnim = () => {
  signUpFormTimeline.fromTo(".form", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 1
  })
  .fromTo(".form > *", {
    opacity: 0,
    y: 25
  }, {
    opacity: 1,
    y: 0,
    stagger: .4,
    duration: .8
  }, "-= 2.5")
}

export const formDeliveredAnim = () => {
  formDeliveredTimeline.to(".form__sent", {
    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1
  })
  .from(".form__sent > *", {
    opacity: 0,
    y: 50,
    stagger: 0.4,
    duration: 1
  })
}

export const countdownAnim = () => {
  countdownTimeline.fromTo(".countdown__deadline", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 1
  })
  .fromTo(".countdown__time > div", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.4,
    duration: 1
  }, "-= 2")
  .fromTo(".countdown__time > div > span", {
    opacity: 0,
    y: 100
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: .8
  }, "+= 1.5")
}

export const footerAnim = () => {
  footerTimeline.fromTo(".footer-section > *", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.4,
    duration: 1
  })

  ScrollTrigger.create({
    animation: footerTimeline,
    trigger: ".footer-section",
    start: "-500px top",
    end: "center bottom",
    toggleActions: "play none reverse none"
  })
}

export const pricingCardsAnim = () => {
  pricingCardsTimeline.fromTo(".pricing-section > article", {
    opacity: 0,
    y: 100,
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.4,
    duration: .8
  })
  .fromTo(".pricing-card > *", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1
  }, "-= 2.5")

  ScrollTrigger.create({
    animation: pricingCardsTimeline,
    trigger: ".pricing-section",
    start: "-500px top",
    end: "center bottom",
    toggleActions: "play none reverse none"
  })
}

export const progressCardAnim = () => {
  progressCardTimeline.from(".progress-bg", {
    y: 50,
    scaleY: 0,
    opacity: 0,
    duration: 1.2
  })
  .from(".circle", {
    scale: 0,
    opacity: 0,
    duration: 1
  })
  .from(".line", {
    scaleX: 0,
    opacity: 0,
    duration: 1
  })
  .to(".text", {
    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1
  })
  .from(".progress-percent", {
    y: 20,
    opacity: 0,
    duration: 1.5
  }, "-= .5")
  .from(".progress-circle", {
    y: 20,
    opacity: 0,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    duration: 3
  }, "-= .5")
}

export const lettersCardAnim = () => {
  lettersCardTimeline.from(".letters-card", {
    opacity: 0,
    y: 470,
    duration: 1.2
  })
  .from(".gray-line", {
    scale: 0,
    opacity: 0,
    duration: 1.2
  })
  .from(".letters", {
    y: 40,
    duration: 1
  }, "-= .25")
}

export const statsCardAnim = () => {
  statsCardTimeline.from(".stats-card", {
    y: 50,
    duration: 1
  })
  .from(".date", {
    opacity: 0,
    y: 280,
    duration: 1,
    stagger: {
      each: .1,
      from: "center"
    }
  })
  .from(".graph-line", {
    strokeDasharray: 1,
    strokeDashOffset: 1,
    opacity: 0,
    duration: 1,
  })
  .from(".stats-dot", {
    scale: 0,
    duration: 1,
    stagger: .1
  })
}