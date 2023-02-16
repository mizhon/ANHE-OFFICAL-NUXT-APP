<template>
  <div class="page-content-wrapper">
    <div class="banner-container" :style="{backgroundImage: `url(${bannerBgImg});`, backgroundRepeat: `no-repeat;`, backgroundPosition: 'center;', backgroundSize: 'cover;'}">
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
      <div class="info-content">
        <!-- 介绍 -->
        <div class="introduce">
          <div class="title" :style="{backgroundImage: `url(${intro.titleBgImg});`, backgroundRepeat: `no-repeat;`, backgroundPositionY: `center;` }">
            {{ intro.title }}
          </div>
          <div class="summary">
            <img :src="intro.img" alt="" width="51%" height="50%" />
            <section class="desc-container">
              <div class="heading">{{ intro.heading }}</div>
              <div class="desc">
                <span v-for="(t, id) in intro.texts" :key="id">
                  {{ t.text }}
                </span>
              </div>
            </section>
          </div>
        </div>
        <!-- 愿景 -->
        <div class="vision">
          <div class="title" :style="{backgroundImage: `url(${vision.titleBgImg});`, backgroundRepeat: `no-repeat;`, backgroundPositionY: `center;` }">
            {{ vision.title }}
          </div>
          <div class="summary">
            <section class="desc-container">
              <!-- <div class="heading">{{ vision.heading }}</div> -->
              <div class="desc">
                <span>
                  {{ vision.desc }}
                </span>
              </div>
              <div class="illustration">
                <span>0</span>
                <span class="icon"><i class="el-icon-right" /></span>
                <span style="font-size: 38px;">1</span>
                <span class="icon"><i class="el-icon-right" /></span>
                <img :src="vision.endlessImg" alt="" width="80px" />
              </div>
            </section>
            <img :src="vision.img" alt="" width="56%" height="50%" />
          </div>
        </div>
      </div>
      <div class="contact-us-container">
        <div class="title" :style="{backgroundImage: `url(${contactInfo.titleBgImg});`, backgroundRepeat: `no-repeat;`, backgroundPosition: `center;` }">
          {{ contactInfo.title }}
        </div>
        <div class="card-list">
          <div v-for="(card, id) in contactInfo.cards" :key="id" class="card">
            <div class="head">{{ card.location }}</div>
            <div class="info">
              <span>{{ card.address }}</span>
              <span>{{ card.phone }}</span>
              <span>{{ card.mail }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import CommonFooter from '@/components/CommonFooter.vue'

export default {
  name: 'AboutUSPage',
  components: {
    CommonFooter
  },
  layout: 'default',
  data() {
    return {
      bannerBgImg: require(`~/static/imgs/about/about_banner.png`),
      mainDesc: `选择安禾`,
      infoList: [
        { id: 0, desc: '卓越的科学家团队' },
        { id: 1, desc: '国际顶尖水平的创新技术以及持续迭代的能力' },
        { id: 2, desc: '中国制造的优质售后服务' },
      ],
      intro: {
        title: '安禾介绍',
        titleBgImg: require(`~/static/imgs/about/bg_introduce.png`),
        img: `/imgs/about/ah_intro_1.png`,
        heading: '安禾是谁？',
        texts: [
          {id: 0, text: `一个立志用硬科技改变世界的科学家团队` },
          {id: 1, text: `一个对科学研究有狂热追求的团队` },
          {id: 2, text: `一个具备民族情怀、不服输、不认输、立志打造再尖端制造领域完全中国自主研发，自主产业链的团队` },
        ],
        summary:  '一个立志用硬科技改变世界的科学家团队\n一个对科学研究有狂热追求的团队\n一个具备民族情怀、不服输、不认输、立志打造再尖端制造领域完全中国自主研发，自主产业链的团队\n',
      },
      vision: {
        title: '发展愿景',
        titleBgImg: require(`~/static/imgs/about/bg_development.png`),
        img: `/imgs/about/ah_intro_2.png`,
        endlessImg: `imgs/about/endless.png`,
        desc: `安禾致力于尖端科学仪器研发和生产的高科技平台公司，助力硬科技从实验室到工业领域0到1的转化，以及实现从1到无穷大的商业应用，让前沿基础科学成果真正成为科学生产的巨大推动力。`
      },
      contactInfo: {
        title: '联系我们',
        titleBgImg: require(`~/static/imgs/about/bg_contact_us.png`),
        cards: [
          {
            id: 0,
            location: '北京地区联系信息：',
            address: '地址：北京市顺义区田家营村幸福南街117号',
            phone: '电话：13141300582',
            mail: '邮件：contact.us@anhe.com.cn'
          },
          {
            id: 1,
            location: '嘉兴地区联系信息：',
            address: '地址：浙江省嘉兴市秀城区秀州路慈光公寓',
            phone: '电话：13141300582',
            mail: '邮件：contact.us@anhe.com.cn'
          }
        ],
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
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0 50px 0;

  .info-content {
    display: flex;
    flex-direction: column;
    width: 55%;
    .introduce, .vision {
      .summary {
        display: flex;
        .desc-container {
          color: $primaryText;
          .heading {
            padding: 20px 30px;
            font-size: 24px;
            font-weight: 500;
          }

          .desc {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            font-weight: 400;
            span {
              line-height: 40px;
            }
          }

          .illustration {
            display: flex;
            flex-direction: columns;
            align-items: center;
            margin: 30px 0 10px 0;
            font-size: 26px;
            font-weight: 500;

            .icon {
              margin: 0 25px;
            }
          }
        }
      }
    }
    .introduce .title, .vision .title {
      margin: 60px 0 40px 0;
      color: $primaryText;
      font-size: 38px;
      font-weight: 500;
    }
    .vision .summary .desc-container .desc {
      padding: 10px 70px 20px 0;
      text-align: justify;
      span {
        line-height: 30px;
      }
    }
  }

  .info-content-bg {

  }

  .contact-us-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 55%;

    .title {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 80px 0 30px 0;
      font-size: 24px;
      font-weight: 500;
      color: #1d1d1d;
    }

    .card-list {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .card {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 30px 20px;
        color: #1d1d1d;
        border: 1px solid;
        border-image: linear-gradient(90deg, #E1EAFA, #FFFFFF) 10 10;
        background: linear-gradient(90deg, #fff, #E1EAFA);
        .head {
          font-size: 20px;
          margin: 10px 20px 20px 20px;
        }
        .info {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          margin: 10px 20px;
          span {
            line-height: 40px;
          }
        }
      }
      .card:nth-child(odd) {
        margin-right: 8px;
      }
      .card:nth-child(even) {
        margin-left: 8px;
      }
    }
  }
}
</style>
