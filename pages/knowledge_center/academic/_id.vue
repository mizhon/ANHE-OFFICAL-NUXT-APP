<template>
  <div class="page-content-wrapper">
    <div class="pc-only">
      <div class="academic-detail-page">
        <div class="academic-container">
          <div class="go-back" @click="goback">
            <!-- <span class="back-icon">
              <i class="el-icon-arrow-left"></i>
            </span> -->
            <span class="back-text" @click="goback">{{ gobackText }}</span>
          </div>
          <div class="video-container">
            <div class="main-video">
              <div class="title">{{ academic.title }}</div>
              <div class="video">
                <VideoPlayer :src="academic.videoPath" />
              </div>
            </div>
            <div class="videos-container">
              <div class="header">
                {{ videoListHeaderText }}
              </div>
              <div class="video-list">
                <div v-for="(v, i) in videos" :key="i" class="video">
                  <div class="video__cover">
                    <img :src="v.coverImg" alt="">
                  </div>
                  <div class="video__desc">
                    <span>{{ v.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-only">
      <div class="academic-detail-page">
        <div class="academic-container">
          <div class="header">
            <div class="title-section">
              <span class="back-icon" @click="goback">
                <i class="el-icon-arrow-left"></i>
              </span>
              <span class="title">{{ academic.title }}</span>
            </div>
            <div class="timestamp">{{ academic.year }}年{{ academic.date }}</div>
          </div>
          <div class="video-container">
            <VideoPlayer :src="academic.videoPath" />
          </div>
        </div>
      </div>
    </div>
    <AppFooter :position="position" />
  </div>
</template>
<script>
import VideoPlayer from 'nuxt-video-player';
import AppFooter from '~/components/common/AppFooter.vue';

export default {
  name: 'Academic',
  components: {
    AppFooter,
    VideoPlayer
  },
  layout: 'normal',
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      // mobile端数据
      academic: {
        id: 0,
        title: '文件标题文字占位区字区域文件标题件标题件标题件标题',
        timestamp: '',
        year: '2023', // 后续直接用时间戳转换
        date: '2月4日', // 后续直接用时间戳转换
        summary: '此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字',
        coverImg: `/imgs/knowledge/knowledge-video-img-cover-02.png`,
        videoPath: `/videos/windmill.mp4`
      },
      // PC端数据
      gobackText: '返回上一页',
      videoListHeaderText: '其它视频',
      videos: [
        {
          id: 0,        // 视频id
          title: '视频标题文字111',    // 视频标题
          coverImg: `/imgs/knowledge/video_cover_img_01.png`, // 视频封面图片
          duration: '', // 播放时长
        },
        {
          id: 1,        // 视频id
          title: '视频标题文字222',    // 视频标题
          coverImg: `/imgs/knowledge/video_cover_img_02.png`, // 视频封面图片
          duration: '', // 播放时长
        },
        {
          id: 2,        // 视频id
          title: '视频标题文字333',    // 视频标题
          coverImg: `/imgs/knowledge/video_cover_img_03.png`, // 视频封面图片
          duration: '', // 播放时长
        }
      ],
      position: 'relative'
    }
  },
  methods: {
    goback() {
      this.$router.push({
        path: '/knowledge_center'
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.pc-only .academic-detail-page, .mobile-only .academic-detail-page {
  padding-top: 60px;
}
// PC端样式
@media only screen and (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
  .page-content-wrapper {
    .pc-only {
      .academic-detail-page {
        display: flex;
        justify-content: center;
        align-items: center;
        .academic-container {
          width: 55%;
          height: 100%;
          min-height: 635px;
          .go-back {
            display: flex;
            align-items: center;
            padding: 20px 10px;
            .back-icon {
              margin: 0  10px;
            }
            .back-icon, .back-text {
              font-size: 16px;
              font-weight: 500;
              color: #1D1D1D;
              &:hover {
                cursor: pointer;
                color: #0053A1;
              }
            }
          }
          .video-container {
            display: flex;
            align-items: center;
            background: #333;
            width: 100%;
            height: 500px;
            .main-video {
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              width: 100%;
              height: 100%;
              .title {
                font-size: 16px;
                font-weight: 500;
                color: #fff;
                padding: 0 15px 20px 15px;
              }
            }

            .videos-container {
              display: flex;
              justify-content: center;
              flex-direction: column;
              max-width: 280px;
              min-width: 260px;
              background: #333;
              height: 500px;
              .header {
                padding: 30px 15px 15px 15px;
                font-size: 16px;
                font-weight: 500;
                color: #fff;
              }
              .video-list {
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow-x: hidden;
                overflow-y: auto;
                height: 100%;
                .video {
                  margin-bottom: 20px;
                  &__cover {
                    padding: 0 10px;

                  }
                  &__desc {
                    padding-top: 5px;
                    font-size: 12px;
                    margin-left: 10px;
                    color: #cfcfcf;
                  }
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
  .page-content-wrapper {
    background: #21201F;
    .mobile-only {
      .academic-detail-page {
        .academic-container {
          .header {
            .title-section {
              display: flex;
              align-items: center;
              color: #fff;
              // margin: 20px 10px 0 10px;
              margin: 1.25rem /* 20/16 */.625rem /* 10/16 */0 .625rem /* 10/16 */;
              .back-icon {
                font-size: 1.5rem /* 24/16 */;
                padding: 0 .625rem /* 10/16 */;
              }
              .title {
                font-size: 1.0625rem /* 17/16 */;
                font-weight: 400;
                color: #fff;
                line-height: 1.5rem /* 24/16 */;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
            }
            .timestamp {
              font-size: .75rem /* 12/16 */;
              font-weight: 400;
              color: #999999;
              line-height: 1.5rem /* 24/16 */;
              margin: 0 .625rem /* 10/16 */ .625rem /* 10/16 */ .625rem /* 10/16 */;
              padding: 0 2.5rem /* 40/16 */;
            }
          }
        }

        .video-container {
          padding: 100px 20px 50px 20px;
        }
      }
    }
  }
}

</style>
