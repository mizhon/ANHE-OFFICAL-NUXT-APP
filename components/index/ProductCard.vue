<template>
  <div class="product-card-container">
    <img :src="product.img" alt="" />
    <div class="title-mask">
      {{ product.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: '',
          img: ''
        }
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
// 只在 <= 768px尺寸的(移动端)小型设备上展示
// 移动端样式
@media only screen and (max-width: 768px) {
  .product-card-container {
    position: relative;
    padding: 30px;
    // margin-bottom: 30px;
    // background: $white;
    img {
      width: 100%;
      height: 100%;
    }

    .title-mask {
      position: absolute;
      color: $white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 28px;
      text-align: center;
    }
  }
}
</style>
