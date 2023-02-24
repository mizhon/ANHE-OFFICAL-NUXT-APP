<template>
  <div class="knowledge-trend-wrapper">
    <div class="pc-only">
      <div class="knowledge-trend-list">
        <!-- {{ currentProps }} -->
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
      <div class="knowledge-trend-container"></div>
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
      showMoreText: '查看更多'
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
                margin: 0 10px 20px 10px;
                border: 1px solid #eee;
                width: 30%;
                cursor: pointer;
                .info {
                  &__title {
                    padding: 20px 20px 10px 20px;
                    font-size: 18px;
                    font-weight: 400;
                    color: #333333;
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
        .trend-list {

        }
        .show-more {

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
      .knowledge-trend-container {

      }
    }
  }
}
</style>
