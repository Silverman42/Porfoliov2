<template>
  <section class="px-4 py-20">
    <div class="max-w-5xl mx-auto">
      <div
        class="
          flex
          md:flex-row
          flex-col
          items-center
          px-8
          py-8
          rounded-3xl
          bg-primary-700
          justify-between
          diagonal-bg
        "
      >
        <div class="w-full md:w-5/12">
          <div class="text-left mb-5 font-bold">
            <span class="font-mono block text-primary-300 text-lg"
              >04 Say Hello</span
            >
            <h2 class="text-white text-2xl md:text-5xl mb-3">Get in Touch</h2>
          </div>
          <p class="text-primary-200 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro non
            aspernatur, in voluptatibus iure nisi similique, quos, maxime modi
            assumenda
          </p>
        </div>
        <div class="md:w-36 w-full my-5">
          <action-e-link
            :extra-css="['btn-secondary-inverse', 'btn-rounded']"
            href="mailto:sylvesternkeze@gmail.com&subject=Hello Sylvester"
            target="_blank"
            >Say Hello</action-e-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.diagonal-bg {
  background-color: #6235ca;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%234f25ac' fill-opacity='1'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
