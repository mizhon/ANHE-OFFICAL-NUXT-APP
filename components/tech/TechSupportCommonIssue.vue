<template>
  <div class="component-container">
    <div class="issue-list">
      <div v-for="(s, id) in issues" :key="id" class="issue">
        <span class="issue__icon">
          <i class="el-icon-caret-right"></i>
        </span>
        <span class="title" @click="getIssueDetail(s)">
          {{ s.title }}
        </span>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <div class="show-more">
      <span>{{ checkMore }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechSupportCommonIssue',
  data() {
    return {
      btnText: '下载',
      issues: [
        {
          id: 0,
          title: '01.问题的标题文字占位区域问题的标题文字占位区域问题的标题文字占位区域问题的标题文字占位区域',
          downloadUrl: '',
        },
        {
          id: 1,
          title: '02.文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 2,
          title: '03.文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 3,
          title: '04.文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 4,
          title: '05.文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
      ],
      checkMore: '点击查看更多'
    }
  },
  methods: {
    handleDownload() {},
    getIssueDetail(issue) {
      // eslint-disable-next-line no-console
      console.log('[tech support common issue component] --->', issue);
      this.$emit('issue', issue)
      this.$router.push({
        path: `/tech_support/${issue.id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.component-container {
  .issue-list {
    background: #f3f5f7;
    .issue {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e5e8;
      .title {
        // font-size: 16px;
        font-weight: 400;
        color: #333333;
        // margin: 0 0 0 10px;
      }
    }
  }
}

// PC端样式
@media only screen and (min-width: 769px) {
  .component-container {
    .issue-list {
      padding: 20px 0 40px 0;
      .issue {
        padding: 20px 0;
        margin: 10px 30px;
        .title {
          font-size: 16px;
          line-height: 42px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          &:hover {
            color: #0053a1;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }
    .show-more {
      display: none;
    }

    .pagination {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 30px 0 0 0;
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .component-container {
    .issue-list {
      padding: 0 0 1.75rem /* 28/16 */ 0;
      background: #fff;
      .issue {
        padding: 1.25rem /* 20/16 */ 0;
        margin: .625rem /* 10/16 */1.875rem /* 30/16 */;
        &__icon {
          font-size: 1.5rem /* 24/16 */;
          padding-right: .625rem /* 10/16 */;
        }
        .title {
          font-size: 1rem /* 16/16 */;
          padding: 0 1.25rem /* 20/16 */ 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .pagination {
    display: none;
  }

  .show-more {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 3.75rem /* 60/16 */0;
    font-size: .9375rem /* 15/16 */;
    font-weight: 400;
    color: #666666;
    cursor: pointer;
  }
}
</style>
