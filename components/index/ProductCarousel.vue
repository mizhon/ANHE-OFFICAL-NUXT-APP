<template>
  <div class="product-carousel-wrapper">
    <div clsss="carousel-container">
      <!-- 左侧走马灯展示区 -->
      <el-carousel indicator-position="outside" height="400px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 右侧产品列表展示区 -->
    <div class="product-list-container">
      <!-- TODO -->
      <!-- <div v-for="card in cards" :key="card.id">
        <div class="product-card">
          {{ card.name }}
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCarousel',
  data() {
    return {
      cards: [
        { id: 0, name: 'product1', imgPath: '' },
        { id: 1, name: 'product2', imgPath: '' },
        { id: 2, name: 'product3', imgPath: '' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.product-carousel-wrapper {
  // display: flex;
  // justify-content: column;
  // align-content: space-between;
  .carousel-container {
    
  }
  .product-list-container {

  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  // line-height: 300px;
  margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>