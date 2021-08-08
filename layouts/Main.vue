<template>
  <div class="font-sans relative">
    <img
      src="/patterns/yellow_ellipse.png"
      class="w-52 h-auto top-0 right-0 hidden md:block absolute"
      style="z-index: 0"
      alt=""
    />
    <header class="navbar md:sticky top-0 left-0 z-20">
      <div
        class="
          px-4
          md:px-0
          max-w-5xl
          mx-auto
          flex
          items-center
          justify-between
          py-3
        "
      >
        <div class="w-20 font-bold">S U N</div>
        <nav class="flex items-center text-sm">
          <ul class="md:flex items-center mr-4 hidden">
            <li class="mr-9">
              <a href="#trading" class="hover:text-primary-500">About</a>
            </li>
            <li class="mr-9">
              <a href="#services" class="hover:text-primary-500">Portfolio</a>
            </li>
            <li class="mr-9">
              <a href="#contact" class="hover:text-primary-500">Work</a>
            </li>
            <li class="mr-9">
              <a href="#about" class="hover:text-primary-500">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="p-2 border border-primary-300 rounded-full">
          <a
            href="mailto:snkeze@gmail.com"
            class="
              py-2
              px-4
              text-sm
              inline-block
              font-bold
              rounded-full
              bg-primary-600
              text-white
              hover:bg-primary-800
            "
          >
            Profile
          </a>
          <a
            href="mailto:snkeze@gmail.com"
            class="
              py-2
              ml-2
              px-4
              text-sm
              leading-none
              inline-block
              rounded-full
              bg-transparent
              font-bold
              text-primary-600
              hover:bg-primary-100
            "
          >
            Blog
          </a>
        </div>
      </div>
    </header>
    <aside class="md:hidden block navbar fixed w-full bottom-0 left-0 z-20">
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
          justify-between
          text-sm
          flex
          overflow-x-auto
          font-bold
        "
      >
        <li class="">
          <a href="#trading" class="text-gray-700 hover:text-primary-500"
            >About</a
          >
        </li>
        <li class="">
          <a href="#services" class="text-gray-700 hover:text-primary-500"
            >Portfolio</a
          >
        </li>
        <li class="">
          <a href="#contact" class="text-gray-700 hover:text-primary-500"
            >Work</a
          >
        </li>
        <li class="">
          <a href="#about" class="text-gray-700 hover:text-primary-500"
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
<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.38);
}
</style>
