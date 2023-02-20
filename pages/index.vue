<template>
  <div class="page-content-wrapper">
    <section class="index-page">
      <!-- Banner 部分 -->
      <div class="main-banner">
        <!-- Banner主图（走马灯效果） -->
        <el-carousel height="400px" direction="horizontal" :autoplay="true" arrow="never">
          <el-carousel-item v-for="img in banner.imgs" :key="img.id">
            <img :src="img.src" alt="" width="100%" height="100%" />
          </el-carousel-item>
        </el-carousel>
        <div class="banner-info-container">
          <div class="banner-title">
            <div class="main">{{ banner.mainText }}</div>
            <div class="decorator">
              <img :src="banner.tranglePath" alt="" />
            </div>
            <div class="sub">{{ banner.subText }}</div>
          </div>
          <div class="banner-desc">
            <span>{{ banner.desc1 }}</span>
            <span>{{ banner.desc2 }}</span>
            <span>{{ banner.desc3 }}</span>
          </div>
        </div>
        <div class="pull-down">
          <div class="pull-down__button" @click="pullDown">
            <img :src="banner.pulldownIcon" alt="" />
            <span>{{ banner.pulldownText }}</span>
          </div>
         </div>
      </div>
      <!-- 信息动态 -->
      <div class="news-section">
        <span>{{ headInfoTitle }}</span>
        <!-- PC端展示 -->
        <div ref="newsRef" class="pc-card-container">
          <div class="news-info-container">
            <div v-for="(newsCard, idx) in newsList" :key="idx" class="card-item">
              <div :class="[idx%2 === 0 ? 'card' : 'card reverse']">
                <div class="info-content">
                  <div class="title">{{ newsCard.title }}</div>
                  <div class="subtitle">{{ newsCard.subTitle }}</div>
                  <div class="summary">{{ newsCard.summary }}</div>
                  <div class="detail-btn">
                    <button @click="checkDetails(newsCard)">{{ infoBtnText }}</button>
                  </div>
                </div>
                <img :src="newsCard.img" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- mobile端展示 -->
        <div v-for="(cardInfo, index) in newsList" :key="index" class="news-card-item">
          <InformationCard :info="cardInfo" @goto="checkDetails(cardInfo)" />
        </div>
      </div>
      <!-- 产品展示 -->
      <div class="product-section">
        <span>{{ headProductTitle }}</span>
        <!-- PC端展示 -->
        <div ref="productRef" class="pc-card-container">
          <ProductSlide :list="productsList" />
        </div>
        <!-- mobile端展示 -->
        <div v-for="(product, index) in productsList" :key="index" class="product-card-item">
          <ProductCard :product="product" />
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '@/components/common/AppFooter.vue'
import InformationCard from '~/components/index/InformationCard.vue';
import ProductCard from '~/components/index/ProductCard.vue';
import ProductSlide from '~/components/index/ProductSlide.vue';

export default {
  name: 'IndexPage',
  components: {
    AppFooter,
    InformationCard,
    ProductCard,
    ProductSlide
  },
  layout: 'normal',
  data() {
    return {
      banner: {
        imgs: [
          { id: 0, src: '/imgs/index/banner_img_1.png' },
          { id: 1, src: '/imgs/index/banner_img_2.png' },
          { id: 2, src: '/imgs/index/banner_img_3.png' }
        ],
        tranglePath: `/imgs/index/banner-trangle.svg`,
        pulldownIcon: `/icons/pulldown.svg`,
        pulldownText: `向下滑动`,
        mainText: `安禾`,
        subText: `科学仪器`,
        desc1: `稀释制冷剂`,
        desc2: `扫描探针显微镜`,
        desc3: `多功能物理特性测量系统`,
        
      },
      headInfoTitle: '信息动态',
      newsList: [
        {
          title: '新闻动态',
          subTitle: '新闻动态最新信息标题文字占位长度',
          summary: '新闻内容详情正文文字占位新闻内容详情正文文字 占位新闻内容详情正文文字',
          img: '/imgs/index/news-img.png',
          path: '',
        },
        {
          title: '产品动态',
          subTitle: '产品动态最新信息标题文字占位长度',
          summary: '产品内容详情正文文字占位新闻内容详情正文文字 占位产品内容详情正文文字',
          img: '/imgs/index/news-img.png',
          path: '',
        },
        {
          title: '研究动态',
          subTitle: '研究动态最新信息标题文字占位长度',
          summary: '研究内容详情正文文字占位研究内容详情正文文字 占位研究内容详情正文文字',
          img: '/imgs/index/news-img.png',
          path: '',
        }
      ],
      infoBtnText: '查看详情',
      headProductTitle: '产品展示',
      productsList: [
        {
          title: '稀释制冷剂',
          img: '/imgs/index/product_show_img_01.png',
        },
        {
          title: '扫描探针显微镜',
          img: '/imgs/index/product_show_img_02.png',
        },
        {
          title: '多功能物理特性测量系统',
          img: '/imgs/index/product_show_img_03.png',
        }
      ],
    }
  },
  computed: {
    currentPageWidth() {
      return window.innerWidth;
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('--->', this.currentPageWidth);
    // eslint-disable-next-line no-console
    console.log('--->', this.$refs.newsRef.clientWidth);
    
    
  },
  destroyed() {
    window.onresize = null;
  },
  methods: {
    init() {

    },
    pullDown() {
      // todo
      // eslint-disable-next-line no-console
      console.log('pull down testing ...')
    },
    checkDetails(card) {
      // todo
      // eslint-disable-next-line no-console
      console.log('handle detail path redirect ...', card)
    }
  }
}
</script>
<style lang="scss" scoped>
.index-page {
  .main-banner {
    position: relative;
    top: 60px;
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .banner-info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      bottom: 340px;
      color: $white;
      font-size: 80px;
      z-index: 99;
      
      .banner-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 40px;

        .decorator {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 15px;
        }
      }
      .banner-desc {
        color: $white;
        font-weight: 300;
        line-height: 30px;
        font-size: 20px;
        padding-bottom: 24px;

        span {
          padding: 0 10px;
        }
      }
    }

    .pull-down {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      bottom: 300px;
      z-index: 99;

      &__button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 36px;
          height: 36px;
          cursor: pointer;
        }
        span {
          color: $white;
          font-size: 16px;
          padding-top: 15px;
          cursor: pointer;
        }
      }
    }
  }

  .news-section, .product-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -120px;
    span {
      font-size: 38px;
      color: $primaryText;
    }
  }
}

