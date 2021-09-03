<template>
  <div class="contain">
    <div class="link-container">
      <span class="project-icon">
        <box-icon size="1.9x"></box-icon>
      </span>
      <div class="links">
        <a
          v-if="getData().github"
          :href="getData().github"
          target="_blank"
          class="link-icon"
        >
          <github-icon size="1.3x"></github-icon>
        </a>
        <a
          v-if="getData().weblink"
          :href="getData().weblink"
          target="_blank"
          class="link-icon"
        >
          <external-link-icon size="1.3x" />
        </a>
      </div>
    </div>
    <a :href="getData().weblink" target="_blank" class="project-name">{{
      getData().fullname
    }}</a>
    <p class="project-description">{{ getData().description }}</p>
    <div class="tech-stack">
      <span v-for="(stack, index) in getData().devstack" :key="index">
        {{ stack }}
      </span>
    </div>
  </div>
</template>

<script>
import { BoxIcon, GithubIcon, ExternalLinkIcon } from 'vue-feather-icons'
export default {
  components: {
    BoxIcon,
    GithubIcon,
    ExternalLinkIcon,
  },
  props: {
    cardData: {
      type: Object,
      default() {
        return {
          fullname: 'App name',
          description: 'Official website for the Miss May Day Beauty Pageant',
          weblink: '',
          github: '',
          devstack: ['HTML', 'CSS', 'VueJS'],
        }
      },
    },
  },
  methods: {
    getData() {
      return {
        fullname: this.cardData?.fullname,
        description: this.cardData?.description,
        weblink: this.cardData?.weblink,
        github: this.cardData?.github,
        devstack: this.cardData?.devstack || [],
      }
    },
  },
}
</script>

<style scoped>
@import '@/components/Project/Card.css';
</style>
