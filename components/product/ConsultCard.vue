<template>
  <div class="consult-card-container">
    <div class="title">{{ consultTitle }}</div>
    <div class="sub-title">{{ consultSubtitle }}</div>
    <div v-for="(item, idx) in items" :key="idx" class="contact-info">
      <i :class="item.icon"></i>
      <div style="padding: 0 5px;">{{ item.desc }}</div>
      <div>{{ item.info }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConsultCard',
  data() {
    return {
      consultTitle: '产品信息详情咨询',
      consultSubtitle: '请拨打电话或发送邮件哦',
      items: [
        { idx: 0, icon: 'el-icon-phone', desc: '咨询电话：', info: '13101333333' },
        { idx: 1, icon: 'el-icon-message', desc: '联系邮件：', info: 'consult@anhe.com.cn' },
        { idx: 2, icon: 'el-icon-location-outline', desc: '联系地址：', info: '北京市海淀区学院南路55号' },
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.consult-card-container {
  width: 450px;
  max-height: 240px;
  margin: 75px 0 20px 10px;
  background-color: $navbarBackgroundColor;
  .title {
    padding: 30px 20px 10px 20px;
    white-space: nowrap;
    font-size: 18px; // 22px;
    font-weight: 500;
    // text-align: center;
    color: $topNavBackgroundColor;
  }
  .sub-title {
    padding: 10px 20px 20px 20px;
    white-space: nowrap;
    font-size: 16px; // 18px;
    font-weight: 400;
    // text-align: center;
    color: $menuActiveText;
  }
  .contact-info {
    display: flex;
    padding: 10px 20px;
    white-space: nowrap;
    font-size: 13px;
  }
}
</style>
