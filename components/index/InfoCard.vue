<template>
  <div class="info-card-container">
    <section class="card-desc" :class="cardLayout">
      <div class="info-container">
        <div class="title">
          {{ info.title }}
        </div>
        <div class="subtitle">
          {{ info.subTitle }}
        </div>
        <div class="summary">
          {{ info.summary }}
        </div>
        <div class="detail-btn">
          <button @click="handleBtnClick">{{ infoButtonText }}</button>
        </div>
      </div>
      <div class="news-img">
        <img :src="info.img" alt="" width="380px" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          title: '',
          subTitle: '',
          summary: '',
          img: '',
          position: 'bottom'
        }
      }
    },
    imgPosition: {
      type: String,
      default: 'bottom', // left | right | bottom
    },
  },
  data() {
    return {
      newsImg: '',
      position: 'bottom', // 默认图片位置为card下方
      infoButtonText: '查看详情',
      cardLayout: '', // 卡片布局样式
    }
  },
  watch: {
    imgPosition: {
      immediate: true,
      handler(newVal, oldVal) {
        // eslint-disable-next-line no-console
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        if (newVal === 'left') {
          this.cardLayout = 'img-left';
        }
        if (newVal === 'right') {
          this.cardLayout = 'img-right';
        }
      }
    }
  },
  methods: {
    handleBtnClick() {
      // eslint-disable-next-line no-console
      console.log('button click');
    }
  }
}
</script>
<style lang="scss" scoped>
.info-card-container {
  .card-desc {
    .info-container {
      width: 380px;
      background-color: #f5f7ff;
      color: $primaryText;
      .title {
        padding: 30px 20px 15px 20px;
        font-size: 22px;
        font-weight: 500;
      }
      .subtitle {
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
          color: $topMenuActiveText;
          background-color: $btnBackgroundColor;
          font-size: 16px;
          font-weight: 400;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .news-img {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .img-left {
    display: flex;
    flex-direction: row-reverse;
  }

  .img-right {
    display: flex;
  }
}
</style>