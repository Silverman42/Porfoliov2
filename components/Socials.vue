<template>
  <div class="socials">
    <a class="icons" target="_blank" href="http://github.com/silverman42">
      <github-icon size="1.3x"></github-icon>
    </a>
    <a class="icons" target="_blank" href="https://twitter.com/snkeze9">
      <twitter-icon size="1.3x"></twitter-icon>
    </a>
    <a
      class="icons"
      target="_blank"
      href="https://linkedin.com/in/sylvester-nkeze"
    >
      <linkedin-icon size="1.3x"></linkedin-icon>
    </a>
    <div class="divider"></div>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'vue-feather-icons'
export default {
  components: {
    GithubIcon,
    TwitterIcon,
    LinkedinIcon,
  },
}
</script>

<style scoped>
.socials {
  @apply flex items-center relative z-20 p-5 w-9/12 mx-auto justify-between;
}

.socials .icons {
  @apply text-gray-400 hover:text-primary-700;
}

.divider {
  @apply hidden;
}
@screen lg {
  .socials {
    @apply justify-start fixed bottom-0 left-0 py-0 px-8 w-auto flex-col h-3/5;
  }

  .socials .icons {
    @apply mb-10;
  }

  .socials .divider {
    @apply block border-l-2 flex-grow;
  }
}
</style>
