<template>
  <section class="bottom-container">
    <div class="main-content">
      <TrademarkLogo :path="logoPath" :width="100" :height="60" class="logo" />
      <div class="vertical-line"></div>
      <!-- 联系信息 -->
      <div class="contact-info">
        <div class="title">{{ contactInfo.title }}</div>
        <div class="info-details">
          <p>电话：{{ contactInfo.phone }}</p>
          <p>邮箱：{{ contactInfo.mail }}</p>
          <p>地址：{{ contactInfo.address }}</p>
        </div>
      </div>
      <div class="vertical-line"></div>
      <!-- 微信公众号信息 -->
      <div class="wechat-offical-info">
        <TrademarkLogo :path="wechatPath" :width="40" :height="40" class="logo" />
        <p class="desc">{{ wechatOfficalText }}</p>
      </div>
    </div>
    <div class="sub-content">
      <p>{{ footerDesc }}</p>
      <p>{{ copyright }}</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CommonFooter',
  data() {
    return {
      logoPath: '/logos/anhe-footer-logo.svg',
      wechatPath: '/logos/wechat-logo.svg',
      contactInfo: {
        title: `联系我们`,
        phone: `13512345678`,
        mail: `hi@anhe.com.cn`,
        address: `北京市海淀区学院南路55号`
      },
      footerDesc: `网站所有数据及文档均受《著作权法》及相关法律法规保护，任何组织及个人不得侵权，违者本公司将依法追究侵权责任，特此申明。优设网法律顾问：XX律师`,
      copyright: `Copyright©️ 2023 XX XX - 安禾官方微信号: XXXXXX - 鄂ICP备1XXXXX号-1 鄂公安备案 XXXXXX号`,
      wechatOfficalText: '安和公众号'
    }
  }
}
</script>
<style lang="scss" scoped>
.bottom-container {
  width: 100%;
  background: $black;
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    .vertical-line {
      border: .5px solid $footDividingLineColor;
      height: 120px;
      margin: 5px 70px;
    }

    .contact-info {
      .title {
        font-size: 18px;
        margin-bottom: 10px;
        color: $footMainTextColor;
      }

      .info-details {
        font-size: 12px;
        color: $footSubTextColor;
      }
    }

    .wechat-offical-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logo {
        background: gray;
        border-radius: 6px;
      }

      .desc {
        color: $footMainTextColor;
        font-size: 14px;
      }
    }
  }
  .sub-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 1px;
    color: #909399;
    padding: 20px;
  }
}
</style>

