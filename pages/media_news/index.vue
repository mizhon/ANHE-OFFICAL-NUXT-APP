<template>
  <div class="page-content-wrapper">
    <div class="media-news-page">
      <!-- PC端 -->
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="newsActiveTabIndex" @get-tab-index="getActiveNewsTabIndex"  />
        </section>
        <section class="news-section">
          <div class="news-list">
            <div v-for="(newsItem, idx) in newsList" :key="idx" class="card-wrapper">
              <NewsCard :info="newsItem" @click="checkDetailInfo(newsItem)" />
            </div>
          </div>
          <div class="check-details">
            <div class="detail-btn">
              <span>
                {{ checkDetailsText }}
              </span>
              <span>
                <i class="el-icon-arrow-down"></i>
              </span>
            </div>
          </div>
        </section>
      </div>
      <!-- 移动端 -->
      <div class="mobile-only">
        <div class="m-news-banner-container">
          <img :src="newsBanner.img" alt="" />
          <div class="banner-container">
            <div class="title">{{ newsBanner.title }}</div>
            <div class="sub-title">{{ newsBanner.subTitle }}</div>
          </div>
        </div>
        <div class="m-news-tabs-container">
          <el-tabs v-model="mobileNewsActiveTabIndex" @tab-click="handleTabClick">
            <el-tab-pane v-for="(tab, id) in tabs" :key="id" :label="tab.label" :name="tab.name">
              <div class="tab-content-list">
                <div v-for="(item, idx) in tab.list" :key="idx" class="tab-item" @click="checkDetailInfo(item)">
                  <div class="picture">
                    <img :src="item.img" alt="" />
                  </div>
                  <div class="title">
                    {{ item.title }}
                  </div>
                </div>
              </div>
              <!-- tab.list > 3 显示 -->
            </el-tab-pane>
          </el-tabs>

        </div>
      </div>
    </div>
    <AppFooter :position="position" />
  </div>
</template>
<script>
import CommonNavTab from '@/components/CommonNavTab.vue';
import NewsCard from '@/components/news/NewsCard.vue';
import AppFooter from '@/components/common/AppFooter.vue';

