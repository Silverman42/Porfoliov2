<template>
  <div class="mail">
    <a class="link" href="mailto:nkezesylvester@gmail.com">
      nkezesylvester@gmail.com
    </a>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.mail {
  @apply text-center text-xs relative z-20 py-5 w-9/12 mx-auto;
}

.mail .link {
  @apply text-gray-400 hover:text-primary-700 font-mono;
}

.mail .divider {
  @apply hidden;
}
@screen lg {
  .mail {
    @apply justify-start text-base items-center flex py-0 fixed bottom-0 right-0 px-8 w-auto flex-col h-3/5;
  }

  .mail .link {
    @apply block mb-6;
    writing-mode: vertical-rl;
  }

  .mail .divider {
    @apply block border-l-2 flex-grow;
  }
}
</style>
