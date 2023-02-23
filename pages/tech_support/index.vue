<template>
  <div class="page-content-wrapper">
    <div class="tech-support-page">
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="techSupportActiveTabIndex" @get-tab-index="getActiveTechSupportTabIndex"  />
        </section>
        <section class="tech-support-section">
          <TechSupportCard :header-text="headerText">
            <component :is="comp" />
          </TechSupportCard>
        </section>
      </div>
      <!-- 移动端显示 -->
      <div class="mobile-only">
        <div class="m-tech-support-container">
          <img :src="mHeaderImg" alt="">
          <div class="banner-container">
            <div class="title">{{ mHeaderTitle }}</div>
            <div class="sub-title">{{ mHeaderSubTitle }}</div>
          </div>
        </div>
        <div class="m-tech-support-tab-container">
          <el-tabs v-model="mobileTechSupportActiveTabIndex" @tab-click="handleTabClick">
            <el-tab-pane v-for="(tab, id) in tabs" :key="id" :label="tab.label" :name="tab.name">
              <component :is="comp" />
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
import TechSupportCard from '~/components/tech/TechSupportCard.vue';
import TechSupportProductData from '~/components/tech/TechSupportProductData.vue';
import TechSupportSoftware from '~/components/tech/TechSupportSoftware.vue';
import TechSupportCommonIssue from '~/components/tech/TechSupportCommonIssue.vue';

export default {
  name: 'TechSupport',
  components: {
    AppFooter,
    TechSupportCard,
    TechSupportProductData,
    TechSupportSoftware,
    TechSupportCommonIssue,
  },
  layout: 'normal',
  data() {
    return {
      techSupportActiveTabIndex: 0,
      mobileTechSupportActiveTabIndex: '0',
      headerBgImg: require(`~/static/imgs/tech/tech_header_bg_img.png`),
      btnText: '查看详情',
      headerText: '产品资料展示', // 默认显示第一个tab
      tabHeadersText: [
        '产品资料展示',
        '安禾软件下载',
        '常见问题',
      ],
      comp: 'TechSupportProductData', // 默认组件
      tabs: [
        {
          id: 0,
          label: '产品资料',
          name: '0',
          headerText: '产品资料展示',
          list: [
            {
              id: '0-1',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040441000, // 需转换为年份 & 月日
            },
            {
              id: '0-2',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040182000, // 需转换为年份 & 月日
            },
            {
              id: '0-3',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040182000, // 需转换为年份 & 月日
            }
          ]
        },
        {
          id: 1,
          label: '软件下载',
          name: '1',
          list: [
            {
              id: '1-1',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040441000, // 需转换为年份 & 月日
            },
            {
              id: '1-2',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040182000, // 需转换为年份 & 月日
            },
            {
              id: '1-3',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040182000, // 需转换为年份 & 月日
            }
          ]
        },
        {
          id: 2,
          label: '常见问题',
          name: '2',
          list: [
            {
              id: '2-1',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040441000, // 需转换为年份 & 月日
            },
            {
              id: '2-2',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040182000, // 需转换为年份 & 月日
            },
            {
              id: '2-3',
              coverImg: '',
              videoTitle: '视频标题文字',
              videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
              timestamp: 1677040182000, // 需转换为年份 & 月日
            }
          ]
        }
      ],
      // 移动端信息
      mHeaderImg: `/imgs/tech/m_tech_support_header_img.png`,
      mHeaderTitle: '技术支持',
      mHeaderSubTitle: '安禾资源下载'
    }
  },
  methods: {
    getActiveTechSupportTabIndex(idx) {
      this.headerText = this.tabHeadersText[idx];

      switch(idx) {
        case 0:
          this.comp = 'TechSupportProductData';
          break;
        case 1:
          this.comp = 'TechSupportSoftware';
          break;
        case 2:
          this.comp = 'TechSupportCommonIssue';
          break;
        default:
          break;
      }
    },
    handleTabClick(tab) {
      // eslint-disable-next-line no-console
      console.log('[tech support] click tab: --->', tab.index);
      this.getActiveTechSupportTabIndex(parseInt(tab.index, 10));
    }
  }
}
</script>
<style lang="scss" scoped>
.tech-support-page {
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
  .tech-support-page {
    .pc-only {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .tab-section {
        height: 100vh;
      }
      .tech-support-section {
        width: 50%;
        height: 100vh;
        padding: 20px 20px 0 20px;
      }
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .pc-only {
    display: none !important;
  }

  .tech-support-page {
    .mobile-only {
      .m-tech-support-container {
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
