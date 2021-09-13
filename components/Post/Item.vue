<template>
  <div
    class="
      flex
      justify-between
      flex-col-reverse
      md:flex-row
      pb-8
      mb-8
      border-b border-gray-200
    "
  >
    <div class="w-full flex md:flex-col items-center md:items-start md:w-3/12">
      <p class="text-sm font-bold text-gray-800">6 mins read</p>
      <small class="text-xs font-mono text-gray-500 inline-block ml-4 md:ml-0"
        >12 Dec 2021</small
      >
    </div>
    <nuxt-link
      :to="to"
      class="w-full block group md:flex-grow md:mx-10 mb-5 md:mb-0"
    >
      <h5
        class="
          font-bold
          text-xl
          group-hover:text-primary-700
          text-gray-800
          mb-4
        "
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h5>
      <p class="text-xs text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        ipsa illum nihil eius.
      </p>
      <div
        class="
          flex
          py-3
          text-xs text-gray-500
          group-hover:text-secondary-600
          justify-end
          items-center
        "
      >
        <span class="mr-3">Read more</span>
        <arrow-right-icon size="1.3x"> </arrow-right-icon>
      </div>
    </nuxt-link>
    <div class="w-full md:w-4/12 mb-5 md:mb-0">
      <figure class="w-full h-24 rounded-lg bg-gray-600"></figure>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowRightIcon,
  },
  props: {
    to: {
      type: [String, Object],
      default() {
        return {
          path: '/',
        }
      },
    },
  },
}
</script>

<style></style>
