<template>
  <div>
    <h1 class="text-xl font-bold text-gray-700 mb-2">Recover Password</h1>
    <p class="text-sm text-gray-500 mb-6">
      Enter your email, while we send a password recovery link to your email
    </p>
    <div class="my-4">
      <input-container label="Email">
        <input-base></input-base>
      </input-container>
    </div>
    <div class="my-4 flex justify-end">
      <nuxt-link to="/" class="text-primary-600 hover:text-primary-700 text-sm"
        >Return to login</nuxt-link
      >
    </div>
    <div class="my-4">
      <action-button> Send Recovery mail </action-button>
    </div>
    <div class="my-4 text-center font-mono text-xs text-gray-400">
      Gasapp @2021
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Auth',
  data() {
    return {
      new: '',
    }
  },
}
</script>

<style></style>
