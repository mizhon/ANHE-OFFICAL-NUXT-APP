<!-- fixed header & footer layout -->
<template>
  <div class="app-wrapper">
    <AppHeader />
    <Nuxt :next-child-key="key" />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from '~/components/common/AppHeader.vue';
import AppFooter from '~/components/common/AppFooter.vue';

export default {
  name: 'Fixed',
  components: {
    AppHeader,
    AppFooter
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