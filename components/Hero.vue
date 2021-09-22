<template>
  <section class="px-4 pt-32 pb-20">
    <div class="max-w-5xl mx-auto">
      <p class="text-gray-500 md:text-lg mb-5 hide-slideUp">
        Hello, I am <span class="text-gray-900 inline-block">S</span
        ><span class="hidden-name inline-block align-middle">ylvester</span>
        <span class="text-gray-900">U</span
        ><span class="hidden-name inline-block align-middle">che</span>
        <span class="text-gray-900">N</span
        ><span class="hidden-name inline-block align-middle">keze</span>
      </p>
      <h1 class="font-bold text-gray-800 text-3xl md:text-7xl hide-slideUp">
        I build web tools that increase productivity and profit for
        <span
          id="serviceType"
          class="
            bg-clip-text bg-gradient-to-r
            from-primary-700
            to-secondary-500
            text-transparent
          "
          >small to medium scale businesses</span
        >
      </h1>
    </div>
  </section>
</template>

<script>
export default {}
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
</style>
