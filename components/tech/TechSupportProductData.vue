<template>
  <div class="component-container">
    <div class="product-data-list">
      <div v-for="(product, id) in products" :key="id" class="product">
        <div class="title">{{ product.title }}</div>
        <div class="download-btn" @click="handleDownload(product)">
          <div class="download-btn__text">
            <span>{{ btnText }}</span>
            <i class="el-icon-download"></i>
          </div>
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
        padding: 20px 0;
        margin: 10px 30px;
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
          &__text {
            width: 107px;
            line-height: 35px;
            text-align: center;
            color: #0053a1;
            font-size: 16px;
            span {
              display: none;
            }
            i {
              font-size: 18px;
            }
          }
          &__text:hover {
            width: 107px;
            line-height: 35px;
            text-align: center;
            color: #fff;// #0053a1;
            background-color: #0053a1;
            font-size: 16px;
            span {
              display: inline-block;
            }
            i {
              display: none;
            }
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
      // padding: 0 0 40px 0;
      padding: 0 0 1.75rem /* 28/16 */ 0;
      background: #fff;
      .product {
        padding: 1.25rem /* 20/16 */0;
        margin: .625rem /* 10/16 */1.75rem /* 28/16 */;
        .title {
          font-size: 1rem /* 16/16 */;
          // padding: 0 20px 0 0;
          padding: 0 1.25rem /* 20/16 */0 0;
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
          &__text {
            width: 6.6875rem /* 107/16 */;
            line-height: 2.1875rem /* 35/16 */;
            text-align: center;
            color: #0053a1;
            span {
              display: none;
            }
          }
          &__text:hover {
            width: 6.6875rem /* 107/16 */;
            line-height: 2.1875rem /* 35/16 */;
            text-align: center;
            color: #fff;// #0053a1;
            background-color: #0053a1;
            span {
              display: inline-block;
            }
            i {
              display: none;
            }
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
}
</style>
