<template>
  <div class="page-content-wrapper">
    <div class="tech-support-detail-page">
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="techSupportActiveTabIndex" @get-tab-index="getActiveTechSupportTabIndex"  />
        </section>
        <section class="tech-support-section">
          <!-- <TechSupportCard :header-text="headerText"></TechSupportCard> -->
          <div class="tech-support__header">
            <div class="header-img">
              <img :src="headerBgImg" alt="" />
            </div>
            <div class="header-desc" @click="goBack">{{ headerText }}</div>
          </div>
          <div class="tech-support__detail-content">
            <div class="breadcrumb">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <!-- <el-breadcrumb-item v-for="(b, i) in breadcrumbs" :key="i" :to="{ path: b.path}"> -->
                <el-breadcrumb-item v-for="(b, i) in breadcrumbs" :key="i">
                  {{ b.label }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="detail-info-container">
              <div class="title">
                {{ issue.title }}
              </div>
              <div class="detail-text">
                <span>{{ issue.text1 }}</span>
                <div style="padding: 20px 0;">
                  <img :src="issue.image" alt="">
                </div>
                <span>{{ issue.text2 }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="mobile-only">
        <div class="m-tech-support-detail-container">
          <img :src="mHeaderImg" alt="">
        </div>
        <div class="m-tech-support-detail-content">
          <div class="header">
            <div class="title">
              {{ issue.title }}
            </div>
            <div class="breadcrumb">
              <el-breadcrumb separator="-">
                  <el-breadcrumb-item v-for="(b, i) in breadcrumbs" :key="i">
                    {{ b.label }}
                  </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
          </div>
          <div class="content">
            <div class="detail-text">
              <span>{{ issue.text1 }}</span>
              <div class="detail-img">
                <img :src="issue.image" alt="">
              </div>
              <span>{{ issue.text2 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '~/components/common/AppFooter.vue';

export default {
  name: 'TechSupportDetailPage',
  components: {
    AppFooter
  },
  layout: 'normal',
  data() {
    return {
      techSupportActiveTabIndex: 2, // 默认激活Tab为[常见问题]
      headerText: '返回上一页',
      headerBgImg: require(`~/static/imgs/tech/tech_header_bg_img.png`),
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
      breadcrumbs: [
        { id: 0, label: '当前位置', path: '' },
        { id: 1, label: '常见问题', path: '' },
        { id: 2, label: '01. 问题', path: '' }
      ],
      issue: {
        title: '01.问题的标题文字占位区域问题的标题文字占位区域',
        text1: '问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回',
        image: '/imgs/tech/img-01.png',
        text2: '问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域问题的回答内容文字占位区域'
      },
      // 移动端信息
      mHeaderImg: `/imgs/tech/m_tech_support_detail_header_img.png`,
    }
  },
  methods: {
    getActiveTechSupportTabIndex(idx) {
      // eslint-disable-next-line no-console
      console.log('[tech support detail page]: --->', idx)
      // this.headerText = this.tabHeadersText[idx];
      // switch(idx) {
      //   case 0:
      //     this.comp = 'TechSupportProductData';
      //     break;
      //   case 1:
      //     this.comp = 'TechSupportSoftware';
      //     break;
      //   case 2:
      //     this.comp = 'TechSupportCommonIssue';
      //     break;
      //   default:
      //     break;
      // }
    },
    goBack() {
      this.$router.push({
        // name: 'tech_support',
        // params: { activetab: 2 }
        path: '/tech_support'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tech-support-detail-page {
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

  .tech-support-detail-page {
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
        overflow-y: auto;
        .tech-support__header {
          position: relative;
          text-align: center;
          .header-img {
            img {
              width: 100%;
              height: 100%;
            }
          }
          .header-desc {
            position: absolute;
            top: 50%;
            left: 30px;
            transform: translate(0, -50%);
            font-size: 20px;
            font-weight: 400;
            color: white;
            cursor: pointer;
          }
        }

        .tech-support__detail-content {
          padding: 20px 30px;

          .detail-info-container {
            padding: 30px 0;
            .title {
              padding-bottom: 30px;
              font-size: 18px;
              font-weight: 500;
              color: #333333;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .detail-text {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: justify; // 文字两端对齐
              font-size: 14px;
              font-weight: 400;
              color: #333333;
              line-height: 21px;
            }
          }
        }
      }
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {

  .el-breadcrumb {
    font-size: 24px;
  }

  .pc-only {
    display: none !important;
  }

  .tech-support-detail-page {
    .mobile-only {
      .m-tech-support-detail-container {}
      .m-tech-support-detail-content {
        .header {
          margin-bottom: 20px;
          border-bottom: 1px solid #d6d6d6;
          .title {
            padding: 40px;
            text-align: justify;
            color: #333;
            font-size: 38px;
            font-weight: 500;
          }

          .breadcrumb {
            padding: 0 40px 40px 40px;
          }
        }
        .content {
          .detail-text {
            padding: 40px;
            font-size: 32px;
            line-height: 48px;
            color: #666;

            .detail-img {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 40px 0;
            }
          }
        }
      }
    }
  }
}
</style>
