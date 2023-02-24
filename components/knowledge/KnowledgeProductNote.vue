<template>
  <div class="knowledge-product-note-wrapper">
    <div class="pc-only">
      <div class="product-note-list">
        <div v-for="(item, index) in currentProps" :key="index" class="note-card-container">
          <div class="note-card">
            <div class="main-title">{{ item.mainHeaderTitle }}</div>
            <div class="note-list">
              <div v-for="(note, idx) in item.notes" :key="idx" class="note-container" @click="handleClick(note)">
                <div class="cover-img">
                  <img :src="note.coverImg" alt="">
                </div>
                <div class="info">
                  <div class="info__title">
                    {{ note.title }}
                  </div>
                  <div class="info__summary">
                    {{ note.summary }}
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
      <div class="product-note-list">
        <div v-for="(item, index) in currentProps" :key="index" class="note-card-container">
          <div class="note-card">
            <div class="header-container">
              <div class="main-title">{{ item.mainHeaderTitle }}</div>
              <div class="show-more-icon">
                <span>{{ showMoreText }}<i class="el-icon-arrow-right"></i></span>
              </div>
            </div>
            <div class="note-list">
              <div v-for="(note, idx) in item.notes" :key="idx" class="note-container" @click="handleClick(note)">
                <div class="note-title">
                  {{ note.title }}
                </div>
                <div class="cover-img">
                  <img :src="note.coverImg" alt="">
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
  name: 'KnowledgeProductNote',
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
    }
  },
  methods: {
    handleClick(note) {
      // eslint-disable-next-line no-console
      console.log('note: --->', note)
      this.$router.push({
        path: `/knowledge_center/note/${note.id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.knowledge-product-note-wrapper {
  img {
    max-width: 100%;
    min-width: 100%;
  }
}

// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }

  .knowledge-product-note-wrapper {
    .pc-only {
      .product-note-list {
        .note-card-container {
          .note-card {
            display: flex;
            flex-direction: column;
            .main-title {
              font-size: 24px;
              font-weight: 500;
              color: #333333;
              margin: 10px 10px 30px 10px;
            }
            .note-list {
              display: flex;
              flex-direction: row;
              align-items: center;
              // justify-content: center;
              flex-wrap: wrap;
              width: 100%;
              .note-container {
                margin: 0 10px 10px 10px;
                border: 1px solid #eee;
                width: 30%; // 33% wiil truncate
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
      }
    }
  }

}

// 移动端样式
@media only screen and (max-width: 768px) {
  .pc-only {
    display: none !important;
  }

  .knowledge-product-note-wrapper {
    .mobile-only {
      .product-note-list {
        .note-card-container {
          background: #fff;
          .note-card {
            margin: 20px;
            padding: 20px 0;
            .header-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 0 20px 0;
              .main-title {
                font-size: 20px;
                font-weight: 500;
                color: #333333;
              }
              .show-more-icon {
                font-size: 16px;
                font-weight: 400;
                color: #666666;
              }
            }
            .note-list {
              .note-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0 15px 0;
                border-bottom: 1px solid #E4E4E4;
                margin-bottom: 15px;
                .note-title {
                  width: 60%;
                  font-size: 16px;
                  font-weight: 400;
                  color: #333333;
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
