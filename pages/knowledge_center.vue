<template>
  <div class="page-content-wrapper">
    <div class="knowledge-center-page">
      <!-- PC端显示 -->
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="techSupportActiveTabIndex" @get-tab-index="getActiveKnowledgeTabIndex" />
        </section>
        <section class="knowledge-center-section"></section>
      </div>
      <!-- 移动端显示 -->
      <div class="mobile-only"></div>
    </div>
  </div>
</template>
<script>
// import CommonNavTab from '@/components/CommonNavTab.vue'

export default {
  name: 'KnowledgeCenterPage',
  components: {
    // CommonNavTab
  },
  layout: 'normal',
  data() {
    return {
      activeKnowledgeTabIndex: 0, // 默认激活的tab标签为0
      tabs: [
        { id: 0, label: '学术研讨' },
        { id: 1, label: '产品笔记' },
        { id: 2, label: '前沿动态' }
      ]
    }
  },
  methods: {
    getActiveKnowledgeTabIndex(index) {
      this.activeKnowledgeTabIndex = index;

    }
  }
}
</script>
<style lang="scss" scoped>
.knowledge-center-page {
  padding-top: 60px;
}

// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }

  .knowledge-center-page {
    .pc-only {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .tab-section {
        height: 100vh;
      }
      .knowledge-center-section {
        width: 50%;
        height: 100vh;
        padding: 20px 20px 0 20px;
      }
    }
  }
}
</style>
