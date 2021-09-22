export default {
  methods: {
    /**
     * MakeObserver
     * @description: Uses the class name of the entry element to apply the observer
     * @param {String} addedClass (New html class to be added to the observed element)
     */
    MakeObserver(addedClass) {
      return new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Element to be observed
              const target = entry.target
              target.classList.add(addedClass)
              //   observer.unobserve(target)
            } else {
              entry.target.classList.remove(addedClass)
            }
          })
        },
        {
          root: null,
          threshold: 0,
        }
      )
    },
    /**
     * ObserveElement
     * @description: Trigger Observer API to observe the element
     * @param {String} observedElementClass (Element to be observed)
     * @param  {String} addedClass (Classes to be added after the element has been observed)
     */
    ObserveElement(observedElementClass, addedClass) {
      const elementObserver = this.MakeObserver(addedClass)
      const elements = Array.from(
        document.querySelectorAll(observedElementClass)
      )
      elements.forEach(function (element) {
        elementObserver.observe(element)
      })
    },
    TriggerObserver() {
      this.ObserveElement('.hide-slideUp', 'slideUp')
      this.ObserveElement('.hide-slideInLeft', 'slideInLeft')
      this.ObserveElement('.hide-slideInRight', 'slideInRight')
    },
    TriggerAfterPageLoad() {
      const vm = this
      window.addEventListener('load', () => {
        vm.TriggerObserver()
      })
    },
  },
  updated() {
    this.TriggerObserver()
  },
  mounted() {
    this.TriggerAfterPageLoad()
    this.TriggerObserver()
  },
}
