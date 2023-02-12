<template>
  <div class="app-wrapper">
    <CommonTopbar />
    <Nuxt :next-child-key="key" />
  </div>
</template>
<script>
import CommonTopbar from '@/components/CommonTopbar.vue'

export default {
  name: 'Default',
  components: {
    CommonTopbar
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $white;
}
</style>