<template>
  <div class="page-content-wrapper">
    <div class="pc-only">
      <div class="knowledge-note-detail-page">
        <div class="header-info-content" :style="{backgroundImage: `url(${article.bgImg})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`}">
          <div class="detail-banner" >
            <div class="breadcrumb-container">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/knowledge_center' }">知识中心</el-breadcrumb-item>
                <el-breadcrumb-item>产品笔记</el-breadcrumb-item>
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
              <div class="content">{{ article.content1 }}</div>
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
      <div class="knowledge-note-detail-page">
        <div class="m-article-container">
          <div class="m-article-header">
            <div class="title">{{ article.title }}</div>
            <div class="timestamp">{{ article.timestamp }}</div>
          </div>
          <div class="m-article-content">{{ article.content1 }}</div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '~/components/common/AppFooter.vue';

export default {
  name: 'Note',
  components: {
    AppFooter
  },
  layout: 'normal',
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      // 默认值，仅用于显示
      nextDesc: '阅读下一篇',
      article: {
        bgImg: require(`~/static/imgs/news/detail_banner_bg_pc.png`),
        title: '产品笔记：标题文字占位区域标题文字占位区域标题',
        uploadTimeText: '上传时间：',
        timestamp: '2023-02-21',
        content1: `article 123123132 内容文字占位区域内容文字占位区域内容文字占位区域内
          容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占
          位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内
          容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域`,
        content2: `article 123123132 内容文字占位区域内容文字占位区域内容文字占位区域内
          容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占
          位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内
          容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域`,
        nextArticle: {
          id: 1,
          title: '笔记：XXX在XX领域的使用'
        }
      },
      list: [
        { id: 0, title: '标题文字占位区域标题文字占位0', timestamp: '2023-07-21' },
        { id: 1, title: '标题文字占位区域', timestamp: '2023-04-09' },
        { id: 2, title: '标题文字占位区域标题区域2', timestamp: '2022-12-21' },
        { id: 4, title: '标题文字占位区域标题文字占位区域3', timestamp: '2021-10-01' },
      ],
      navBar: {
        title: '公司新闻',
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

  .pc-only {
    .knowledge-note-detail-page {
      .header-info-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .detail-banner {
          width: 55%;
          padding: 40px 20px;
          // .breadcrumb-container {}

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

// 移动端样式
@media only screen and (max-width: 768px) {
  .pc-only {
    display: none !important;
  }

  .mobile-only {
    .knowledge-note-detail-page {
      .m-article-container {
        .m-article-header {
          .title {
            // padding: 60px 40px 20px 40px;
            padding: 3.75rem /* 60/16 */ 2.5rem /* 40/16 */ 1.25rem /* 20/16 */ 2.5rem /* 40/16 */;
            font-size: 1.25rem /* 20/16 */;
            font-weight: 500;
            color: #333333;
            line-height: 1.875rem /* 30/16 */;
          }
          .timestamp {
            padding-bottom: 1.25rem /* 20/16 */;
            margin: 1.25rem /* 20/16 */ 2.5rem /* 40/16 */;
            font-size: .875rem /* 14/16 */;
            color: #999999;
            border-bottom: 1px solid #e4e4e4;
          }
        }

        .m-article-content {
          padding: 1.25rem /* 20/16 */2.5rem /* 40/16 */2.5rem /* 40/16 */2.5rem /* 40/16 */;
          font-size: 1rem /* 16/16 */;
          color: #333333;
          font-weight: 400;
          line-height: 1.5rem /* 24/16 */;
        }
      }
    }
  }
}
</style>
