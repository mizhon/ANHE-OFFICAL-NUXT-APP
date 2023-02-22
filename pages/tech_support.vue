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
      <div class="mobile-only"></div>
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
    }
  },
  created() {

  },
  methods: {
    getActiveTechSupportTabIndex(idx) {
      // eslint-disable-next-line no-console
      console.log('当前tab：', idx)
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

    }
  }
}
</style>
