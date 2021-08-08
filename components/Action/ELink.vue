<template>
  <a class="btn" :target="target" :class="extraCss" :href="href">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    extraCss: {
      type: Array,
      default() {
        return []
      },
    },
    target: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
@import '@/components/Action/Buttons.css';
</style>
