<template>
  <div class="product-show-container">
    <div class="main-product-container">
      <div class="main-product-image">
        <img src="" alt="">
      </div>
    </div>
    <div class="products-list">
      <div v-for="(p, i) in products" :key="i" class="product">
        <div class="cover-container">
          <img :src="p.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductShow',
  props: {
    products: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      activeSlide: {}
    }
  },
  watch: {
    products: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal.length > 0) {
          this.activedSlide = newVal[0]; // 将slide数组的第一个作为激活的slide显示
        }
      }
    }
  },
  methods: {
    getDetailInfo(slide) {
      // todo
      // eslint-disable-next-line no-console
      console.log('to target slide: ', slide);
    }
  }
}
</script>
<style lang="scss" scoped>
.img {
  max-width: 100%;
  max-height: 100%;
}

.product-show-container {
  .main-product-container {
    width: 100%;
    height: 550px;
  }

  .products-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 300px;
    min-width: 240px;
    height: 550px;
  }
}

</style>
