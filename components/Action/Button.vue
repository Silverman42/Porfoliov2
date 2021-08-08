<template>
  <button class="btn" :class="extraCss">
    <slot name="icon"></slot>
    <slot>Button</slot>
  </button>
</template>
<script>
export default {
  props: {
    extraCss: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
@import '@/components/Action/Buttons.css';
</style>
