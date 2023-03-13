<template>
  <div class="aboutus-footer">
    <div class="pc-only">
      <div class="main-content">
        <AppLogo :path="pcFooterLogo" :width="100" :height="60" />
        <div class="dividing-line">
          <svg width="1" height="100%">
            <line
              x1="0"
              y1="0"
              x2=""
              y2="100%"
              fill="transparent"
              stroke-width="1"
              stroke="#85827F"
            />
          </svg>
        </div>
        <div class="about-info-container">
          <div class="about-us">
            <div class="about-us__title">
              {{ aboutus.title }}
            </div>
            <div class="about-us__content">
              <div v-for="(c, idx) in aboutus.contents" :key="idx" class="content-item">
                <span @click="handleLocated(c)">{{ c.label }}</span>
              </div>
            </div>
          </div>
          <div class="main-pages">
            <div class="main-pages__title">
              {{ pages.title }}
            </div>
            <div class="main-pages__content">
              <div v-for="(p, idx) in pages.contents" :key="idx" class="page-item">
                <span>{{ p.label }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dividing-line">
          <svg width="1" height="100%">
            <line
              x1="0"
              y1="0"
              x2=""
              y2="100%"
              fill="transparent"
              stroke-width="1"
              stroke="#85827F"
            />
          </svg>
        </div>
        <div class="wechat-offical-info">
          <AppLogo :path="wechatLogo" :width="40" :height="40" style="background: gray; border-radius: 6px;" />
          <p class="desc">{{ wechatOfficalText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppLogo from '../common/AppLogo.vue';

export default {
  name: 'AboutUsFooter',
  components: {
    AppLogo
  },
  data() {
    return {
      pcFooterLogo: '/logos/anhe-footer-logo.svg',
      wechatLogo: '/logos/wechat-logo.svg',
      aboutus: {
        title: '关于我们',
        contents: [
          {
            id: 0,
            label: '安禾介绍',
            ancher: 'anhe_introduce'
          },
          {
            id: 1,
            label: '发展愿景',
            ancher: 'anhe_vision'
          },
          {
            id: 2,
            label: '联系我们',
            ancher: 'anhe_contactus'
          }
        ]
      },
      pages: {
        title: '安禾首页',
        contents: [
          {
            id: 0,
            label: '产品系列',
            path: '/product_series'
          },
          {
            id: 1,
            label: '知识中心',
            path: '/knowledge_center'
          },
          {
            id: 2,
            label: '技术支持',
            path: '/tech_support'
          },
          {
            id: 3,
            label: '新闻动态',
            path: '/media_news'
          }
        ]
      },
      wechatOfficalText: '安和公众号',
      footerDesc: `网站所有数据及文档均受《著作权法》及相关法律法规保护，任何组织及个人不得侵权，违者本公司将依法追究侵权责任，特此申明。优设网法律顾问：XX律师`,
      copyright: `Copyright©️ 2023 XX XX - 安禾官方微信号: XXXXXX - 鄂ICP备1XXXXX号-1 鄂公安备案 XXXXXX号`,
    }
  },
  methods: {
    handleLocated(ancher) {
      // eslint-disable-next-line no-console
      console.log('about us footer: --->>', ancher)
      this.$emit('located', ancher)
    }
  }
}
</script>
<style lang="scss" scoped>
// PC端样式
@media only screen and (min-width: 769px) {
  .aboutus-footer {
    position: relative;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: #21201f;
    z-index: 999;
    .pc-only {
      .main-content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        .dividing-line {
          height: 120px;
          margin: 5px 40px;
        }
        .about-info-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;

          .about-us {
            margin: 20px 60px 20px 20px;
            &__title {
              font-size: 18px;
              font-weight: 500;
              color: #6E7177;
              padding-bottom: 19px;
            }
            &__content {
              display: flex;
              flex-direction: column;
              .content-item {
                span {
                  display: block;
                  font-size: 14px;
                  font-weight: 400;
                  color: #C5C9D4;
                  margin: 5px 0;
                  cursor: pointer;
                }
              }
            }
          }
          .main-pages {
            margin: 20px 20px 20px 60px;
            &__title {
              font-size: 18px;
              font-weight: 500;
              color: #6E7177;
              padding-bottom: 19px;
            }

            &__content {
              display: flex;
              // flex-direction: column;
              flex-wrap: wrap;
              justify-content: space-between;
              .page-item {
                flex: 1;
                width: 50%;
                min-width: 50%;
                max-width: 50%;
                span {
                  display: block;
                  font-size: 14px;
                  font-weight: 400;
                  color: #C5C9D4;
                  margin: 5px 0;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .wechat-offical-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
          .desc {
            color: $footMainTextColor;
          }
        }
      }
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .aboutus-footer {
    .pc-only {
      display: none !important;
    }
  }
}
</style>
