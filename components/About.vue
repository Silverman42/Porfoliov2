<template>
  <section id="about" class="px-4 py-20">
    <div class="max-w-5xl mx-auto">
      <div class="mb-5 flex items-center max-w-md">
        <h2 class="text-gray-900 text-3xl font-bold">
          <span class="font-mono text-primary-600 text-lg mr-2">03</span> About
          Me
        </h2>
        <div class="ml-4 flex-grow border-b-2"></div>
      </div>
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div class="text-gray-600 text-base lg:w-6/12">
          <p class="mb-5">
            My name is Sylvester Uche Nkeze (SUN), a full-stack software
            engineer with over 5 years of experience building web applications
            for SMEs and startups. I am a staunch audiophile (synth waves and
            frank Sinatra in work mode). These days, I enjoy engaging in
            design-centric tasks ranging from front-end development to User
            Interface design. This interest in design stems from my love for art
            and my desire to make the engagement of digital products extremely
            smooth and enticing.
          </p>
          <!-- <p class="mb-5">
            My interest in web development started back in 2015 when I developed
            a Financial accounting system as a final year project in university.
            Since then, it has been a roller coaster of engagement with multiple
            development tools and projects, all with the aim of helping to
            simplify the technical difficulties faced by businesses and
            individuals.
          </p> -->
          <p class="mb-5">
            Here are a few of the web tools I currently use and enjoy
          </p>
          <ul class="tool-list">
            <li>Javascript</li>
            <li>PHP 8</li>
            <li>CSS 3</li>
            <li>TailwindCSS</li>
            <li>Vue Js</li>
            <li>NuxtJs</li>
            <li>Laravel Framework</li>
            <li>Figma</li>
            <li>NodeJs</li>
            <li>Heroku</li>
            <li>Git</li>
          </ul>
        </div>
        <div class="mx-auto mb-5 lg:mb-0 w-40"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.tool-list {
  @apply grid gap-2 grid-cols-2;
}
.tool-list li {
  @apply mb-5 text-gray-800 relative capitalize pl-5;
}
.tool-list li::before {
  content: '▹';
  @apply text-primary-400 top-0 left-0 absolute text-base;
}
</style>
