<template>
  <div class="page-content-wrapper">
    <div class="pc-only">
      <div class="trend-detail-page">
        <div class="header-banner-container" :style="{backgroundImage: `url(${articleHeaderImg})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}">
          <div class="detail-banner" >
            <div class="breadcrumb-container">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/media_news' }">前沿动态</el-breadcrumb-item>
                <el-breadcrumb-item>国内前沿技术研究论文</el-breadcrumb-item>
                <el-breadcrumb-item>标题文字</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="article-info">
              <div class="title">{{ article.title }}</div>
              <div class="upload-tag">{{ article.uploadTimeText }}{{ article.timestamp }}</div>
            </div>
          </div>
        </div>
        <!-- 文章内容部分 -->
        <div class="article-text-container">
          <div class="article-content">
            <div class="text-container">
              <div class="content">{{ article.content }}</div>
              <div class="footer">
                <div class="read-next">{{ nextDesc }}</div>
                <div class="next-article-title">{{ article.nextArticle.title }}</div>
              </div>
            </div>
            <div class="navigation-bar">
              <div class="tab-name">{{ navBar.title }}</div>
              <div class="article-list">
                <div v-for="(a, id) in list" :key="id" class="article">
                  <span class="title">{{ a.title }}</span>
                  <span class="timestamp">{{ a.timestamp }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-only">
      <div class="trend-detail-page"></div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '~/components/common/AppFooter.vue';

export default {
  name: 'Trend',
  components: {
    AppFooter
  },
  layout: 'normal',
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      articleHeaderImg: require(`~/static/imgs/news/detail_banner_bg_pc.png`),
      nextDesc: '阅读下一篇',
      article: {
        bgImg: require(`~/static/imgs/news/detail_banner_bg_pc.png`),
        title: '标题文字占位区域标题文字占位区域标题文字占位区域标题文',
        uploadTimeText: '上传时间：',
        timestamp: '2023-02-21',
        content: `article 123123132 内容文字占位区域内容文字占位区域内容文字占位区域内
          容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占
          位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内
          容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域`,
        nextArticle: {
          id: 1,
          title: '热成像仪在XX领域的使用'
        }
      },
      list: [
        { id: 0, title: '标题文字占位区域标题文字占位0', timestamp: '2023-07-21' },
        { id: 1, title: '标题文字占位区域', timestamp: '2023-04-09' },
        { id: 2, title: '标题文字占位区域标题区域2', timestamp: '2022-12-21' },
        { id: 4, title: '标题文字占位区域标题文字占位区域3', timestamp: '2021-10-01' },
      ],
      navBar: {
        title: '其它研究论文',
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-content-wrapper {
  padding-top: 60px;
}

// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }

  .page-content-wrapper {
    .pc-only {
      .trend-detail-page {
        display: flex;
        flex-direction: column;
        .header-banner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .detail-banner {
            width: 55%;
            padding: 40px 20px;
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
        .article-text-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .article-content {
            display: flex;
            padding: 30px 0 50px 0;
            width: 55%;
            .text-container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              flex-grow: 1;
              padding: 20px 20px 20px 0;
              .content {
                font-size: 14px;
                font-weight: 400;
                color: #333333;
                line-height: 20px;
              }
              .footer {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .read-next, .next-article-title {
                  font-size: 14px;
                  font-weight: 400;
                  color: #666666;
                  margin-left: 20px;
                  padding: 20px 0;
                  cursor: pointer;
                }
              }
            }
            .navigation-bar {
              flex-grow: 0;
              min-width: 180px;
              .tab-name {
                font-size: 18px;
                font-weight: 500;
                color: #333333;
                padding: 20px 0 20px 20px;
              }
              .article-list {
                .article {
                  display: flex;
                  flex-direction: column;
                  padding: 10px 0;
                  margin: 10px 0 10px 20px;
                  border-bottom: 1px solid #eee;
                  .title {
                    cursor: pointer;
                  }
                  .timestamp {
                    padding-top: 12px;
                    font-size: 12px;
                    color: #999999;
                    font-weight: 400;
                  }
                }
              }
            }
          }
        }
        .article-footer-container {
          display: flex;
          justify-content: center;
          align-items: center;
          .footer-content {
            display: flex;
            width: 55%;
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
