<template>
  <div class="page-content-wrapper">
    <section class="product-series-container">
       <!-- TODO: 优化为通用组件 CommonNavTab.vue -->
      <div class="nav-tabs">
        <div class="tab-container">
          <div v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="[activeTabIndex === index ? 'active-tab' : '']" @click="handleTabClick(index)">
            <div class="tab-label">{{ tab.label }}</div>
            <div class="tab-pointer">
              <div class="trangle"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-container">
        <ProductDetail :info="productInfo" />
      </div>
    </section>
    <!-- <CommonFooter /> -->
  </div>
</template>
<script>
// import CommonFooter from '@/components/CommonFooter.vue'
import ProductDetail from '@/components/product/ProductDetail.vue'

export default {
  name: 'ProductSeriesPage',
  components: {
    // CommonFooter,
    // CommonNavTab,
    ProductDetail,
  },
  layout: 'normal',
  data() {
    return {
      activeTabIndex: 0, // 默认激活的Tab索引
      tabs: [
        { id: 0, label: '稀释制冷机' },
        { id: 1, label: '原子粒显微镜' },
        { id: 2, label: '综合实验平台' }
      ],
      productInfo: {
        bannerImg: `/imgs/product/banner_img.png`,
        intro: `第二次量子革命意味着人们可以直接对量子波函数进行操作。为了保证波函数的相干性，操作往往需要在极低温环境下进行。4K（-269℃）以下温区的极低温仪器设备对于前沿科学研究、技术应用、国家安全具有重要意义。随着第二次量子革命的都来，极低温仪器设备的市场面临爆发式增长。\n\n在可以预见的未来稀释制冷机是实现超导量子计算低温环境的唯一选择。可以达到10mK温度的稀释制冷机是现代量子科学研究与量子技术发展的核心设备，广泛应用于量子材料的物性研究、量子计算的探索、量子传感器的应用等领域。国内对稀释制冷机的需求正在迅速增长，大约占到了全球份额的30%，每年销售额约2亿元。美国的Form Factor、英国的Oxford Instruments、芬兰的Bluefors占据了稀释制冷机的绝大部份市场份额，并对中国的核心单位禁运。`,
        highLightIntro:`经过团队多年努力，安禾仪器已经陈工研发了代表极底温技术最高水平的稀释制冷机，突破了mK级制冷关键技术，打破国外垄断。`,
        paramDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
        componentDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
        footerImgs: [
          { id: 0, path: `/imgs/product/bottom_img_1.png` },
          { id: 1, path: `/imgs/product/bottom_img_2.png` },
          { id: 2, path: `/imgs/product/bottom_img_3.png` }
        ]
      },
      products: [
        {
          bannerImg: `/imgs/product/banner_img.png`,
          intro: `第二次量子革命意味着人们可以直接对量子波函数进行操作。为了保证波函数的相干性，操作往往需要在极低温环境下进行。4K（-269℃）以下温区的极低温仪器设备对于前沿科学研究、技术应用、国家安全具有重要意义。随着第二次量子革命的都来，极低温仪器设备的市场面临爆发式增长。\n\n在可以预见的未来稀释制冷机是实现超导量子计算低温环境的唯一选择。可以达到10mK温度的稀释制冷机是现代量子科学研究与量子技术发展的核心设备，广泛应用于量子材料的物性研究、量子计算的探索、量子传感器的应用等领域。国内对稀释制冷机的需求正在迅速增长，大约占到了全球份额的30%，每年销售额约2亿元。美国的Form Factor、英国的Oxford Instruments、芬兰的Bluefors占据了稀释制冷机的绝大部份市场份额，并对中国的核心单位禁运。`,
          highLightIntro:`经过团队多年努力，安禾仪器已经陈工研发了代表极底温技术最高水平的稀释制冷机，突破了mK级制冷关键技术，打破国外垄断。`,
          paramDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
          componentDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
          footerImgs: [
            { id: 0, path: `/imgs/product/bottom_img_1.png` },
            { id: 1, path: `/imgs/product/bottom_img_2.png` },
            { id: 2, path: `/imgs/product/bottom_img_3.png` }
          ]
        },
        {
          bannerImg: `/imgs/product/banner_img.png`,
          intro: `(原子粒显微镜) 第二次量子革命意味着人们可以直接对量子波函数进行操作。为了保证波函数的相干性，操作往往需要在极低温环境下进行。4K（-269℃）以下温区的极低温仪器设备对于前沿科学研究、技术应用、国家安全具有重要意义。随着第二次量子革命的都来，极低温仪器设备的市场面临爆发式增长。\n\n在可以预见的未来稀释制冷机是实现超导量子计算低温环境的唯一选择。可以达到10mK温度的稀释制冷机是现代量子科学研究与量子技术发展的核心设备，广泛应用于量子材料的物性研究、量子计算的探索、量子传感器的应用等领域。国内对稀释制冷机的需求正在迅速增长，大约占到了全球份额的30%，每年销售额约2亿元。美国的Form Factor、英国的Oxford Instruments、芬兰的Bluefors占据了稀释制冷机的绝大部份市场份额，并对中国的核心单位禁运。`,
          highLightIntro:`经过团队多年努力，安禾仪器已经陈工研发了代表极底温技术最高水平的稀释制冷机，突破了mK级制冷关键技术，打破国外垄断。`,
          paramDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
          componentDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
          footerImgs: [
            { id: 0, path: `/imgs/product/bottom_img_1.png` },
            { id: 1, path: `/imgs/product/bottom_img_2.png` },
            { id: 2, path: `/imgs/product/bottom_img_3.png` }
          ]
        },
        {
          bannerImg: `/imgs/product/banner_img.png`,
          intro: `(综合实验平台) 第二次量子革命意味着人们可以直接对量子波函数进行操作。为了保证波函数的相干性，操作往往需要在极低温环境下进行。4K（-269℃）以下温区的极低温仪器设备对于前沿科学研究、技术应用、国家安全具有重要意义。随着第二次量子革命的都来，极低温仪器设备的市场面临爆发式增长。\n\n在可以预见的未来稀释制冷机是实现超导量子计算低温环境的唯一选择。可以达到10mK温度的稀释制冷机是现代量子科学研究与量子技术发展的核心设备，广泛应用于量子材料的物性研究、量子计算的探索、量子传感器的应用等领域。国内对稀释制冷机的需求正在迅速增长，大约占到了全球份额的30%，每年销售额约2亿元。美国的Form Factor、英国的Oxford Instruments、芬兰的Bluefors占据了稀释制冷机的绝大部份市场份额，并对中国的核心单位禁运。`,
          highLightIntro:`经过团队多年努力，安禾仪器已经陈工研发了代表极底温技术最高水平的稀释制冷机，突破了mK级制冷关键技术，打破国外垄断。`,
          paramDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
          componentDesc: `制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上\n\n制冷功率：在20mK时已经达到10µW以上`,
          footerImgs: [
            { id: 0, path: `/imgs/product/bottom_img_1.png` },
            { id: 1, path: `/imgs/product/bottom_img_2.png` },
            { id: 2, path: `/imgs/product/bottom_img_3.png` }
          ]
        }
      ]
    }
  },
  methods: {
    handleTabClick(index) {
      this.activeTabIndex = index;
      this.productInfo = this.products[index];
    }
  }
}
</script>
<style lang="scss" scoped>
.product-series-container {
  display: flex;
  justify-content: center;
  margin: 0 340px;
  padding-top: 60px;
  .nav-tabs {
    flex-grow: 0;
    width: 250px;
    min-width: 250px;
    .tab-container {
      padding-top: 20px;
      height: 100%;
      background-color: $navbarBackgroundColor;

      .tab-item {
        display: flex;
        align-items: center;
        justify-content : space-between;
        cursor: pointer;
        color: $navTabText;
        height: 50px;

        .tab-label {
          padding-left: 40px;
        }

        .tab-pointer {
          height: 50px;
        }

        &:hover {
          color: $menuActiveText;
          font-weight: 500;
        }
      }

      .active-tab {
        color: $menuActiveText;
        background-color: $white;
        font-weight: 500;
        .tab-pointer {
          width: 6px;
          background-color: $menuActiveText;
          .trangle {
            position: relative;
            width: 0;
            height: 0;
            top: 14px;
            border: 10px solid transparent;
            border-left: 10px solid $menuActiveText;
          }
        }
      }
    }
  }
  .info-container {
    display: flex;
    justify-content: center;

    margin-left: 5px;
    width: auto;
    min-width: 400px;
    flex-grow: 1;
  }
}
</style>
