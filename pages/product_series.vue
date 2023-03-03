<template>
  <div class="page-content-wrapper">
    <div class="product-series-page">
      <div class="pc-only">
        <section class="tab-section">
          <CommonNavTab :tabs="tabs" :active-tab="productSeriesTabIndex" @get-tab-index="getActiveProductSeriesTabIndex" />
        </section>
        <section class="product-series-section">
          <div class="img-banner">
            <img :src="productInfo.bannerImg" alt="">
          </div>
          <!-- 概况 -->
          <div class="overview-container">
            <div class="info-details">
              <div class="title">
                {{ overviewTitle }}
              </div>
              <div class="desc">
                {{ productInfo.intro }}
              </div>
              <div class="hightlight-desc">
                {{ productInfo.highLightIntro }}
              </div>
            </div>
            <ConsultCard />
          </div>
          <!-- 技术参数 -->
          <div class="overview-container">
            <div class="info-details">
              <div class="title">{{ paramTitle }}</div>
              <div class="desc">
                {{ productInfo.paramDesc }}
              </div>
            </div>
          </div>
          <!-- 部件选配 -->
          <div class="overview-container">
            <div class="info-details">
              <div class="title">{{ componentTitle }}</div>
              <div class="desc">
                {{ productInfo.componentDesc }}
              </div>
            </div>
          </div>
          <!-- 底部图片 -->
          <div class="img-footer">
            <div v-for="(imgItem, id) in productInfo.footerImgs" :key="id" class="imgs-container">
              <img :src="imgItem.path" alt="" width="100%" />
            </div>
          </div>
        </section>
      </div>
      <!-- 移动端 -->
      <div class="mobile-only">
        <div class="m-product-series-container">
          <img :src="productInfo.mHeaderImg" alt="" />
          <div class="banner-container">
            <div class="title">{{ productInfo.mHeaderTitle }}</div>
            <div class="sub-title">{{ productInfo.mHeaderSubTitle }}</div>
          </div>
        </div>
        <div class="m-product-series-tab-container">
          <el-tabs v-model="mobileProductSeriesActiveTabIndex" @tab-click="handleTabClick">
            <el-tab-pane v-for="(tab, id) in tabs" :key="id" :label="tab.label" :name="tab.name">
              <div class="tab-content-container">
                <!-- 标题 -->
                <div class="overview-container">
                  <div class="title">{{ overviewTitle }}</div>
                  <!-- 内容 -->
                  <div class="content">{{ productInfo.intro }}</div>
                  <div class="hightlight">{{ productInfo.highLightIntro }}</div>
                  <div class="illustration">
                    <img :src="productInfo.bannerImg" alt="">
                  </div>
                </div>

                <!-- 技术参数 -->
                <div class="overview-container">
                  <div class="title">{{ paramTitle }}</div>
                  <div class="desc">
                    {{ productInfo.paramDesc }}
                  </div>
                </div>
                <!-- 部件选配 -->
                <div class="overview-container">
                  <div class="title">{{ componentTitle }}</div>
                  <div class="desc">
                    {{ productInfo.componentDesc }}
                  </div>
                </div>
                <!-- 底部图片 -->
                <div class="img-footer">
                  <div v-for="(imgItem, idx) in productInfo.footerImgs" :key="idx" class="imgs-container">
                    <img :src="imgItem.path" alt="" width="100%" />
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import AppFooter from '@/components/common/AppFooter.vue';
import ConsultCard from '@/components/product/ConsultCard.vue';

