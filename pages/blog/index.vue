<template>
  <section class="px-4 pt-14 pb-20 z-10 relative">
    <div
      class="
        flex
        md:flex-row
        max-w-5xl
        mx-auto
        md:justify-between
        flex-col
        md:items-stretch
      "
    >
      <div
        class="
          w-full
          md:mr-6
          mb-14
          md:mb-0 md:self-start
          top-28
          md:w-3/12 md:sticky
        "
      >
        <div>
          <h1 class="blog-heading">
            <span class="primary">Bl</span><span class="secondary">og</span>
          </h1>
          <label class="text-sm text-gray-600"> Search for all dev post </label>
          <div class="blog-search__container">
            <input class="blog-search__input" type="search" />
            <span class="blog-search__icon"
              ><search-icon size="1.3x"></search-icon
            ></span>
          </div>
        </div>
      </div>
      <div class="w-full md:w-9/12 min-h-screen">
        <post-item
          v-for="(post, index) in 15"
          :key="index"
          to="/blog/how-to-create-a-calender-with-vue-js"
        ></post-item>
      </div>
    </div>
  </section>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'
export default {
  components: {
    SearchIcon,
  },
  transition: {
    name: 'zoom',
    mode: 'out-in',
  },
}
</script>

<style scoped>
.blog-heading {
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  @apply block mt-2 font-extrabold text-5xl mb-6;
}
.blog-heading .primary {
  text-stroke: 2px theme('colors.primary.600');
  -webkit-text-stroke: 1px theme('colors.primary.600');
}
.blog-heading .secondary {
  text-stroke: 2px theme('colors.secondary.600');
  -webkit-text-stroke: 1px theme('colors.secondary.600');
}
.blog-search__input {
  @apply rounded-full max-w-full pr-9  border h-8 p-3 hover:border-gray-500 outline-none text-gray-700;
}
.blog-search__container {
  @apply relative mt-1 w-44;
}
.blog-search__icon {
  @apply text-gray-500 absolute right-2 top-1;
}
</style>
