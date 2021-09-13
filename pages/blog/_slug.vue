<template>
  <div class="px-4 pt-14 pb-20 z-10 relative">
    <div
      class="
        flex
        lg:flex-row
        max-w-5xl
        mx-auto
        lg:justify-between
        flex-col
        lg:items-stretch
      "
    >
      <aside
        class="
          w-full
          border-b
          lg:border-0
          mb-10
          lg:mb-0
          self-start
          z-30
          bg-white
          top-0
          lg:top-28
          md:w-3/12
          sticky
        "
      >
        <nuxt-link
          class="group flex text-sm text-gray-400 py-4 lg:py-0"
          to="/blog"
        >
          <span class="group-hover:text-secondary-500 mr-3">
            <arrow-left-icon size="1.3x"
          /></span>
          <span class="text-gray-700">Back to blog listings</span>
        </nuxt-link>
      </aside>
      <section class="w-full min-h-screen lg:flex-grow lg:mx-8 mb-10">
        <figure class="w-full h-72 bg-gray-700 rounded-lg mb-5"></figure>
        <h1 class="text-gray-900 text-xl lg:text-3xl font-bold mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </h1>
        <div
          class="mb-10 border p-5 flex items-center justify-between rounded-lg"
        >
          <p class="text-sm font-bold text-gray-800">6 mins read</p>
          <small
            class="text-xs font-mono text-gray-500 inline-block ml-4 md:ml-0"
            >12 Dec 2021</small
          >
        </div>
        <article class="text-gray-700">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium, autem quasi? Doloribus voluptates fugiat quo soluta
            totam quaerat ipsa tenetur maiores nihil omnis consequatur sunt
            numquam, consectetur hic ducimus dolore.
          </p>
        </article>
      </section>
      <aside
        class="w-full mb-10 lg:mb-0 lg:self-start lg:top-28 md:w-3/12 lg:sticky"
      >
        <h6 class="text-sm text-gray-700 mb-4 font-bold">Share article</h6>
        <div
          class="
            items-center
            inline-flex
            w-auto
            flex-wrap
            py-2
            px-4
            border
            rounded-full
          "
        >
          <a class="text-gray-400 hover:text-primary-600 mr-6" href="#">
            <twitter-icon size="1.3x" />
          </a>
          <a class="text-gray-400 hover:text-primary-600 mr-6" href="#">
            <linkedin-icon size="1.3x" />
          </a>
          <a class="text-gray-400 hover:text-primary-600" href="#">
            <facebook-icon size="1.3x" />
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import {
  ArrowLeftIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
} from 'vue-feather-icons'
export default {
  components: {
    ArrowLeftIcon,
    TwitterIcon,
    LinkedinIcon,
    FacebookIcon,
  },
}
</script>

<style></style>
