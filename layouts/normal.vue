<!-- fixed header & footer layout -->
<template>
  <div class="app-wrapper">
    <AppHeader />
    <Nuxt :next-child-key="key" />
  </div>
</template>
<script>
import AppHeader from '~/components/common/AppHeader.vue';

export default {
  name: 'Fixed',
  components: {
    AppHeader,
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
  width: 100%;
  height: 100%;
  background-color: $white;
}
</style>