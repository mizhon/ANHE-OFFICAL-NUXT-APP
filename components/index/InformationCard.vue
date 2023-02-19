<template>
  <div class="info-card-container">
    <div class="card" :class="cardLayout">
      <div class="card__image">
        <img :src="info.img" alt="" />
      </div>
      <div class="card__info">
        <div class="title">{{ info.title }}</div>
        <div class="sub-title">{{ info.subTitle }}</div>
        <div class="summary">{{ info.summary }}</div>
        <div class="detail-btn">
          <button @click="handleBtnClick">{{ infoButtonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InformationCard',
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          title: '',
          subTitle: '',
          summary: '',
          img: '',
          position: 'top',
          path: '', // 详情页路径信息
        }
      }
    },
    imgPosition: {
      type: String,
      default: 'top', // top | bottom
    }
  },
  data() {
    return {
      position: 'top', // 默认图片位置为card上方
      infoButtonText: '查看详情',
      cardLayout: '', // 卡片布局样式
    }
  },
  watch: {
    imgPosition: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal === 'top') {
          this.cardLayout = 'img-top';
        }
        if (newVal === 'bottom') {
          this.cardLayout = 'img-bottom';
        }
      }
    }
  },
  methods: {
    handleBtnClick() {
      this.$emit('goto', this.info.path)
    }
  }
}
</script>
<style lang="scss" scoped>
.info-card-container {
  .card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
    background: $white;
    &__image {
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__info {
      .title {
        padding: 30px 20px 15px 20px;
        font-size: 22px;
        font-weight: 500;
      }
      .sub-title {
        padding: 10px 20px;
        font-size: 18px;
        font-weight: 400;
      }
      .summary {
        padding: 0 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: $secondaryText;
      }
      .detail-btn {
        padding: 10px 20px 25px 20px;
        button {
          padding: 12px 42px;
          border: none;
          color: $menuActiveText;
          background-color: $btnBackgroundColor;
          font-size: 16px;
          font-weight: 400;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}

// PC端样式
@media only screen and (min-width: 769px) {

}

// 移动端样式
@media only screen and (max-width: 768px) {

}
</style>