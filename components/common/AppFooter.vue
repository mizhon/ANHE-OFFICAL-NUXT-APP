<template>
  <div class="app-footer" :style="{position: `${position}`}">
    <div class="main-content">
      <AppLogo :path="footerLogo" :width="100" :height="60" />
      <div class="dividing-line"></div>
      <!-- 联系信息 -->
      <div class="contact-info">
        <div class="title">{{ contactInfo.title }}</div>
        <div class="info-details">
          <span>{{ contactInfo.phone }}</span>
          <span>{{ contactInfo.mail }}</span>
          <span>{{ contactInfo.address }}</span>
        </div>
      </div>
      <div class="dividing-line"></div>
      <div class="wechat-offical-info">
        <AppLogo :path="wechatLogo" :width="40" :height="40" style="background: gray; border-radius: 6px;" />
        <p class="desc">{{ wechatOfficalText }}</p>
      </div>
    </div>
    <div class="sub-content">
      <span>{{ footerDesc }}</span>
      <span>{{ copyright }}</span>
    </div>
  </div>
</template>
<script>
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppFooter',
  components: {
    AppLogo
  },
  props: {
    position: {
      type: String,
      default: 'relative' // fixed | relative
    }
  },
  data() {
    return {
      layout: 'relative',
      footerLogo: '/logos/anhe-footer-logo.svg',
      wechatLogo: '/logos/wechat-logo.svg',
      contactInfo: {
        title: `联系我们`,
        phone: `电话：13512345678`,
        mail: `邮箱：hi@anhe.com.cn`,
        address: `地址：北京市海淀区学院南路55号`
      },
      wechatOfficalText: '安和公众号',
      footerDesc: `网站所有数据及文档均受《著作权法》及相关法律法规保护，任何组织及个人不得侵权，违者本公司将依法追究侵权责任，特此申明。优设网法律顾问：XX律师`,
      copyright: `Copyright©️ 2023 XX XX - 安禾官方微信号: XXXXXX - 鄂ICP备1XXXXX号-1 鄂公安备案 XXXXXX号`,
    }
  },
  watch: {
    position: {
      immediate: true,
      handler(newVal, oldVal) {
        if(newVal === 'fixed') {
          this.layout = 'fixed'
        }
        if(newVal === 'relative') {
          this.layout = 'relative'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app-footer {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: #21201f;
  z-index: 999;
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .contact-info {
      padding: 0 40px;
      .title {
        font-size: 18px;
        margin-bottom: 10px;
        color: $footMainTextColor;
      }

      .info-details {
        font-size: 12px;
        color: $footMainTextColor;
        span {
          display: block;
          margin: 5px 0;
        }
      }
    }
    .wechat-offical-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .desc {
        color: $footMainTextColor;
      }
    }
  }

  .sub-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: $info;
    padding: 20px;
    span {
      display: block;
      text-align: center;
      line-height: 18px;
    }
  }
}
// PC端样式
@media only screen and (min-width: 769px) {
  .app-footer {
    .main-content {
      .dividing-line {
        border: .5px solid $footDividingLineColor;
        height: 120px;
        margin: 5px 40px;
      }
    }
    .sub-content {
      span {
        line-height: 18px;
      }
      .desc {
        font-size: 14px;
        padding: 5px;
      }
    }
  }

}
// 移动端样式
@media only screen and (max-width: 768px) {
  .app-footer {
    position: relative;
    .main-content {
      flex-direction: column;
      // padding: 30px 20px 10px 20px;
      padding: 1.875rem /* 30/16 */1.25rem /* 20/16 */.625rem /* 10/16 */1.25rem /* 20/16 */;
      .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          font-size: 1.0625rem /* 17/16 */;
          margin-bottom: .625rem /* 10/16 */;
          color: $footMainTextColor;
        }
        .info-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      .dividing-line  {
        border: .5px solid $footDividingLineColor;
        height: 1px;
        width: 80%;
        // margin: 30px 0;
        margin: 1.875rem /* 30/16 */0;
      }
      .wechat-offical-info {
        .desc {
          color: #737373;
          font-size: .75rem /* 12/16 */;
          padding: .3125rem /* 5/16 */;
        }
      }
    }
    .sub-content {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: block;
        text-align: center;
        line-height: 1.0625rem /* 17/16 */;
        font-size: .6875rem /* 11/16 */;
        color: #737373;
        padding: .3125rem /* 5/16 */;
      }
    }
  }
}
</style>
