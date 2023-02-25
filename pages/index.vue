<template>
  <div class="page-content-wrapper">
    <section class="index-page">
      <!-- Banner 部分 -->
      <section class="main-banner">
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
      </section>
      <section class="main-content">
        <div class="news-section">
          <span class="head-title">{{ headInfoTitle }}</span>
          <div ref="newsRef" class="news-card-container">
            <!-- PC端展示 -->
            <div class="pc-news-info-container">
              <div v-for="(newsCard, idx) in newsList" :key="idx" class="card-item">
                <div :class="[idx%2 === 0 ? 'card' : 'card reverse']">
                  <div class="info-content">
                    <div class="title">{{ newsCard.title }}</div>
                    <div class="subtitle">{{ newsCard.subTitle }}</div>
                    <div class="summary">{{ newsCard.summary }}</div>
                    <div class="detail-btn">
                      <button @click="checkNewsDetail(newsCard)">{{ infoBtnText }}</button>
                    </div>
                  </div>
                  <img :src="newsCard.img" alt="" />
                </div>
              </div>
            </div>
            <!-- mobile端展示 -->
            <div class="m-news-info-container">
              <div v-for="(cardInfo, index) in newsList" :key="index" class="m-news-card-item">
                <!-- {{ cardInfo }} -->
                <div class="info-card">
                  <div class="info-card__image">
                    <img :src="cardInfo.img" alt="">
                  </div>
                  <div class="info-card__content">
                    <div class="title">{{ cardInfo.title }}</div>
                    <div class="sub-title">{{ cardInfo.subTitle }}</div>
                    <div class="summary">{{ cardInfo.summary }}</div>
                    <div class="detail-btn">
                      <button @click="checkNewsDetail(cardInfo)">{{ infoBtnText }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 产品展示 -->
        <div class="product-section">
          <span class="head-title">{{ headProductTitle }}</span>
          <div ref="productRef" class="product-card-container">
            <!-- PC端展示 -->
            <div class="pc-product-info-container">
              <!-- 主产品展示区 -->
              <div class="main-product">
                <div class="product-img">
                  <img :src="mainProduct.img" alt="">
                </div>
                <div class="mask-cover"></div>
                <div class="title" @click="checkProductDetail()">{{ mainProduct.title }}</div>
                <div class="arrow" @click="checkProductDetail()"><i class="el-icon-right"></i></div>
              </div>
              <div class="products-list">
                <div v-for="(p, i) in productsList" :key="i" class="product">
                  <div class="product__cover" @mouseover="onMouseOver(p)">
                    <img :src="p.img" alt="">

                    <div class="p-cover-mask"></div>
                    <div class="p-cover-title">{{ p.title }}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- mobile端展示 -->
            <div class="m-product-info-container">
              <div v-for="(product, index) in productsList" :key="index" class="m-product-card-item">
                <ProductCard :product="product" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '@/components/common/AppFooter.vue'
import ProductCard from '~/components/index/ProductCard.vue';

export default {
  name: 'IndexPage',
  components: {
    AppFooter,
    ProductCard,
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
          path: '/media_news',
        },
        {
          title: '产品动态',
          subTitle: '产品动态最新信息标题文字占位长度',
          summary: '产品内容详情正文文字占位新闻内容详情正文文字 占位产品内容详情正文文字',
          img: '/imgs/index/news-img.png',
          path: '/product_series',
        },
        {
          title: '研究动态',
          subTitle: '研究动态最新信息标题文字占位长度',
          summary: '研究内容详情正文文字占位研究内容详情正文文字 占位研究内容详情正文文字',
          img: '/imgs/index/news-img.png',
          path: '/knowledge_center',
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
      // Product区域默认显示的信息内容，根据鼠标滑动到productList中的一个而改变
      mainProduct: {
        title: '稀释制冷剂',
        img: '/imgs/index/product_show_img_01.png',
      }
    }
  },
  computed: {
    currentPageWidth() {
      return window.innerWidth;
    },
  },
  // watch: {
  //   mainProduct: {
  //     immediate: true,
  //     handler(newVal, oldVal) {

  //     }
  //   }
  // },
  destroyed() {
    window.onresize = null;
  },
  methods: {
    pullDown() {
      // eslint-disable-next-line no-console
      console.log('pull down testing ...')
    },
    checkNewsDetail(news) {
      // eslint-disable-next-line no-console
      console.log('handle news detail path redirect ...', news)
      this.$router.push({
        path: news.path
      })

    },
    checkProductDetail(product) {
      // eslint-disable-next-line no-console
      console.log('handle product detail path redirect ...', product)
    },
    // onMouseEnter(p) {
    //   // eslint-disable-next-line no-console
    //   console.log('[on mouse enter] --->', p)
    // },
    onMouseOver(p) {
      // eslint-disable-next-line no-console
      console.log('[on mouse over] --->', p)
      this.mainProduct = Object.assign({}, p)
    }
  }
}
</script>
<style lang="scss" scoped>
.index-page {
  img {
    max-width: 100%;
    max-width: 100%;
  }
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
  .main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .news-section, .product-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -120px;
    .head-title {
      font-size: 38px;
      color: $primaryText;
    }
  }
}