export default {
  name: 'MediaNewsPage',
  components: {
    CommonNavTab,
    NewsCard,
    AppFooter,
  },
  layout: 'normal',
  data() {
    return {
      newsBanner: {
        img: `/imgs/news/m_news_banner_img.png`,
        title: '新闻动态',
        subTitle: '最新咨询动态展示'
      },
      newsActiveTabIndex: 0, // 默认激活的tab标签为0
      mobileNewsActiveTabIndex: '0', // 移动端默认激活的tab页面
      tabs: [
        {
          id: 0,
          label: '公司新闻',
          name: '0',
          list: [
            {
              id: 0,
              img: `/imgs/news/m_img_01.png`,
              title: '公司新闻标题文字占位区域标题文字占位区域1111',
              uploadTimeText: '上传时间：',
              timestamp: '2023-02-21',
              content: `article 123123132 内容文字占位区域内容文字占位区域内容文字占位区域内
                容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占
                位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内
                容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域`,
              footer: {
                next: '阅读下一篇',
                nextArticleTitle: '快使用双节棍，嚯嚯哈嘿'
              }
            },
            {
              id: 1,
              img: `/imgs/news/m_img_02.png`,
              title: '公司新闻222',
              uploadTimeText: '上传时间：',
              timestamp: '2023-02-21',
              content: `article 123123132 内容文字占位区域内容文字占位区域内容文字占位区域内
                容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占
                位区域内容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域内
                容文字占位区域内容文字占位区域内容文字占位区域内容文字占位区域`,
              footer: {
                next: '阅读下一篇',
                nextArticleTitle: '热成像仪在XX领域的使用'
              }
            },
            {
              id: 2,
              img: `/imgs/news/m_img_03.png`,
              title: '公司新闻标题文字占位区域标题文字占位区域...'
            },
          ]
        },
        {
          id: 1,
          label: '媒体报道',
          name: '1',
          list: [
            {
              id: 3,
              img: `/imgs/news/m_img_02.png`,
              title: '公司新闻标题文字占位区域标题文字占位区域...'
            },
            {
              id: 4,
              img: `/imgs/news/m_img_01.png`,
              title: '公司新闻标题文字占位区域标题文字占位区域...'
            },
          ]
        },
        {
          id: 2,
          label: '学术动态',
          name: '2',
          list: [
            {
              id: 5,
              img: `/imgs/news/m_img_02.png`,
              title: '公司新闻标题文字占位区域标题文字占位区域...'
            }
          ]
        }
      ],
      newsList: [
        {
          id: 0,
          img: `/imgs/news/news_card1.png`,
          title: `标题文字测试1`,
          summary: `此处添加说明性文字此处添加说明性文字此处添加说明性文字`
        },
        {
          id: 1,
          img: `/imgs/news/news_card2.png`,
          title: `标题文字测试2`,
          summary: `此处添加说明性文字此处添加说明性文字此处添加说明性文字`
        },
        {
          id: 2,
          img: `/imgs/news/news_card3.png`,
          title: `标题文字测试3`,
          summary: `此处添加说明性文字此处添加说明性文字此处添加说明性文字`
        }
      ],
      checkDetailsText: '查看详情',
      position: 'relative', // 'fixed' // 监听页面尺寸以改变position设置
    }
  },
  methods: {
    getActiveNewsTabIndex(index) {
      this.newsActiveTabIndex = index;
      this.mobileNewsActiveTabIndex = String(index);
    },
    handleTabClick(tab) {
      // eslint-disable-next-line no-console
      console.log('click tab: --->', tab)
    },
    checkDetailInfo(item) {
      // eslint-disable-next-line no-console
      console.log('点击查看新闻详情: --->', item)
      this.$router.push({
        path: `/media_news/${item.id}`,
        params: item
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.img {
  max-width: 100%;
  max-height: 100%;
}

.media-news-page {
  padding-top: 60px;
  ::v-deep .el-tabs__item {
    height: 48px;
    font-size: 18px;
  }
  ::v-deep .el-tabs__item.is-active {
    color: #0053A1;
  }
  ::v-deep .el-tabs__active-bar {
    background-color: #0053A1;
    width: 68px;
    transform: translateX(216px);
  }
  ::v-deep .el-tabs__nav-scroll {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin-left: 20px;
  }
}

// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
  .media-news-page {
    .pc-only {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .tab-section {
        height: 100vh;
      }
      .news-section {
        width: 50%;
        height: 100vh;
        padding: 0 20px 20px 20px;
        .news-list {
          display: flex;
          // margin: 0 10px 10px 10px;
        }
        .check-details {
          display: flex;
          justify-content: center;
          align-items: center;
          .detail-btn {
            margin: 60px 5px 40px 5px;
            span {
              padding: 5px;
              color: #0053a1;
              cursor: pointer;
              font-weight: 500;
            }
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

  .media-news-page {
    .mobile-only {
      // height: 100vh;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .m-news-banner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
        .banner-container {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #333333;
          padding: 10px;
          width: 80%;
          .title {
            font-size: 48px;
            font-weight: 500;
          }
          .sub-title {
            font-size: 24px;
            font-weight: 400;
            padding: 20px 0;
          }
        }
      }

      .m-news-tabs-container {
        .tab-content-list {
          .tab-item {
            display: flex;
            align-items: flex-start;
            padding-bottom: 20px;
            margin: 5px 20px 20px 20px;
            border-bottom: 1px solid #eee;
            .picture {
              margin: 5px 0;
              width: 40%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .title {
              width: 60%;
              padding: 10px 10px 10px 20px;
            }
          }
        }
      }
    }
  }
}
</style>
