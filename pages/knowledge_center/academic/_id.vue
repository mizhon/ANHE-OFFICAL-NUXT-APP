<template>
  <div class="page-content-wrapper">
    <div class="pc-only">
      <div class="academic-detail-page">
        PC Only
      </div>
    </div>
    <div class="mobile-only">
      <div class="academic-detail-page">
        <div class="academic-container">
          <div class="header">
            <div class="title-section">
              <span class="back-icon">
                <i class="el-icon-arrow-left"></i>
              </span>
              <span class="title">{{ academic.title }}</span>
            </div>
            <div class="timestamp">{{ academic.year }}年{{ academic.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'normal',
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      academic: {
        id: 0,
        title: '文件标题文字占位区字区域文件标题件标题件标题件标题',
        timestamp: '',
        year: '2023', // 后续直接用时间戳转换
        date: '2月4日', // 后续直接用时间戳转换
        summary: '此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字此处添加视频说明性文字',
        coverImg: `/imgs/knowledge/knowledge-video-img-cover-02.png`
      }
    }
  },
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
              margin: 20px 10px 0 10px;
              .back-icon {
                font-size: 24px;
                padding: 0 10px;
              }
              .title {
                font-size: 24px;
                font-weight: 400;
                color: #fff;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
            }
            .timestamp {
              font-size: 18px;
              font-weight: 400;
              color: #999999;
              line-height: 48px;
              margin: 0 10px 10px 10px;
              padding: 0 40px;
            }
          }
        }
      }
    }
  }
}

</style>
