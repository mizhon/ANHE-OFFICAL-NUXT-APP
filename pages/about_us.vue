<template>
  <div class="page-content-wrapper">
    <div class="about-us-page">
      <!-- PC端显示 -->
      <div class="pc-only">
        <section class="about-banner-container" :style="banner.style">
          <div class="about-title">
            <div class="main-desc">
              <span>{{ banner.mainText }}</span>
              <span class="symbol">。</span>
            </div>
            <div class="sub-desc">
              <div v-for="(info, id) in banner.infoList" :key="id">
                {{ info.desc }}
              </div>
            </div>
          </div>
        </section>
        <section class="about-content-container">2</section>
      </div>
      <!-- 移动端显示 -->
      <div class="mobile-only">
        <section class="about-banner-container">
          <img :src="banner.img" alt="" />
          <div class="banner-info">
            <div class="title">{{ banner.mainText }}</div>
            <div class="decorator"></div>
            <div class="sub-title">
              <div v-for="(info, id) in banner.infoList" :key="id">
                {{  info.desc }}
              </div>
            </div>
          </div>
        </section>
        <section class="about-content-container">
          <!-- 介绍 -->
          <div class="introduce">
            <div class="title">{{ intro.title }}</div>
            <div class="summary">
              <span v-for="(t, id) in intro.texts" :key="id">
                {{ t.text }}
              </span>
            </div>
          </div>
          <!-- 愿景 -->
          <div class="vision">
            <div class="title">{{ vision.title }}</div>
            <div class="desc">
              {{  vision.desc }}
            </div>
            <div class="img-container">
              <img :src="vision.img" alt="" />
            </div>
          </div>
          <!-- 联系我们 -->
          <div class="contact-us">
            <div class="title">
              {{ contact.title }}
            </div>
            <div class="card-list">
              <div v-for="(card, id) in contact.cards" :key="id" class="card">
                <div class="head">{{ card.location }}</div>
                <div class="info">
                  <span>{{ card.address }}</span>
                  <span>{{ card.phone }}</span>
                  <span>{{ card.mail }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from '@/components/common/AppFooter.vue';

export default {
  name: 'AboutUSPage',
  components: {
    AppFooter
  },
  layout: 'normal',
  data() {
    return {
      banner: {
        bgImg: require(`~/static/imgs/about/about_banner.png`),
        mainText: '选择安禾',
        infoList: [
          { id: 0, desc: '卓越的科学家团队' },
          { id: 1, desc: '国际顶尖水平的创新技术以及持续迭代的能力' },
          { id: 2, desc: '中国制造的优质售后服务' },
        ],
        style: '',
        img: '/imgs/about/about_banner_m.png', // 限移动端显示图片
      },
      intro: {
        title: '安禾介绍',
        texts: [
          {id: 0, text: `一个立志用硬科技改变世界的科学家团队` },
          {id: 1, text: `一个对科学研究有狂热追求的团队` },
          {id: 2, text: `一个具备民族情怀、不服输、不认输、立志打造再尖端制造领域完全中国自主研发，自主产业链的团队` },
        ],
        // summary:  '一个立志用硬科技改变世界的科学家团队\n一个对科学研究有狂热追求的团队\n一个具备民族情怀、不服输、不认输、立志打造再尖端制造领域完全中国自主研发，自主产业链的团队\n',
      },
      vision: {
        title: '发展愿景',
        titleBgImg: require(`~/static/imgs/about/bg_development.png`), // for PC
        img: `/imgs/about/ah_intro_2.png`,
        desc: `安禾致力于尖端科学仪器研发和生产的高科技平台公司，助力硬科技从实验室到工业领域0到1的转化，以及实现从1到无穷大的商业应用，让前沿基础科学成果真正成为科学生产的巨大推动力。`
      },
      contact: {
        title: '联系我们',
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
  },
  created() {
    this.banner.style = `background-image: url(${this.banner.bgImg}); background-repeat: no-repeat; background-position: center; background-size: 100% 100%;`
  },
}
</script>
<style lang="scss" scoped>
.about-us-page {
  padding-top: 60px;
  overflow: hidden;
}

// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }

  .pc-only {
    .about-banner-container {
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
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .pc-only {
    display: none !important;
  }

  .mobile-only {
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .about-banner-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .banner-info {
        position: absolute;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: center;
        .title {
          font-size: 38px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .sub-title {
          font-size: 18px;
          font-weight: 400;
          line-height: 40px;
        }
      }
    }
    .about-content-container {
      .introduce, .vision, .contact-us {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          font-size: 42px;
          font-weight: 500;
          color: $primaryText;
          padding: 50px 0 0 0;
        }
      }
      .introduce {
        .summary {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 20px 40px 20px;
          span {
            display: block;
            font-size: 18px;
            color: $primaryText;
            text-align: center;
            line-height: 40px;
          }
        }
      }
      .vision {
        background: #eee;
        .desc {
          padding: 20px;
          font-size: 18px;
          color: $primaryText;
          line-height: 40px;
        }
        .img-container {
          display: flex;
          padding: 20px 20px 50px 20px;
        }
      }
      .contact-us {
        margin-bottom: 50px;
        .card-list {
          width: 100%;
          .card {
            display: flex;
            flex-direction: column;
            margin: 20px;
            padding: 20px;
            background: #f6f7f8;
            .head {
              font-size: 20px;
              padding: 10px;
            }
            .info {
              display: flex;
              flex-direction: column;
              font-size: 14px;
              margin: 10px;
              span {
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
