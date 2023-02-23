<template>
  <div class="page-content-wrapper">
    <div class="knowledge-center-page">
      <!-- PC端显示 -->
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="activeKnowledgeTabIndex" @get-tab-index="getActiveKnowledgeTabIndex" />
        </section>
        <section class="knowledge-center-section">
          <component :is="currentComp" v-bind="currentProps" />
        </section>
      </div>
      <!-- 移动端显示 -->
      <div class="mobile-only">
        <div class="m-knowledge-center-container">
          <img :src="mHeaderImg" alt="">
          <div class="banner-container">
            <div class="title">{{ mHeaderTitle }}</div>
            <div class="sub-title">{{ mHeaderSubTitle }}</div>
          </div>
        </div>
        <div class="m-knowledge-center-tab-container">
          <el-tabs v-model="mknowledgeCenterActiveTabIndex" @tab-click="handleTabClick">
            <el-tab-pane v-for="(tab, id) in tabs" :key="id" :label="tab.label" :name="tab.name">
              <component :is="currentComp" v-bind="currentProps" />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '~/components/common/AppFooter.vue';
import CommonNavTab from '@/components/CommonNavTab.vue'
import KnowledgeAcademicList from '~/components/knowledge/KnowledgeAcademicList.vue';

export default {
  name: 'KnowledgeCenterPage',
  components: {
    AppFooter,
    CommonNavTab,
    KnowledgeAcademicList
  },
  layout: 'normal',
  data() {
    return {
      activeKnowledgeTabIndex: 0, // 默认激活的tab标签为0
      mknowledgeCenterActiveTabIndex: '0',
      currentComp: 'KnowledgeAcademicList',
      currentProps: [
          {
            id: 0,
            timestamp: '',
            year: '2023', // 后续直接用时间戳转换
            date: '2月4日', // 后续直接用时间戳转换
            title: '视频标题文字',
            coverImg: `/imgs/knowledge/video-cover-img-01.png`
          },
          {
            id: 1,
            timestamp: '',
            year: '2023', // 后续直接用时间戳转换
            date: '2月3日', // 后续直接用时间戳转换
            title: '视频标题文字',
            coverImg: `/imgs/knowledge/video-cover-img-02.png`
          },
          {
            id: 2,
            timestamp: '',
            year: '2023', // 后续直接用时间戳转换
            date: '2月2日', // 后续直接用时间戳转换
            title: '视频标题文字',
            coverImg: `/imgs/knowledge/video-cover-img-03.png`
          },
          {
            id: 3,
            timestamp: '',
            year: '2023', // 后续直接用时间戳转换
            date: '2月1日', // 后续直接用时间戳转换
            title: '视频标题文字',
            coverImg: `/imgs/knowledge/video-cover-img-04.png`
          }
        ],
      tabs: [
        { id: 0, label: '学术研讨', name: '0' },
        { id: 1, label: '产品笔记', name: '1' },
        { id: 2, label: '前沿动态', name: '2' }
      ],
      // 移动端信息
      mHeaderImg: `/imgs/knowledge/m-knowledge-center-header-img.png`,
      mHeaderTitle: '知识中心',
      mHeaderSubTitle: '最新资讯动态展示',
    }
  },
  computed: {},
  methods: {
    getActiveKnowledgeTabIndex(index) {
      // eslint-disable-next-line no-console
      console.log('[knowledge center] 当前tab：', index)
      this.activeKnowledgeTabIndex = index;

      switch(index) {
        case 0:
          this.currentComp = 'KnowledgeAcademicList';
          break;
        case 1:
          this.currentComp = '';
          break;
        case 2:
          this.currentComp = '';
          break;
        default:
          break;
      }

    },
    handleTabClick(tab) {
      // eslint-disable-next-line no-console
      console.log('[knowledge center] click tab: --->', tab.index);
      this.getActiveKnowledgeTabIndex(parseInt(tab.index, 10));
    }
  }
}
</script>
<style lang="scss" scoped>
.knowledge-center-page {
  padding-top: 60px;
  img {
    max-width: 100%;
    max-height: 100%;
  }

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
        overflow-y: auto;
      }
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .pc-only {
    display: none !important;
  }

  .knowledge-center-page {
    .mobile-only {
      .m-knowledge-center-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
      }
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
  }
}

</style>
