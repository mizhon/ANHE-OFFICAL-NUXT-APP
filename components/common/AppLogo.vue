
<template>
  <div class="app-logo">
    <img :src="path" :width="`${width}px`" />
  </div>
</template>
<script>
export default {
  name: 'AppLogo',
  props: {
    path: { type: String, default: "" },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
  }
}
</script>
<style lang="scss" scoped>
.app-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 50px;
  height: 100%;
}
</style>