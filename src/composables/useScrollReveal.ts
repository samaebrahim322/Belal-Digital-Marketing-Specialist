import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const element = ref<HTMLElement>()
  const isVisible = ref(false)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (element.value) {
      observer.unobserve(element.value)
    }
  })

  return {
    element,
    isVisible
  }
}