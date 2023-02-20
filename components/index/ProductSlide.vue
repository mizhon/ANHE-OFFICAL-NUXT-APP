<template>
  <div class="product-slide-container">
    <section class="main-slide-section">
      <img :src="activedSlide.img" alt="">
      <div class="mask">
        <div class="title">{{ activedSlide.title }}</div>
        <div class="arrow" @click="getDetailInfo(activedSlide)">
          <span style="font-size: 32px;"><i class="el-icon-right"></i></span>
        </div>
      </div>
    </section>
    <section class="slide-list-section">
      <div v-for="(slide, idx) in list" :key="idx" class="slide-item">
        <img :src="slide.img" alt="" />
        <div class="title-mask"></div>
        <div class="title">{{ slide.title }}</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ProductSlide',
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      activedSlide: {},
    }
  },
  watch: {
    list: {
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
.product-slide-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .main-slide-section {
    position: relative;
    display: flex;
    flex-grow: 1;
    margin-right: 10px;
    height: 498px;
    // width: 100%;
    .mask {
      position: absolute;
      width: 100%;
      height: 70px;
      background: #21201f;
      bottom: 3px;
      opacity: 0.62;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title, .arrow {
        padding: 0 30px;
        color: $white;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

  .slide-list-section {
    width: 350px;
    // width: 20%;
    .slide-item {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .text-mask {

      }
      .title-mask {
        position: absolute;
        bottom: 4px;
        background: #21201F;
        opacity: 0.63;
        height: 50px;
        width: 100%;
      }
      .title {
        position: absolute;
        bottom: 20px;
        left: 12px;
        color: $white;
      }
    }
  }
}
</style>
