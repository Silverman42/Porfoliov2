<template>
  <section class="px-4 pt-32 pb-20 relative">
    <div class="max-w-5xl mx-auto relative">
      <figure
        class="absolute right-0 hidden lg:inline-block"
        style="bottom: -20px"
      >
        <img src="/patterns/pattern_2.svg" class="w-40 opacity-40" />
      </figure>
      <div class="w-full">
        <p class="text-gray-500 md:text-lg mb-5 hide-slideUp">
          Hello, I am <span class="text-gray-900 inline-block">S</span
          ><span class="hidden-name inline-block align-middle">ylvester</span>
          <span class="text-gray-900">U</span
          ><span class="hidden-name inline-block align-middle">che</span>
          <span class="text-gray-900">N</span
          ><span class="hidden-name inline-block align-middle">keze</span>
        </p>
        <h1 class="font-bold text-gray-800 text-3xl md:text-7xl">
          I build web tools that increase productivity and profit for
        </h1>
        <h1
          id="serviceType"
          class="
            font-bold
            text-3xl
            md:text-7xl
            bg-clip-text bg-gradient-to-r
            to-primary-700
            from-secondary-500
            text-transparent
          "
        >
          {{ workTypes[defaultWorkTypeIndex] }}
        </h1>
      </div>
      <div class="w-full">
        <div
          class="
            rounded-3xl
            lg:rounded-full
            mt-10
            p-2
            border
            inline-flex
            flex-wrap
            items-center
          "
        >
          <a href="#portfolio" class="w-full lg:w-auto btn btn-primary">
            <span class="mr-3">View my portfolio</span>
            <arrow-right-icon size="1.3x" />
          </a>
          <a
            href="#about"
            class="w-full mt-2 lg:m-0 lg:w-auto btn btn-primary__inverse"
          >
            <span class="mr-3">About me</span>
            <img src="/smilly_face.png" class="w-8" alt="smilly face" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowRightIcon,
  },
  data() {
    return {
      workTypes: ['SMEs', 'startups'],
      defaultWorkTypeIndex: 0,
    }
  },
  mounted() {
    const triggerChange = () => {
      setTimeout(() => {
        this.changeWorkTypeIndex()
        return triggerChange()
      }, 3000)
    }
    triggerChange()
  },
  methods: {
    changeWorkTypeIndex() {
      if (this.defaultWorkTypeIndex === this.workTypes.length - 1)
        return (this.defaultWorkTypeIndex = 0)
      return (this.defaultWorkTypeIndex += 1)
    },
  },
}
</script>

<style scoped>
.hidden-name {
  width: 0px;
  overflow-x: hidden;
  animation: reveal_new 0.6s ease-in 0.6s 1 forwards;
  -webkit-animation: reveal_new 0.3s ease-in 0.5s 1 forwards;
}
@keyframes reveal_new {
  0% {
    @apply w-0;
  }
  100% {
    @apply w-20 max-w-max;
  }
}
@-webkit-keyframes reveal_new {
  0% {
    @apply w-0;
  }
  100% {
    @apply w-20 max-w-max;
  }
}

.btn {
  @apply p-4 rounded-full items-center inline-flex;
}
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-800 text-white;
}
.btn-primary__inverse {
  @apply bg-transparent hover:bg-primary-200 text-primary-600;
}
</style>
