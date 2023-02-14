<template>
  <div class="product-detail-container">
    <div class="img-banner">
      <img :src="info.bannerImg" alt="" width="100%" />
    </div>
    <!-- 概况部分 -->
    <div class="info-container">
      <div class="info-details">
        <div class="title">
          {{ overviewTitle }}
        </div>
        <div class="desc">
          {{ info.intro }}
        </div>
        <div class="hightlight-desc">
          {{ info.highLightIntro }}
        </div>
      </div>
      <ConsultCard />
    </div>
    <!-- 技术参数 -->
    <div class="info-container">
      <div class="info-details">
        <div class="title">{{ paramTitle }}</div>
        <div class="desc">
          {{ info.paramDesc }}
        </div>
      </div>
    </div>
    <!-- 部件选配 -->
    <div class="info-container">
      <div class="info-details">
        <div class="title">{{ componentTitle }}</div>
        <div class="desc">
          {{ info.componentDesc }}
        </div>
      </div>
    </div>
    <!-- 底部图片 -->
    <div class="img-footer">
      <div v-for="(imgItem, id) in info.footerImgs" :key="id" class="imgs-container">
        <img :src="imgItem.path" alt="" width="100%" />
      </div>
    </div>
  </div>
</template>
<script>
import ConsultCard from '@/components/product/ConsultCard.vue'

export default {
  name: 'ProductDetail',
  components: {
    ConsultCard
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          bannerImg: '',
          intro: '',
          highLightIntro: '',
          paramDesc: '',
          componentDesc: '',
          footerImgs: []
        }
      }
    }
  },
  data() {
    return {
      overviewTitle: '概况介绍',
      paramTitle: '技术参数',
      componentTitle: '部件选配',
    }
  }

};
</script>
<style lang="scss" scoped>
.product-detail-container {
  // height: 100%;
  padding: 20px 10px;
  .img-banner {}

  .info-container {
    display: flex;
    padding: 25px 0 5px 15px;

    .info-details {
      max-width: 500px;
      font-size: 14px;
      .title {
        padding: 20px 10px 0 10px;
        font-size: 24px;
        font-weight: 500;
        color: $primaryText;
      }
      .desc, .hightlight-desc {
        padding: 0 10px;
        line-height: 24px;
        text-align: justify; // 文字两端对齐
        color: $primaryText;
        white-space: pre-line;
      }
      .hightlight-desc {
        color: $menuActiveText;
        font-weight: 500;
      }
    }
  }

  .img-footer {
    display: flex;
    padding: 15px 0 30px 0;
    .imgs-container {
      padding: 5px;
    }
  }
}
</style>
