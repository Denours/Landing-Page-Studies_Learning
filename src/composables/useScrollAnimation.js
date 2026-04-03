import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(className = 'section-transition') {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      },
    )

    const elements = document.querySelectorAll(`.${className}`)
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