// PC端样式
@media only screen and (min-width: 769px) {
  .index-page {
    .news-section {
      position: relative;
      top: -120px;
      span {
        padding-bottom: 30px;
      }
      .pc-card-container {
        .news-info-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 80px;
          .card-item {
            max-width: 400px;
            min-width: 200px;
            .card {
              display: flex;
              flex-direction: column;
              padding: 10px 5px;

              .info-content {
                background-color: #f6f8fe;
                .title {
                  padding: 30px 20px 15px 20px;
                  font-size: 22px;
                  font-weight: 500;
                }
                .subtitle {
                  padding: 10px 20px;
                  font-size: 18px;
                  font-weight: 400;
                }
                .summary {
                  padding: 5px 20px;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 20px;
                  color: $secondaryText;
                }
                .detail-btn {
                  padding: 10px 20px 25px 20px;
                  button {
                    padding: 12px 42px;
                    border: 1px solid transparent;
                    color: $menuActiveText;
                    background-color: $btnBackgroundColor;
                    font-size: 16px;
                    font-weight: 400;
                    &:hover {
                      cursor: pointer;
                    }
                  }
                }
              }
              .info-content:hover {
                background-color: $black;
                .title, .subtitle, .summary {
                  color: $white;
                }
                .detail-btn {
                  button {
                    color: $white;
                    background-color: $black;
                    border: 1px solid $white;
                  }
                }
              }

              img {
                width: 100%;
                height: 100%;
              }

              // &:hover {
              //   .info-content {
              //     background: $black;
              //     color: $white;
              //   }

              //   .detail-btn {
              //     button {
              //       color: $white;
              //       background-color: $black;
              //       border: 1px solid $white;
              //     }
              //   }
              // }
            }
            .reverse {
              display: flex;
              flex-direction: column-reverse;
              padding: 10px 5px;
            }
          }
        }
      }

      .news-card-item {
        display: none !important;
      }
    }

    .product-section {
      span {
        padding-bottom: 30px;
      }

      .product-card-item {
        display: none !important;
      }
    }
  }
}
// 移动端样式
@media only screen and (max-width: 768px) {
  .index-page {
    background: #eee;

    .main-banner {
      .banner-info-container {
        font-size: 36px;
        .decorator {
          display: none !important;
        }
        .banner-desc {
          font-size: 14px;
          font-weight: 400;
          span {
            padding: 0 5px;
          }
        }
      }

      .pull-down {
        bottom: 240px;
        img {
          width: 28px;
          height: 28px;
        }
        span {
          font-size: 12px;
        }
      }
    }
    .news-section, .product-section {
      .pc-card-container {
        display: none !important;
      }
    }

    .news-section, .product-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      top: -80px;
      overflow: hidden; // 防止图片过大撑开父元素
      span {
        font-size: 32px;
        padding: 30px 0 20px 0;
      }

      .news-card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: 20px;

          &__image {
            img {
              width: 100%;
              height: 100%;
            }
          }

          &__info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            .title {
              padding: 30px 20px 15px 20px;
              font-size: 22px;
              font-weight: 500;
            }
            .sub-title {
              padding: 10px 20px;
              font-size: 18px;
              font-weight: 400;
            }

            .summary {
              padding: 0 20px;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              color: $secondaryText;
            }
          }
        }
      }
    }
  }
}
</style>
