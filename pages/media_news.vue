<template>
  <div class="page-content-wrapper">
    <div class="media-news-container">
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
          {{ checkDetailsText }}
        </div>
      </section>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import CommonNavTab from '@/components/CommonNavTab.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import NewsCard from '@/components/news/NewsCard.vue'

export default {
  name: 'MediaNewsPage',
  components: {
    CommonNavTab,
    CommonFooter,
    NewsCard
  },
  layout: 'default',
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
      checkDetailsText: '查看详情'
    }
  },
  created() {

  },
  methods: {
    getActiveNewsTabIndex(index) {
      this.activeNewsTabIndex = index;
    }
  }
}
</script>
<style lang="scss" scoped>
.media-news-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  }
}
</style>
