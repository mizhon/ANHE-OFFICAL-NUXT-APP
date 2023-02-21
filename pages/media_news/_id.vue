<template>
  <div class="page-content-wrapper">
    <div class="news-detail-page">
      <div class="pc-only">
        <div class="detail-info-content" :style="{backgroundImage: `url(${article.bgImg})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}">
          <div class="detail-banner" >
            <div class="breadcrumb-container">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/media_news' }">新闻中心</el-breadcrumb-item>
                <el-breadcrumb-item>公司新闻</el-breadcrumb-item>
                <el-breadcrumb-item>标题文字</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="article-info">
              <div class="title">{{ article.title }}</div>
              <div class="upload-tag">{{ article.uploadTimeText }}{{ article.timestamp }}</div>
            </div>
          </div>
        </div>

      </div>
      <div class="mobile-only"></div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '~/components/common/AppFooter.vue';

export default {
  components: {
    AppFooter
  },
  layout: 'normal',
  validate({params}) {
    // eslint-disable-next-line no-console
    console.log('获取参数: --->', params)
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      article: {
        bgImg: require(`~/static/imgs/news/detail_banner_bg_pc.png`),
        title: '标题文字站位符',
        uploadTimeText: '上传时间：',
        timestamp: '2023-02-21'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.news-detail-page {
  padding-top: 60px;
}

// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
  .news-detail-page {
    display: flex;
    flex-direction: column;
    .pc-only {
      .detail-info-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        .detail-banner {
          width: 55%;
          padding: 40px 20px;
          .breadcrumb-container {

          }
        }
        .article-info {
          .title {
            padding: 48px 0 24px 0;
            font-size: 28px;
            font-weight: 500;
            color: #1d1d1d;

          }
          .upload-tag {
            font-size: 14px;
            font-weight: 400;
            color: #666666;
          }
        }
      }
    }
  }
}
// 移动端样式
@media only screen and (max-width: 768px) {
  .pc-only {
    display: none !important;
  }


}
</style>
