<template>
  <section class="px-4 py-20">
    <div class="max-w-2xl mx-auto">
      <div class="mb-5 flex items-center max-w-md">
        <h2 class="text-gray-900 text-3xl font-bold">
          <span class="font-mono text-primary-600 text-lg mr-2">02</span> Where
          I've worked
        </h2>
        <div class="ml-4 flex-grow border-b-2"></div>
      </div>
      <div class="">
        <tab :tabs="workplace" :default-active-tab="workplace[0]">
          <template
            v-for="(experience, index) in experiences"
            #[`tab-body-${workplace[index]}`]
          >
            <div :key="index">
              <h3 class="text-lg">
                <span class="text-gray-800">{{ experience.title }}</span>
                <span class="text-primary-700"
                  >@ {{ experience.fullname }}</span
                >
              </h3>
              <p class="font-mono text-xs text-gray-500">
                <span>{{ experience.from }}</span> -
                <span>{{ experience.to }}</span>
              </p>
            </div>
          </template>
        </tab>
        <div class="mx-auto mb-5 lg:mb-0 w-40"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      workplace: [],
      experiences: [],
    }
  },
  async fetch() {
    this.experiences = await this.$content('work')
      .only(['name', 'title', 'from', 'to', 'body', 'fullname'])
      .fetch()
    await this.getWorkPlace()
  },
  mounted() {},
  methods: {
    async getWorkPlace() {
      this.workplace = await this.experiences.map((job) => {
        return job.name.replace(' ', '-')
      })
    },
  },
}
</script>

<style></style>
