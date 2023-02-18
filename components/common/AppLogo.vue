
<template>
  <img :src="path" :width="`${width}px`" :height="`${height}px`" />
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
