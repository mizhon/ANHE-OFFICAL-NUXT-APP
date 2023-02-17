<template>
  <div class="page-content-wrapper">
    <section class="index-page">
      <!-- Banner 部分 -->
      <div class="main-banner">
        <!-- 主图（走马灯效果） -->
        <div class="banner-image">
          <img :src="banner.imagePath" alt="" width="100%" />
        </div>
        <!-- 文字部分 -->
        <div class="banner-info">
          <!-- <div class="desc">{{ banner.descText }}</div> -->
          <div class="desc">
            <span>{{ banner.desc1 }}</span>
            <span>{{ banner.desc2 }}</span>
            <span>{{ banner.desc3 }}</span>
          </div>
          <div class="title">
            <div class="main">{{ banner.mainText }}</div>
            <div class="decorator">
              <img :src="banner.tranglePath" alt="" />
            </div>
            <div class="sub">{{ banner.subText }}</div>
          </div>
          <!-- 下拉按钮 -->
          <div class="pull-down" @click="scrollDown">
            <div>
              <img :src="banner.btnIcon" alt="" />
            </div>
            <p>{{ banner.actionText }}</p>
          </div>
        </div>
      </div>
      <!-- 信息动态 -->
      <div class="news-section">
        <p>{{ headInfoTitle }}</p>
        <div class="news-info-container">
          <div class="main-info">
            <InfoCard :info="newsInfo" />
          </div>
          <div class="sub-info">
            <InfoCard :info="productInfo" :img-position="productInfo.position" />
            <InfoCard :info="searchInfo" :img-position="searchInfo.position" />
          </div>
        </div>
      </div>
      <!-- 产品展示 -->
      <div class="product-section">
        <p>{{ headProductTitle }}</p>
        <div class="product-info-container">
          <ProductCarousel />
        </div>
      </div>
    </section>
    <CommonFooter />
  </div>
</template>
<script>
import InfoCard from '@/components/index/InfoCard.vue'
import ProductCarousel from '@/components/index/ProductCarousel.vue'
import CommonFooter from '@/components/CommonFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    InfoCard,
    ProductCarousel,
    CommonFooter
  },
  layout: (ctx) => {
    // eslint-disable-next-line no-console
    console.log('$device ---===>>>', ctx.$device)
    return 'default'
  },
  data() {
    return {
      banner: {
        imagePath: `/imgs/index/banner_img.png`,
        tranglePath: `/imgs/banner-trangle.svg`,
        mainText: `安禾`,
        decoratorImagePath: ``,
        subText: `科学仪器`,
        descText: `稀释制冷剂  扫描探针显微镜  多功能物理特性测量系统`,
        desc1: `稀释制冷剂`,
        desc2: `扫描探针显微镜`,
        desc3: `多功能物理特性测量系统`,
        btnIcon: `/icons/pulldown.svg`,
        actionText: `向下滑动`
      },
      headInfoTitle: '信息动态',
      newsInfo: {
        title: '新闻动态',
        subTitle: '新闻动态最新信息标题文字占位长度',
        summary: '新闻内容详情正文文字占位新闻内容详情正文文字 占位新闻内容详情正文文字',
        img: '/imgs/index/news-img.png'
      },
      headProductTitle: '产品展示',
      productInfo: {
        title: '产品动态',
        subTitle: '产品动态最新信息标题文字占位长度',
        summary: '产品内容详情正文文字占位产品内容详情正文文字 占位产品内容详情正文文字',
        img: '/imgs/index/product-img.png',
        position: 'left' // 需要修改图片位置时设置
      },
      searchInfo: {
        title: '研究动态',
        summary: '研究内容详情正文文字占位研究内容详情正文文字 占位研究内容详情正文文字',
        img: '/imgs/index/product-img.png',
        position: 'right' // 需要修改图片位置时设置
      }
    }
  },
  methods: {
    scrollDown() {

    }
  }
}
</script>
<style lang="scss" scoped>
.index-page {
  .main-banner {
    position: relative;
    .banner-image {
    }
    .banner-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      // top: 0;
      top: -80px;

      .desc {
        color: $white;
        font-weight: 300;
        line-height: 30px;
        font-size: 26px;
        padding-bottom: 24px;
        span {
          padding: 0 10px;
        }
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 40px;
        font-size: 100px;
        font-weight: bold;
        color: $white;
        letter-spacing: 4px;

        .decorator {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 14px;
        }
      }

      .pull-down {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -40px;
        color: $white;
        font-weight: 300;
        cursor: pointer;
        img {
          width: 48px;
          height: 48px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }

  .news-section, .product-section  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    p {
      font-size: 38px;
      color: #333;
      padding: 65px 20px 15px 20px;
    }
  }

  .news-info-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    .main-info, .sub-info {
      padding: 0 5px;
    }
  }

  .product-section .product-info-container {
    width: 70%;
  }
}
</style>