// PC端样式
@media only screen and (min-width: 769px) {
  .index-page {
    .main-content {
      .news-section, .product-section {
        position: relative;
        top: -120px;
        width: 70%;
        .head-title {
          padding-bottom: 30px;
        }
      }
      .news-section {
        .news-card-container {
          .pc-news-info-container {
            display: flex;
            // flex-wrap: wrap;
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

                &:hover {
                  .info-content {
                    background: $black;
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
              }
              .reverse {
                display: flex;
                flex-direction: column-reverse;
                padding: 10px 5px;
              }
            }
          }
          .m-news-info-container {
            display: none !important;
          }
        }
      }
      .product-section {
        .product-card-container {
          width: 100%;
          .pc-product-info-container {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eee; // yellow;
            padding: 10px;
            .main-product {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              position: relative;
              .product-img {
                img {
                  width: 100%;
                  height: 100%;
                  // object-fit: cover;
                }
              }
              .mask-cover {
                position: absolute;
                height: 60px;
                width: 100%;
                background-color: rgba(0, 0, 0, .6);
                bottom: 5px;
                left: 0;
              }
              .title {
                position: absolute;
                bottom: 22px;
                left: 40px;
                color: #fff;
                font-weight: 400;
                font-size: 22px;
                cursor: pointer;
              }
              .arrow {
                position: absolute;
                bottom: 19px;
                right: 40px;
                color: #fff;
                font-weight: 500;
                font-size: 28px;
                cursor: pointer;
              }
            }
            .products-list {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              overflow-x: hidden;
              overflow-y: auto;
              // height: 500px;
              // max-width: 318px; // 300px;
              max-width: 322px; // 300px;
              min-width: 140px;
              background: #eee; // green;
              margin-left: 10px; // 12px;
              .product {
                // margin-bottom: 20px;
                // margin: 10px 10px 10px 0;
                &__cover {
                  position: relative;
                  // margin: 0 10px;
                  .p-cover-mask {
                    position: absolute;
                    height: 30px;
                    width: 100%;
                    background-color: rgba(0, 0, 0, .6);
                    bottom: 5px;
                    left: 0;
                  }
                  .p-cover-title {
                    position: absolute;
                    bottom: 10px;
                    left: 20px;
                    color: #fff;
                    font-weight: 400;
                    font-size: 16px;
                    cursor: pointer;
                  }
                }
              }
            }
          }
          .m-product-info-container {
            display: none !important;
          }
        }
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
    .main-content {
      .news-section, .product-section {
        top: -80px;
        span {
          font-size: 38px;
        }
      }
      .news-section {
        .news-card-container {
          .pc-news-info-container {
            display: none !important;
          }
          .m-news-info-container {
            margin: 30px;
            .m-news-card-item {
              .info-card {
                margin-bottom: 40px;
                background: #fff;
                &__image {
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                &__content {
                  .title {
                    padding: 40px 40px 20px 40px;
                    font-size: 24px;
                    font-weight: 500;
                  }
                  .sub-title {
                    padding: 10px 40px;
                    font-size: 20px;
                    font-weight: 400;
                  }
                  .summary {
                    padding: 10px 40px;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                    color: $secondaryText;
                  }
                  .detail-btn {
                    padding: 20px 40px 40px 40px;
                    button {
                      padding: 12px 42px;
                      border: none;
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
              }
            }
          }
        }
      }

      .product-section {
        .product-card-container {
          .pc-product-info-container {
            display: none !important;
          }
          .m-product-info-container {
            .m-product-card-item {
              background: #eee;
            }
          }
        }
      }
    }
  }
}
</style>
