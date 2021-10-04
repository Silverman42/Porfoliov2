<template>
  <div>
    <!-- Hero phrase start -->
    <hero />
    <!-- Hero phrase end -->
    <!-- projects start -->
    <project-container>
      <project-card
        v-for="(project, index) in projects"
        :key="index"
        :card-data="project"
        :card-number="index + 1"
      ></project-card>
    </project-container>
    <!-- projects end -->
    <!-- Work start -->
    <work>
      <tab :tabs="workplace" :default-active-tab="workplace[0]">
        <template
          v-for="(experience, index) in experiences"
          #[`tab-body-${workplace[index]}`]
        >
          <div :key="index">
            <h3 class="text-lg">
              <span class="text-gray-800">{{ experience.title }}</span>
              <span class="text-primary-700">@ {{ experience.fullname }}</span>
            </h3>
            <p class="font-mono text-xs text-gray-500">
              <span>{{ experience.from }}</span> -
              <span>{{ experience.to }}</span>
            </p>
            <div class="my-5 text-gray-500 break-words">
              <nuxt-content
                :document="{ body: experience.body }"
              ></nuxt-content>
            </div>
          </div>
        </template>
      </tab>
    </work>
    <!-- Work end -->
    <!-- About start -->
    <about />
    <!-- About end -->
    <bottom />
  </div>
</template>

<script>
import observer from '~/assets/mixins/Observer'
export default {
  mixins: [observer],
  layout: 'Main',
  transition: {
    name: 'zoom',
    mode: 'out-in',
  },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .only(['fullname', 'description', 'devstack', 'weblink', 'github'])
      .fetch()
    const experiences = await $content('work')
      .only(['name', 'title', 'from', 'to', 'body', 'fullname', 'position'])
      .sortBy('position', 'desc')
      .fetch()
    const workplace = await experiences.map((job) => {
      return job.name.replace(' ', '-')
    })
    return {
      projects,
      experiences,
      workplace,
    }
  },
  data() {
    return {}
  },
  head: {
    title: 'I am SUN',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A software engineer with a love for beautiful and function websites and applications',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://sundev.netlify.app',
      },
      {
        property: 'og:title',
        content: 'SUN :: Sylvester Uche Nkeze',
      },
      {
        property: 'og:decsription',
        content:
          'A software engineer with a love for beautiful and function websites and applications',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://sundev.netlify.app',
      },
      {
        property: 'twitter:title',
        content: 'SUN :: Sylvester Uche Nkeze',
      },
      {
        property: 'twitter:description',
        content:
          'A software engineer with a love for beautiful and function websites and applications',
      },
    ],
  },
}
</script>

<style>
.nuxt-content ul li {
  @apply mb-5 relative pl-5;
}
.nuxt-content ul li::before {
  content: '▹';
  @apply text-primary-400 top-0 left-0 absolute text-base;
}

.nuxt-content a {
  @apply text-primary-600 hover:text-primary-900;
}
</style>
