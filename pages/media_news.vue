<template>
  <div class="page-content-wrapper">
    <div class="media-news-container">
      <!-- PC端 -->
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="activeNewsTabIndex" @get-tab-index="getActiveNewsTabIndex"  />
        </section>
        <section class="news-section">
          <div class="news-list">
            <div v-for="(newsItem, idx) in newsList" :key="idx" class="card-wrapper">
              <NewsCard :info="newsItem" />
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
        <!-- TODO: 添加代码 -->
      </div>
    </div>
    <AppFooter :position="position" />
  </div>
</template>
<script>
import CommonNavTab from '@/components/CommonNavTab.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import NewsCard from '@/components/news/NewsCard.vue'

export default {
  name: 'MediaNewsPage',
  components: {
    CommonNavTab,
    AppFooter,
    NewsCard
  },
  layout: 'normal',
  data() {
    return {
      activeNewsTabIndex: 0, // 默认激活的tab标签为0
      tabs: [
        { id: 0, label: '公司新闻' },
        { id: 1, label: '媒体报道' },
        { id: 2, label: '学术动态' }
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
      position: 'fixed',
      activeTab: 'first'
    }
  },
  methods: {
    getActiveNewsTabIndex(index) {
      this.activeNewsTabIndex = index;
    },
    handleTabClick(tab) {
      // eslint-disable-next-line no-console
      console.log('click tab: --->', tab)
    }
  }
}
</script>
<style lang="scss" scoped>
// PC端样式
// @media only screen and ()

@media only screen and (min-width: 769px) {
  .media-news-container {
    .pc-only {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 60px;
      .tab-section {
        height: 100vh;
      }
      .news-section {
        width: 50%;
        height: 100vh;
        .news-list {
          display: flex;
          margin: 0 30px 30px 30px;
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
}
</style>
