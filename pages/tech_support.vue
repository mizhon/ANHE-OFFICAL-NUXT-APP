<template>
  <div class="page-content-wrapper">
    <div class="tech-support-page">
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="techSupportActiveTabIndex" @get-tab-index="getActiveTechSupportTabIndex"  />
        </section>
        <section class="tech-support-section">
          <div class="tech-support__header">

          </div>
          <div class="tech-support__list">

          </div>
        </section>
      </div>
      <div class="mobile-only"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'TechSupport',
  layout: 'normal',
  data() {
    return {
      techSupportActiveTabIndex: 0,
      headerBgImg: require(`~/static/imgs/tech/tech_header_bg_img.png`),
      btnText: '查看详情',
      tabs: [
        {
          id: 0,
          label: '产品资料',
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
      // tabs: [
      //   {
      //     id: 0,
      //     label: '学术研讨',
      //     list: [
      //       {
      //         id: '0-1',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040441000, // 需转换为年份 & 月日
      //       },
      //       {
      //         id: '0-2',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040182000, // 需转换为年份 & 月日
      //       },
      //       {
      //         id: '0-3',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040182000, // 需转换为年份 & 月日
      //       }
      //     ]
      //   },
      //   {
      //     id: 1,
      //     label: '产品笔记',
      //     list: [
      //       {
      //         id: '1-1',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040441000, // 需转换为年份 & 月日
      //       },
      //       {
      //         id: '1-2',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040182000, // 需转换为年份 & 月日
      //       },
      //       {
      //         id: '1-3',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040182000, // 需转换为年份 & 月日
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     label: '前沿动态',
      //     list: [
      //       {
      //         id: '2-1',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040441000, // 需转换为年份 & 月日
      //       },
      //       {
      //         id: '2-2',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040182000, // 需转换为年份 & 月日
      //       },
      //       {
      //         id: '2-3',
      //         coverImg: '',
      //         videoTitle: '视频标题文字',
      //         videoDesc: `此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字`,
      //         timestamp: 1677040182000, // 需转换为年份 & 月日
      //       }
      //     ]
      //   }
      // ]
    }
  },
  created() {},
  methods: {
    getActiveTechSupportTabIndex() {

    }
  }
}
</script>
<style lang="scss" scoped>
.tech-support-page {
  padding-top: 60px;
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
        &__header {
          // background-image: url(`~/static/imgs/tech/tech_header_bg_img.png`);
        }

        &__list {

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

  .tech-support-page {
    .mobile-only {

    }
  }
}
</style>
