<template>
  <div class="component-container">
    <div class="product-data-list">
      <div v-for="(product, id) in products" :key="id" class="product">
        <div class="title">{{ product.title }}</div>
        <div class="download-btn" @click="handleDownload(product)">
          <span class="on-show">
            <i class="el-icon-download"></i>
          </span>
        </div>
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
  name: 'TechSupportProductData',
  data() {
    return {
      btnText: '下载',
      products: [
        {
          id: 0,
          title: '文件标题文字占位区域文件标题文字占位区域文件标题文字占位区域文件标题文',
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
      ],
      checkMore: '点击查看更多'
    }
  },
  methods: {
    handleDownload() {}
  }
}
</script>
<style lang="scss" scoped>
.component-container {
  .product-data-list {
    background: #f3f5f7;
    .product {
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
      }
      .download-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        background-color: #dee5f3;
        cursor: pointer;
        span {
          display: inline-block;
          width: 100px;
          line-height: 40px;
          text-align: center;
          color: #0053a1;
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 0 0 0;
  }
}

// PC端样式
@media only screen and (min-width: 769px) {
  .component-container {
    .product-data-list {
      padding: 20px 0 40px 0;
      .product {
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .download-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          background-color: #dee5f3;
          cursor: pointer;
          span {
            color: #0053a1;
          }
        }
      }
    }

    .pagination {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 30px 0 0 0;
    }

    .show-more {
      display: none;
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .component-container {
    .product-data-list {
      padding: 0 0 40px 0;
      background: #fff;
      .product {
        .title {
          font-size: 18px;
          padding: 0 20px 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .download-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          span {
            display: inline-block;
            width: 100px;
            line-height: 40px;
            text-align: center;
            color: #0053a1;
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
      padding: 30px 0 60px 0;
      font-size: 22px;
      font-weight: 400;
      color: #666666;
      cursor: pointer;
    }
  }
}
</style>
