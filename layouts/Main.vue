<template>
  <div class="font-sans relative pb-20 md:pb-10">
    <img
      src="/patterns/yellow_ellipse.png"
      class="w-52 h-auto top-0 right-0 hidden md:block absolute"
      style="z-index: 0"
      alt=""
    />
    <header class="navbar w-full md:sticky top-0 left-0 z-20">
      <div
        class="
          px-4
          lg:px-0
          max-w-5xl
          mx-auto
          flex
          items-center
          justify-between
          py-3
        "
      >
        <div class="w-20 font-bold">S U N</div>
        <nav v-if="isHomePage === true" class="flex items-center text-sm">
          <ul class="md:flex text-gray-600 items-center mr-4 hidden">
            <li class="mr-9">
              <a href="#about" class="hover:text-primary-500">About</a>
            </li>
            <li class="mr-9">
              <a href="#portfolio" class="hover:text-primary-500">Portfolio</a>
            </li>
            <li class="mr-9">
              <a href="#work" class="hover:text-primary-500">Work</a>
            </li>
            <li class="mr-9">
              <a href="#contact" class="hover:text-primary-500">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="p-2 border border-primary-300 rounded-full">
          <nuxt-link exact active-class="active" to="/" class="section-links">
            Pr<span class="hidden md:inline">ofile</span>
          </nuxt-link>
          <nuxt-link active-class="active" to="/blog" class="section-links">
            Bl<span class="hidden md:inline">og</span>
          </nuxt-link>
        </div>
      </div>
    </header>
    <aside
      v-if="isHomePage === true"
      class="md:hidden block navbar fixed w-full bottom-0 left-0 z-20"
    >
      <ul
        class="
          max-w-5xl
          px-4
          md:px-0
          mx-auto
          md:hidden
          items-center
          py-4
          border-b-1
          text-xs
          flex
          justify-center
          overflow-x-auto
        "
      >
        <li class="inline-block w-auto mr-7">
          <a href="#about" class="text-gray-700 hover:text-primary-500"
            >About</a
          >
        </li>
        <li class="inline-block w-auto mr-7">
          <a href="#portfolio" class="text-gray-700 hover:text-primary-500"
            >Portfolio</a
          >
        </li>
        <li class="inline-block w-auto mr-7">
          <a href="#work" class="text-gray-700 hover:text-primary-500">Work</a>
        </li>
        <li class="inline-block w-auto">
          <a href="#contact" class="text-gray-700 hover:text-primary-500"
            >Contact</a
          >
        </li>
      </ul>
    </aside>
    <nuxt-child />
    <footer></footer>
    <socials />
    <email-comp />
  </div>
</template>
<script>
export default {
  computed: {
    isHomePage() {
      return this.$route.name === 'index'
    },
  },
}
</script>
<style scoped>
@import '@/layouts/Layout.css';
</style>
