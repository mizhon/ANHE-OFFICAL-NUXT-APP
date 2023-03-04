<template>
  <div class="knowledge-trend-wrapper">
    <div class="pc-only">
      <div class="knowledge-trend-list">
        <div v-for="(item, index) in currentProps" :key="index" class="trend-card-container">
          <div class="trend-card">
            <div class="main-title">{{ item.mainHeaderTitle }}</div>
            <div class="paper-list">
              <div v-for="(trend, idx) in item.trends" :key="idx" class="paper-container" @click="handleClick(trend)">
                <div class="cover-img">
                  <img :src="trend.coverImg" alt="">
                </div>
                <div class="info">
                  <div class="info__title">
                    {{ trend.title }}
                  </div>
                  <div class="info__summary">
                    {{ trend.summary }}
                  </div>
                </div>
              </div>
            </div>
            <div class="show-more-container">
              <span class="show-more-text">{{ showMoreText }}</span>
              <span><i class="el-icon-arrow-down"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-only">
      <div class="knowledge-trend-list">
        <div v-for="(item, index) in currentProps" :key="index" class="trend-card-container">
          <div class="trend-card">
            <div class="header-container">
              <div class="main-title">{{ item.mainHeaderTitle }}</div>
              <div class="show-more-icon">
                <span>{{ showMoreText }}<i class="el-icon-arrow-right"></i></span>
              </div>
            </div>

            <div class="paper-list">
              <div v-for="(trend, idx) in item.trends" :key="idx" class="paper-container" @click="handleClick(trend)">
                <div class="paper-title">
                  {{ trend.title }}
                </div>
                <div class="cover-img">
                  <img :src="trend.coverImg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KnowledgetTrend',
  props: {
    currentProps: {
      type: [Array],
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      showMoreText: '查看更多',
    };
  },
  methods: {
    handleClick(trend) {
      // eslint-disable-next-line no-console
      console.log('trend: --->', trend)
      this.$router.push({
        path: `/knowledge_center/trend/${trend.id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.knowledge-trend-wrapper {
  img {
    max-width: 100%;
    min-width: 100%;
  }
}
// PC端样式
@media only screen and (min-width: 769px) {
  .knowledge-trend-wrapper {
    .mobile-only {
      display: none !important;
    }
    .pc-only {
      .knowledge-trend-list {
        .trend-card-container {
          .trend-card {
            display: flex;
            flex-direction: column;
            .main-title {
              font-size: 24px;
              font-weight: 500;
              color: #333333;
              margin: 10px 10px 30px 10px;
            }
            .paper-list {
              display: flex;
              flex-direction: row;
              align-items: center;
              // justify-content: center;
              flex-wrap: wrap;
              width: 100%;
              .paper-container {
                // margin: 0 10px 20px 10px;
                margin: 0 10px 10px 10px;
                border: 1px solid #eee;
                width: 30%; // 33% wiil truncate
                cursor: pointer;
                .info {
                  &__title {
                    // padding: 20px 20px 10px 20px;
                    margin: 20px 20px 10px 20px;
                    font-size: 18px;
                    font-weight: 400;
                    color: #333333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                  }
                  &__summary {
                    padding: 0 20px 20px 20px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #666666;
                    line-height: 21px;
                  }
                }
              }
            }
            .show-more-container {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 30px 0 60px 0;
              color: #0053A1;
              .show-more-text {
                padding: 0 5px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .knowledge-trend-wrapper {
    .pc-only {
      display: none !important;
    }

    .mobile-only {
      .knowledge-trend-list {
        .trend-card-container {
          background: #fff;
          .trend-card {
            margin: 1.25rem;
            padding: 1.25rem 0;
            .header-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 0 1.25rem 0;
              .main-title {
                font-size: 1.25rem;
                font-weight: 500;
                color: #333333;
              }
              .show-more-icon {
                font-size: .875rem /* 14/16 */;
                font-weight: 400;
                color: #666666;
              }
            }
            .paper-list {
              .paper-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0 .9375rem /* 15/16 */ 0;
                border-bottom: 1px solid #E4E4E4;
                margin-bottom: .9375rem;
                .paper-title {
                  width: 60%;
                  font-size: 1rem;
                  font-weight: 400;
                  color: #333333;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  padding-right: 1rem /* 16/16 */;
                }
                .cover-img {
                  width: 40%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
