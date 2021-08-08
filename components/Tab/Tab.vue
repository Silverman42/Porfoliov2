<template>
  <keep-alive>
    <div class="tab-container">
      <header>
        <ul class="tab-header">
          <li
            v-for="(tab, index) in tabArray"
            :key="index"
            class="tab-btns"
            :class="{ active: activeTab == tab }"
            @click="setActiveTab(tab)"
          >
            <slot :name="createTabSlotName(tab)">{{ tab }}</slot>
          </li>
        </ul>
      </header>
      <main class="tab-body">
        <slot :name="getTabBodyName"></slot>
      </main>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    defaultActiveTab: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeTab: this.defaultActiveTab,
      tabArray: this.tabs,
    }
  },
  computed: {
    getTabBodyName() {
      return `tab-body-${this.activeTab}`
    },
  },
  methods: {
    generateRandomKeys() {
      return Math.ceil(Math.random() * 500000000)
    },
    createTabSlotName(tab) {
      return `tab-${tab}`
    },
    setActiveTab(tab) {
      this.activeTab = tab
      this.$emit('tabSwitch', tab)
    },
  },
}
</script>

<style scoped>
@import '@/components/Tab/Tab.css';
</style>
