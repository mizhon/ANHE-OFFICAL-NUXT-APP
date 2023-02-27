<template>
  <div class="knowledge-academic-card-container">
    <div class="pc-only">
      <div class="knowledge-academic-list">
        <!-- <div v-for="(academic, index) in academics" :key="index" class="academic-card"> -->
          <div v-for="(academic, index) in academicList" :key="index" class="academic-card">
          <div class="date-section">
            <span class="date">{{ academic.date }}</span>
            <span class="year">{{ academic.year }}</span>
          </div>
          <div class="academic-info-section">
            <div class="info-container">
              <div class="info">
                <div class="content">
                  <div class="title">{{ academic.title }}</div>
                  <div class="summary">{{ academic.summary }}</div>
                </div>
                <div class="detail-btn">
                  <el-button type="primary" style="width: 100%" @click="clickToDetail(academic)">{{ detailBtnText }}</el-button>
                </div>
              </div>
            </div>
            <div class="video-container">
              <div class="cover" @click="clickToDetail(academic)">
                <img class="base-img" :src="academic.coverImg" alt="" width="100%" height="100%" />
                <img class="icon-img" :src="playIcon" alt="" width="10%" height="10%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-only">
      <div class="m-knowledge-academic-list">
        <div v-for="(academic, idx) in academicList" :key="idx" class="academic-card">
          <div class="video-container">
            <div class="cover" @click="clickToDetail(academic)">
              <img class="base-img" :src="academic.coverImg" alt="" width="100%" height="100%" />
              <img class="icon-img" :src="playIcon" alt="" width="10%" height="10%" />
            </div>
          </div>
          <div class="info-container">
            <div class="title">{{ academic.title }}</div>
            <!-- 后续用时间戳替换 -->
            <div class="timestamp">{{ academic.year }}年{{ academic.date }}</div>
          </div>
        </div>
      </div>
      <!-- 点击查看更多 -->
      <div class="show-more">
        <span>{{ mShowMoreText }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KnowledgeAcademicList',
  props: {
    academics: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      detailBtnText: '查看详情',
      playIcon: `/imgs/knowledge/knowledge-video-play-btn-img.png`,
      academicList: [
        {
          id: 0,
          timestamp: '',
          year: '2023', // 后续直接用时间戳转换
          date: '2月4日', // 后续直接用时间戳转换
          title: '视频标题文字',
          summary: '此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字',
          coverImg: `/imgs/knowledge/knowledge-video-img-cover-02.png`
        },
        {
          id: 1,
          timestamp: '',
          year: '2023', // 后续直接用时间戳转换
          date: '2月3日', // 后续直接用时间戳转换
          title: '视频标题文字',
          summary: '此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字',
          coverImg: `/imgs/knowledge/knowledge-video-img-cover-03.png`
        },
        {
          id: 2,
          timestamp: '',
          year: '2023', // 后续直接用时间戳转换
          date: '2月3日', // 后续直接用时间戳转换
          title: '视频标题文字',
          summary: '此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字',
          coverImg: `/imgs/knowledge/knowledge-video-img-cover-03.png`
        },
        {
          id: 3,
          timestamp: '',
          year: '2023', // 后续直接用时间戳转换
          date: '2月3日', // 后续直接用时间戳转换
          title: '视频标题文字',
          summary: '此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字',
          coverImg: `/imgs/knowledge/knowledge-video-img-cover-03.png`
        },
      ],
      mShowMoreText: '点击查看更多'
    }
  },
  created() {
    // eslint-disable-next-line no-console
    // console.log('academics', this.academics)
  },
  methods: {
    clickToDetail(academic) {
      // eslint-disable-next-line no-console
      console.log('[knowledge academic] --->', academic)
      this.$router.push({
        path: `/knowledge_center/academic/${academic.id}`,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.knowledge-academic-card-container {
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
// PC端样式
@media only screen and (min-width: 769px) {
  ::v-deep .el-button {
    border-radius: 0;
  }

  ::v-deep .el-button:hover {
    background-color: #0053A1;
    color: #fff;
  }

  ::v-deep .el-button--primary {
    background-color: #fff;
    border-color: #0053A1;
    color: #0053A1;
  }

  .mobile-only {
    display: none !important;
  }
  .knowledge-academic-card-container {
    .pc-only {
      .knowledge-academic-list {
        overflow-y: auto;
        .academic-card {
          display: flex;

          .date-section {
            display: flex;
            flex-direction: column;
            width: 180px;
            white-space: nowrap;
            .date {
              font-size: 24px;
              font-weight: 500;
              color: #1d1d1d;
            }
            .year {
              height: 13px;
              font-size: 16px;
              font-weight: 400;
              color: #999999;
              margin-top: 10px;
            }
          }
          .academic-info-section {
            display: flex;
            width: 100%;
            background: #f4f7ff;
            margin-bottom: 40px;
            .info-container {
              display: flex;
              flex-direction: column;
              // justify-content: space-around;
              padding-top: 40px;
              width: 50%;
              .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                .content {
                  .title {
                    font-size: 20px;
                    font-weight: 500;
                    color: #0053A1;
                    margin: 10px 40px 20px 40px;
                  }
                  .summary {
                    font-size: 14px;
                    font-weight: 400;
                    color: #333333;
                    line-height: 21px;
                    margin: 30px 40px;
                  }
                }

                .detail-btn {
                  margin: 10px 40px 45px 40px;
                }
              }
            }
            .video-container {
              width: 50%;
              .cover {
                position: relative;
                margin: 40px 0;
                top: 0;
                left: 0;
                cursor: pointer;
                .base-img {
                  position: relative;
                }
                .icon-img {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 40px;
                  height: 40px;
                  transform: translate(-50%, -50%);
                }
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

  .knowledge-academic-card-container {
    .mobile-only {
      .m-knowledge-academic-list {
        .academic-card {
          margin: 20px 20px 40px 20px;
          .video-container {
            width: 100%;
            .cover {
              position: relative;
              top: 0;
              left: 0;
              .base-img {
                position: relative;
              }
              .icon-img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 40px;
                height: 40px;
                transform: translate(-50%, -50%);
              }
            }
          }
          .info-container {
            padding: 10px 20px 20px 20px;
            background: #fff;
            .title {
              font-size: 22px;
              font-weight: 400;
              color: #333333;
              line-height: 40px;
            }
            .timestamp {
              font-size: 16px;
              font-weight: 400;
              color: #999999;
              line-height: 24px;
            }
          }
        }
      }

      .show-more {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 400;
        color: #666666;
        padding: 30px 0 60px 0
      }
    }
  }
}
</style>