export default {
  name: 'ProductSeriesPage',
  components: {
    AppFooter,
    ConsultCard
  },
  layout: 'normal',
  data() {
    return {
      activeTabIndex: 0, // 默认激活的Tab索引
      productSeriesTabIndex: 0,
      mobileProductSeriesActiveTabIndex: '0', // 移动端默认激活的tab页面
      overviewTitle: '概况介绍',
      paramTitle: '技术参数',
      componentTitle: '部件选配',
      tabs: [
        {
          id: 0,
          name: '0',
          label: '稀释制冷机'
        },
        {
          id: 1,
          name: '1',
          label: '原子粒显微镜'
        },
        {
          id: 2,
          name: '2',
          label: '综合实验平台'
        }
      ],
      productInfo: {
        bannerImg: `/imgs/product/banner_img.png`,
        intro: `第二次量子革命意味着人们可以直接对量子波函数进行操作。为了保证波函数的相干性，操作往往需要在极低温环境下进行。4K（-269℃）以下温区的极低温仪器设备对于前沿科学研究、技术应用、国家安全具有重要意义。随着第二次量子革命的都来，极低温仪器设备的市场面临爆发式增长。\n\n在可以预见的未来稀释制冷机是实现超导量子计算低温环境的唯一选择。可以达到10mK温度的稀释制冷机是现代量子科学研究与量子技术发展的核心设备，广泛应用于量子材料的物性研究、量子计算的探索、量子传感器的应用等领域。国内对稀释制冷机的需求正在迅速增长，大约占到了全球份额的30%，每年销售额约2亿元。美国的Form Factor、英国的Oxford Instruments、芬兰的Bluefors占据了稀释制冷机的绝大部份市场份额，并对中国的核心单位禁运。`,
        highLightIntro:`经过团队多年努力，安禾仪器已经陈工研发了代表极底温技术最高水平的稀释制冷机，突破了mK级制冷关键技术，打破国外垄断。`,
        paramDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
        componentDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
        footerImgs: [
          { id: 0, path: `/imgs/product/bottom_img_1.png` },
          { id: 1, path: `/imgs/product/bottom_img_2.png` },
          { id: 2, path: `/imgs/product/bottom_img_3.png` }
        ],
        // 移动端信息
        mHeaderImg: `/imgs/product/m_header_img.png`,
        mHeaderTitle: '稀释制冷机',
        mHeaderSubTitle: '突破了mK级制冷关键技术'
      },

    }
  },
  computed: {

  },
  methods: {
    getActiveProductSeriesTabIndex(index) {
      // eslint-disable-next-line no-console
      console.log('[product series] --- current tab --->', index);
    },
    handleTabClick(tab) {
      // eslint-disable-next-line no-console
      console.log('[product series] click tab: --->', tab)
    }
  }
}
</script>
<style lang="scss" scoped>
.product-series-page {
  padding-top: 60px;
  img {
    max-width: 100%;
    max-height: 100%;
  }

  ::v-deep .el-tabs__item {
    height: 48px;
    font-size: 16px;
    font-weight: 400;
    color: #666666;
  }
  ::v-deep .el-tabs__item.is-active {
    color: #0053A1;
    font-weight: 500;
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

@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }

  .product-series-page {
    .pc-only {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .tab-section {
        height: 100vh;
      }
      .product-series-section {
        width: 50%;
        height: 100vh;
        padding: 20px 20px 0 20px;
        overflow-y: auto;
        .img-banner {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .overview-container {
          display: flex;
          padding: 25px 0 5px 15px;
          .info-details {
            flex-grow: 1;
            font-size: 14px;
            .title {
              padding: 20px 10px 0 10px;
              font-size: 24px;
              font-weight: 500;
              color: $primaryText;
            }
            .desc, .hightlight-desc {
              padding: 0 10px;
              line-height: 24px;
              text-align: justify; // 文字两端对齐
              color: $primaryText;
              white-space: pre-line;
            }
            .hightlight-desc {
              color: $menuActiveText;
              font-weight: 500;
            }
          }
        }
      }

      .img-footer {
        display: flex;
        padding: 15px 0 30px 0;
        .imgs-container {
          padding: 5px;
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

  .product-series-page {
    .mobile-only {
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .m-product-series-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.25rem /* 20/16 */;
        .banner-container {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #333333;
          padding: .625rem /* 10/16 */;
          width: 80%;
          .title {
            font-size: 1.6875rem /* 27/16 */;
            font-weight: 500;
          }
          .sub-title {
            font-size: .9375rem /* 15/16 */;
            font-weight: 400;
            padding: 20px 0;
          }
        }
      }
      .m-product-series-tab-container {
        .tab-content-container {
          padding-bottom: 80px;
          .overview-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .title {
              font-size: 1.625rem /* 26/16 */;
              font-weight: 500;
              color: #333333;
              padding: 60px 0 20px 0;
            }
            .content, .hightlight {
              font-size: 1rem;
              font-weight: 400;
              color: #333333;
              line-height: 1.5rem /* 24/16 */;
              // padding: 20px 40px;
              padding: 1.25rem /* 20/16 */1.75rem /* 28/16 */;
              text-align: justify; // 文字两端对齐
            }
            .desc {
              padding: .625rem /* 10/16 */1.75rem /* 28/16 */;
              // line-height: 1.5rem /* 24/16 */;
              text-align: justify; // 文字两端对齐
              color: $primaryText;
              white-space: pre-line;
              font-size: 1rem;
            }
            .illustration {
              padding: 30px 40px 10px 40px;
            }
          }
          .img-footer {
            display: flex;
            padding: 30px;
            .imgs-container {
              padding: 40px 10px 60px 10px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
