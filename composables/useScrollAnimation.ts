import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface AnimationOptions {
  y?: number
  opacity?: number
  duration?: number
  ease?: string
  stagger?: number
  start?: string
  end?: string
  toggleActions?: string
}

export const useScrollAnimation = () => {
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
  })

  const animateFromBottom = (
    selector: string,
    options: AnimationOptions = {}
  ) => {
    const {
      y = 50,
      opacity = 0,
      duration = 0.8,
      ease = 'power2.out',
      stagger = 0,
      start = 'top 80%',
      end = 'bottom 20%',
      toggleActions = 'play none none reverse'
    } = options

    gsap.fromTo(selector, 
      { 
        y,
        opacity 
      },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: selector,
          start,
          end,
          toggleActions
        }
      }
    )
  }

  return {
    animateFromBottom
  }
}