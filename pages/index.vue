<template>
  <div class="page-content-wrapper">
    <section class="index-page">
      <!-- Banner 部分 -->
      <section class="main-banner">
        <!-- Banner主图（走马灯效果） -->
        <el-carousel height="400px" direction="horizontal" :autoplay="true" arrow="never">
          <el-carousel-item v-for="img in banner.imgs" :key="img.id">
            <img :src="img.src" alt="" width="100%" height="100%" style="object-fit: cover" />
          </el-carousel-item>
        </el-carousel>
        <div class="banner-info-container">
          <div class="banner-title">
            <!-- 仅在移动端展示 -->
            <div class="m-decorator">
              <img :src="banner.tranglePath" alt="" />
            </div>
            <div class="banner-title__wrapper">
              <div class="main">{{ banner.mainText }}</div>
              <!-- 仅在PC端展示 -->
              <div class="pc-decorator">
                <img :src="banner.tranglePath" alt="" />
              </div>
              <div class="sub">{{ banner.subText }}</div>
            </div>
          </div>
          <div class="banner-desc">
            <span>{{ banner.desc }}</span>
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
              <div class="main-product" @mouseover="onMouseOverMainImage" @mouseout="onMouseOutMainImage">
                <div class="product-img">
                  <img :src="mainProduct.img" alt="">
                </div>
                <div class="mask-cover" :class="[showMaskCover ? '' : 'hidden']"></div>
                <div class="title" :class="[showMaskCover ? '' : 'hidden']" @click="checkProductDetail(mainProduct)">{{ mainProduct.title }}</div>
                <div class="arrow" :class="[showMaskCover ? '' : 'hidden']" @click="checkProductDetail(mainProduct)"><i class="el-icon-right"></i></div>
              </div>
              <div class="products-list">
                <div v-for="(p, i) in productsList" :key="i" class="product">
                  <div class="product__cover" @mouseover="onMouseOver(p)" @mouseout="onMouseOut(p)">
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
        desc: `让前沿基础科学成果真正成为科学生产的巨大推动力`

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
          path: '/product_series',
          menuIndex: 1,
          tab: 0
        },
        {
          title: '扫描探针显微镜',
          img: '/imgs/index/product_show_img_02.png',
          path: '/product_series',
          menuIndex: 1,
          tab: 1
        },
        {
          title: '多功能物理特性测量系统',
          img: '/imgs/index/product_show_img_03.png',
          path: '/product_series',
          menuIndex: 1,
          tab: 2
        },
      ],
      // Product区域默认显示的信息内容，根据鼠标滑动到productList中的一个而改变
      mainProduct: {
        title: '稀释制冷剂',
        img: '/imgs/index/product_show_img_01.png',
        path: '/product_series',
        menuIndex: 1,
        tab: 0
      },
      showMaskCover: false // 默认不显示主图的mask信息
    }
  },
  computed: {
    currentPageWidth() {
      return window.innerWidth;
    },
  },
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
      console.log('product detail path redirect ...', product)
      this.$store.commit('SET_ACTIVE_MENU_INDEX', product.menuIndex)
      this.$router.push({
        path: product.path
      })
    },
    onMouseOverMainImage() {
      this.showMaskCover = true
    },
    onMouseOutMainImage() {
      this.showMaskCover = false
    },
    onMouseOver(p) {
      // eslint-disable-next-line no-console
      console.log('[on mouse over] --->', p)
      this.mainProduct = Object.assign({}, p)
    },
    onMouseOut(p) {
      // eslint-disable-next-line no-console
      console.log('[on mouse out] --->', p)
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

        &__wrapper {
          display: flex;
        }
      }
      .banner-desc {
        color: $white;
        font-weight: 300;
        line-height: 30px;
        font-size: 26px;
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
      color: $primaryText;
      font-weight: 500;
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
          font-size: 26px;
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
              max-width: 500px;
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
                    margin: 10px 20px;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
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
                  object-fit: cover;
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
            // background: #eee;
            // padding: 10px;
            .main-product {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              position: relative;
              .product-img {
                height: 500px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              .mask-cover {
                position: absolute;
                height: 60px;
                width: 100%;
                background-color: rgba(0, 0, 0, .6);
                bottom: 0; // 5px;
                left: 0;
              }
              .title {
                position: absolute;
                bottom: 18px;
                left: 40px;
                color: #fff;
                font-weight: 400;
                font-size: 22px;
                cursor: pointer;
              }
              .arrow {
                position: absolute;
                bottom: 15px;
                right: 40px;
                color: #fff;
                font-weight: 500;
                font-size: 28px;
                cursor: pointer;
              }

              .hidden {
                display: none;
              }
            }
            .products-list {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              overflow-x: hidden;
              overflow-y: auto;
              height: 500px;
              // max-width: 318px; // 300px;
              max-width: 322px; // 300px;
              min-width: 140px;
              background: #eee; // green;
              margin-left: 10px; // 12px;
              .product {
                margin-bottom: 10px;
                // margin: 10px 10px 10px 0;
                &__cover {
                  position: relative;
                  // margin: 0 10px;
                  .p-cover-mask {
                    position: absolute;
                    height: 30px;
                    width: 100%;
                    background-color: rgba(0, 0, 0, .6);
                    bottom: 4px; // 5px;
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
              .product:last-child {
                margin-bottom: 0;
              }
            }
          }
          .m-product-info-container {
            display: none !important;
          }
        }
      }
    }
    .main-banner {
      .banner-info-container {
        .banner-title {
          .m-decorator {
            display: none !important;
          }
          &__wrapper {
            .pc-decorator {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0 15px;
            }
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
    .main-content {
      .news-section, .product-section {
        .head-title {
          font-size: 1.625rem /* 26/16 */;
          // padding-bottom: .75rem /* 12/16 */;
        }
      }
    }
    .main-banner {
      height: 37rem;
      .banner-info-container {
        .banner-title {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
          // font-size: 2.75rem /* 44/16 */; /* 36/16 */
          font-size: 3rem /* 48/16 */;
          font-weight: 600;
          .m-decorator {
            padding: 0 .9375rem 1rem .9375rem /* 15/16 */;
          }
          .pc-decorator {
            display: none !important;
          }
        }
        .banner-desc {
          font-size: .8125rem /* 13/16 */;
          font-weight: 400;
          span {
            padding: 0 .3125rem /* 5/16 */;
          }
        }
      }

      .pull-down {
        bottom: 20rem;
        img {
          width: 1.75rem /* 28/16 */;
          height: 1.75rem /* 28/16 */;
        }
        span {
          font-size: .75rem /* 12/16 */;
        }
      }
    }
    .main-content {
      .news-section, .product-section {
        top: -5rem /* 80/16 */;
        span {
          font-size: 2.375rem /* 38/16 */;
        }
      }
      .news-section {
        .news-card-container {
          .pc-news-info-container {
            display: none !important;
          }
          .m-news-info-container {
            margin: 1.25rem /* 20/16 */;
            .m-news-card-item {
              .info-card {
                margin-bottom: 2.5rem /* 40/16 */;
                background: #fff;
                &__image {
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                &__content {
                  .title {
                    padding: 2.375rem 1.5625rem 1.25rem 1.5625rem;
                    font-size: 1.25rem /* 20/16 */;
                    font-weight: 500;
                  }
                  .sub-title {
                    // padding: 10px 40px;
                    padding: .625rem /* 10/16 */ 1.5625rem /* 25/16 */;
                    font-size: 1.125rem /* 18/16 */;
                    font-weight: 400;
                  }
                  .summary {
                    // padding: 10px 40px;
                    padding: .625rem /* 10/16 */ 1.5625rem /* 25/16 */;
                    font-size: 1rem;
                    font-weight: 400;
                    // line-height: 24px;
                    line-height: 1.5rem /* 24/16 */;
                    color: $secondaryText;
                  }
                  .detail-btn {
                    // padding: 20px 40px 40px 40px;
                    padding: 1.25rem 1.5625rem 1.5625rem 1.5625rem;
                    button {
                      // padding: 12px 42px;
                      padding: .75rem /* 12/16 */2.625rem /* 42/16 */;
                      border: none;
                      color: $menuActiveText;
                      background-color: $btnBackgroundColor;
                      font-size: 1rem; /* 16/16 */
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
          // padding: 0.875rem;
          .pc-product-info-container {
            display: none !important;
          }
          .m-product-info-container {
            .m-product-card-item {
              background: #eee;
              .product-card-container {
                padding: 1.375rem /* 22/16 */1.25rem /* 20/16 */ 0 1.25rem;;
              }
            }
          }
        }
      }
    }
  }
}
</style>
