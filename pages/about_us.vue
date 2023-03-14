<template>
  <div class="page-content-wrapper">
    <div class="about-us-page">
      <!-- PC端显示 -->
      <div class="pc-only">
        <!-- banner头图 -->
        <section class="about-banner-container" :style="banner.style">
          <div class="about-title">
            <div class="main-desc">
              <span>{{ banner.mainText }}</span>
              <span class="symbol">。</span>
            </div>
            <div class="sub-desc">
              <div v-for="(i, id) in banner.infoList" :key="id">
                {{ i.desc }}
              </div>
            </div>
          </div>
        </section>
        <section class="about-content-container">
          <div class="pc-info-content" :style="{backgroundImage: `url(${intro.bgImg})`, backgroundRepeat: `no-repeat`, backgroundPosition: `right`, backgroundSize: `60% 100%` }">
            <!-- 介绍 -->
            <div id="anhe_introduce" class="introduce">
              <div class="title" :style="{backgroundImage: `url(${intro.titleBgImg})`, backgroundRepeat: `no-repeat`, backgroundPositionY: `center` }">
                {{ intro.title }}
              </div>
              <div class="summary">
                <img :src="intro.img" alt="" width="55%" height="50%" />
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
            <div id="anhe_vision" class="vision">
              <div class="title" :style="{backgroundImage: `url(${vision.titleBgImg})`, backgroundRepeat: `no-repeat`, backgroundPositionY: `center` }">
                {{ vision.title }}
              </div>
              <div class="summary">
                <section class="desc-container">
                  <div class="desc">
                    <span>
                      {{ vision.desc }}
                    </span>
                  </div>
                  <!-- <div class="illustration">
                    <span>0</span>
                    <span class="icon"><i class="el-icon-right" /></span>
                    <span style="font-size: 38px;">1</span>
                    <span class="icon"><i class="el-icon-right" /></span>
                    <img :src="vision.endlessImg" alt="" width="70px" />
                  </div> -->
                </section>
                <img :src="vision.img" alt="" width="53%" height="50%" />
              </div>
            </div>
          </div>
          <div id="anhe_contactus" class="contact-us-container">
            <div class="title" :style="{backgroundImage: `url(${contact.titleBgImg})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }">
              {{ contact.title }}
            </div>
            <div class="card-list">
              <div v-for="(card, id) in contact.cards" :key="id" class="card">
                <div class="head">{{ card.location }}</div>
                <div class="info">
                  <span>{{ card.address }}</span>
                  <span>{{ card.phone }}</span>
                  <span>{{ card.mail }}</span>
                  <span>{{ card.saler }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutUsFooter @located="onAncherClicked" @redirect="onPageRedirectTo" />
      </div>
      <!-- NOTE: 移动端显示 -->
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
          <div class="info-content">
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
                  <span>{{ card.saler }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AppFooter />
      </div>
    </div>
  </div>
</template>
<script>
import AppFooter from '@/components/common/AppFooter.vue';
import AboutUsFooter from '@/components/about/AboutUsFooter.vue';

export default {
  name: 'AboutUSPage',
  components: {
    AppFooter,
    AboutUsFooter
  },
  layout: 'normal',
  data() {
    return {
      banner: {
        bgImg: require(`~/static/imgs/about/about_banner.png`), // 支持后端动态传图
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
        bgImg: require(`~/static/imgs/about/intro_bg_pc.png`), // PC端安禾介绍背景图

        title: '安禾介绍',
        titleBgImg: require(`~/static/imgs/about/bg_introduce.png`),
        img: `/imgs/about/ah_intro_1.png`,
        heading: '安禾是谁？',
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
        endlessImg: `/imgs/about/endless.png`,
        desc: `安禾致力于尖端科学仪器研发和生产的高科技平台公司，助力硬科技从实验室到工业领域0到1的转化，以及实现从1到无穷大的商业应用，让前沿基础科学成果真正成为科学生产的巨大推动力。`
      },
      contact: {
        title: '联系我们',
        titleBgImg: require(`~/static/imgs/about/bg_contact_us.png`),
        cards: [
          {
            id: 0,
            location: '北京地区联系信息：',
            address: '地址：北京市顺义区田家营村幸福南街117号',
            phone: '电话：13141300582',
            mail: '邮件：contact.us@anhe.com.cn',
            saler: '销售：李XX 13141300582'
          },
          {
            id: 1,
            location: '嘉兴地区联系信息：',
            address: '地址：浙江省嘉兴市秀城区秀州路慈光公寓',
            phone: '电话：13141300582',
            mail: '邮件：contact.us@anhe.com.cn',
            saler: '销售：李XX 13141300582'
          }
        ],
      }
    }
  },
  created() {
    this.banner.style = `background-image: url(${this.banner.bgImg}); background-repeat: no-repeat; background-position: center; background-size: 100% 100%;`
  },
  methods: {
    onAncherClicked(p) {
      document.querySelector('#' + p.ancher).scrollIntoView({behavior: 'smooth'});
    },
    onPageRedirectTo(page) {
      // eslint-disable-next-line no-console
      // console.log('on page redirect to: --->', page);
      this.$store.commit('SET_ACTIVE_MENU_INDEX', page.menuIndex)
      this.$router.push({
        path: page.path
      });
    }
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

    .about-content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 0 50px 0;
      .pc-info-content {
        // 这里放置背景块
        display: flex;
        flex-direction: column;
        width: 55%;
        position: relative;
        // 验证css
        // background: yellow;
        height: 100%;
        .introduce, .vision {
          .title {
            margin: 60px 20px 40px 20px;
            color: $primaryText;
            font-size: 38px;
            font-weight: 500;
          }
          .summary {
            display: flex;
            .desc-container {
              // padding: 10px 30px 10px 20px;
              text-align: justify;
              color: $primaryText;
              .heading {
                padding: 20px 0;
                font-size: 24px;
                font-weight: 500;
              }
              .desc {
                display: flex;
                flex-direction: column;
                // padding: 10px 10px 20px 30px;
                font-size: 16px;
                font-weight: 400;
                span {
                  line-height: 30px;
                }
              }
              .illustration {
                display: flex;
                align-items: center;
                margin: 30px 10px 10px 0;
                font-size: 26px;
                font-weight: 500;

                .icon {
                  margin: 0 25px;
                }
              }
            }
          }
        }

        .introduce .desc-container {
          padding: 10px 40px;
        }

        .vision .desc-container {
          padding: 10px 80px 10px 20px;
        }
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
          font-size: 1.5rem /* 24/16 */;
          font-weight: bold;
          margin-bottom: 1.25rem /* 20/16 */;
        }
        .sub-title {
          font-size: .75rem /* 12/16 */;
          font-weight: 400;
          line-height: 1.5rem /* 24/16 */;
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
          font-size: 1.625rem /* 26/16 */;
          font-weight: 500;
          color: $primaryText;
          padding: 3.125rem /* 50/16 */ 0 0 0;
        }
      }
      .introduce {
        .summary {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // padding: 20px 20px 40px 20px;
          padding: 1.25rem /* 20/16 */ 1.25rem /* 20/16 */ 2.5rem /* 40/16 */ 1.25rem /* 20/16 */;
          span {
            display: block;
            font-size: 1rem /* 16/16 */;
            color: $primaryText;
            text-align: center;
            line-height: 2.125rem /* 34/16 */;
          }
        }
      }
      .vision {
        background: #eee;
        .desc {
          padding: 1.25rem /* 20/16 */;
          font-size: 1rem /* 16/16 */;
          color: $primaryText;
          line-height: 1.8125rem /* 29/16 */;
        }
        .img-container {
          display: flex;
          // padding: 20px 20px 50px 20px;
          padding: 1.25rem /* 20/16 */ 1.25rem /* 20/16 */ 3.125rem /* 50/16 */ 1.25rem /* 20/16 */;
        }
      }
      .contact-us {
        margin-bottom: 3.125rem /* 50/16 */;
        .card-list {
          width: 100%;
          .card {
            display: flex;
            flex-direction: column;
            margin: 1.25rem /* 20/16 */;
            padding: 1.25rem /* 20/16 */;
            background: #f6f7f8;
            .head {
              font-size: 1.125rem /* 18/16 */;
              padding: .625rem /* 10/16 */;
            }
            .info {
              display: flex;
              flex-direction: column;
              font-size: 1rem /* 16/16 */;
              margin: .625rem /* 10/16 */;
              span {
                line-height: 1.875rem /* 30/16 */;
              }
            }
          }
        }
      }
    }
  }
}
</style>
