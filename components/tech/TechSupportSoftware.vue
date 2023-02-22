<template>
  <div class="component-container">
    <div class="software-list">
      <div v-for="(s, id) in sotfwares" :key="id" class="software">
        <div class="title">{{ s.title }}</div>
        <div class="download-btn" @click="handleDownload(software)">
          <span class="on-show">
            <i class="el-icon-download"></i>
          </span>
          <!-- <span class="on-hover-show">{{ btnText }}</span> -->
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechSupportSoftware',
  data() {
    return {
      btnText: '下载',
      sotfwares: [
        {
          id: 0,
          title: 'Software文件标题文字占位区域文件标题文字占位区域文件标题文字占位',
          downloadUrl: '',
        },
        {
          id: 1,
          title: '文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 2,
          title: '文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 3,
          title: '文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 4,
          title: '文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
        {
          id: 5,
          title: '文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
          downloadUrl: '',
        },
      ]
    }
  },
  methods: {
    handleDownload() {}
  }
}
</script>
<style lang="scss" scoped>
.component-container {
  .software-list {
    padding: 20px 0 40px 0;
    background: #f3f5f7;
    .software {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      margin: 10px 30px;
      border-bottom: 1px solid #e2e5e8;
      .title {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        // margin: 0 0 0 10px;
      }
      .download-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 40px;
        border: 1px solid transparent;
        background-color: #dee5f3;
        cursor: pointer;
        span {
          color: #0053a1;
        }
      }
      // .download-btn:hover {
      //   background-color: #0053a1;
      //   .on-show {
      //     display: none;
      //   }
      //   .on-hover-show {
      //     color: #fff;
      //   }
      // }
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 0 0 0;
  }
}
</style>
