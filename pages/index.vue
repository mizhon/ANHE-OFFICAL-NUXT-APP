<template>
  <div class="page-content-wrapper">
    <section class="index-page">
      <!-- Banner 部分 -->
      <div class="main-banner">
        <!-- 主图 -->
        <div class="banner-image">
          <img :src="banner.imagePath" alt="" height="100%" width="100%"/>
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
        <p>信息动态</p>
        123
      </div>
      <!-- 产品展示 -->
      <div class="product-section">
        <p>产品展示</p>
        456
      </div>
    </section>
    <CommonFooter />
  </div>
</template>
<script>
import CommonFooter from '@/components/CommonFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    CommonFooter
  },
  layout: 'default',
  data() {
    return {
      banner: {
        imagePath: `/imgs/slide.jpeg`,
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
      top: -120px;

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
        bottom: -50px;
        color: $white;
        font-weight: 300;
        cursor: pointer;
        img {
          width: 32px;
          height: 32px;
        }
        p {
          padding-top: 15px;
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
      padding: 40px 20px 20px 20px;
    }
  }

  // .product-section {

  // }
}
</style>
