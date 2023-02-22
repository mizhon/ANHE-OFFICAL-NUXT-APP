<template>
  <div class="tech-support-card">
    <div class="tech-support__header">
      <div class="header-img">
        <img :src="headerBgImg" alt="" />
      </div>
      <div class="header-desc" :style="headerStyle">{{ headerText }}</div>
    </div>
    <div class="tech-support__list">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechSupportCard',
  props: {
    headerText: {
      type: String,
      default: ''
    },
    headerStyle: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      headerBgImg: require(`~/static/imgs/tech/tech_header_bg_img.png`),
    }
  }
}
</script>
<style lang="scss" scoped>
.tech-support-card {
  .tech-support__header {
    position: relative;
    text-align: center;
    // .header-img {

    // }
    .header-desc {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translate(0, -50%);
      font-size: 26px;
      font-weight: 500;
      color: white;
    }
  }

  .tech-support__list {

  }
}
</style>
