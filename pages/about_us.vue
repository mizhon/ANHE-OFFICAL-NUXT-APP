<template>
  <div class="page-content-wrapper">
    <div class="banner-container" :style="{backgroundImage: `url(${bannerImg});`, backgroundRepeat: `no-repeat;`, backgroundPosition: 'center;', backgroundSize: 'cover;'}">
      <!-- <img :src="bannerImg" alt="" width="100%" /> -->
      <div class="about-title">
        <div class="main-desc">
          <span>{{ mainDesc }}</span>
          <span class="symbol">。</span>
        </div>
        <div class="sub-desc">
          <div v-for="(info, id) in infoList" :key="id">
            {{ info.desc }}
          </div>
        </div>
      </div>
    </div>
    <div class="content-container">
      <!-- 介绍 -->
      <div class="introduce">
        <div class="title">
          {{  }}
        </div>
      </div>
      <!-- 愿景 -->
      <div class="vision">

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AboutUSPage',
  layout: 'default',
  data() {
    return {
      bannerImg: require(`~/static/imgs/about/about_banner.png`),
      mainDesc: `选择安禾`,
      infoList: [
        { id: 0, desc: '卓越的科学家团队' },
        { id: 1, desc: '国际顶尖水平的创新技术以及持续迭代的能力' },
        { id: 2, desc: '中国制造的优质售后服务' },
      ],
      intro: {
        introBackgroundImg: require(`~/static/imgs/about/introduce.png`),
        title: '安禾是谁？',
        list: [
          { id: 0, desc: `一个立志用硬科技改变世界的科学家团队` },
          { id: 1, desc: `一个对科学研究有狂热追求的团队` },
          { id: 2, desc: `一个具备民族情怀、不服输、不认输、立志打造再尖端制造领域完全中国自主研发，自主产业链的团队` },
        ]
      },
      vision: {
        visionBaackgroundImg: require(`~/static/imgs/about/development.png`),
        title: '发展愿景',
        desc: `安禾致力于尖端科学仪器研发和生产的高科技平台公司，助力硬科技从实验室到工业领域0到1的转化，以及实现从1到无穷大的商业应用，让前沿基础科学成果真正成为科学生产的巨大推动力。`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 420px;
  .about-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    .main-desc {
      padding: 0 0 40px 0;
      color: $white;
      font-size: 55px;
      font-weight: bold;
      text-indent: 5px;
      letter-spacing: 5px;

      .symbol {
        position: relative;
        bottom: 46px;
      }
    }
    .sub-desc {
      color: $white;
      font-size: 28px;
      line-height: 48px;
      font-weight: 300;
    }
  }

  .content-container {
    .title {}
  }
}
</style>
