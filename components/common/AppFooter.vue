<template>
  <div class="app-footer">
    App Footer
  </div>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.app-footer {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: orange;
  z-index: 1000;
}
</style>