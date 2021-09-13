<template>
  <section id="portfolio" class="px-4 py-20">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10 font-bold">
        <span class="font-mono block text-primary-600 text-lg mr-2">01</span>
        <h2 class="text-gray-900 text-3xl">Some Noteworthy Projects</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
