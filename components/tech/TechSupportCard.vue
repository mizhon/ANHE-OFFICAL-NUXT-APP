<template>
  <div class="tech-support-card-wrapper">
    <div class="header">
      {{ headerText }}
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TechSupportCard',
  props: {
    headerText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.tech-support-card-wrapper {
  display: flex;
  align-items: center;
  .header {

  }
}
</style>
