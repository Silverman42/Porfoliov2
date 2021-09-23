<template>
  <section id="work" class="px-4 py-20 relative">
    <figure class="absolute right-20 top-10 hidden lg:inline-block">
      <img src="/patterns/pattern_2.svg" class="w-40 opacity-40" />
    </figure>
    <figure class="absolute left-16 top-10 hidden lg:inline-block">
      <img src="/patterns/pattern_3.svg" class="w-80 opacity-50" />
    </figure>
    <div class="max-w-2xl mx-auto">
      <div class="mb-5 flex items-center max-w-md">
        <h2 class="text-gray-900 text-3xl font-bold hide-slideInRight">
          <span class="font-mono text-primary-600 text-lg mr-2">02</span> Where
          I've worked
        </h2>
        <div class="ml-4 flex-grow border-b-2"></div>
      </div>
      <div class="hide-slideInLeft">
        <slot />
        <div class="mx-auto mb-5 lg:mb-0 w-40"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
