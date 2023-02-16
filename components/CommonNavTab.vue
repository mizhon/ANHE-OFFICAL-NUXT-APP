<template>
  <div class="nav-tabs">
    <div class="tab-container">
      <div v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="[activeTabIndex === index ? 'active-tab' : '']" @click="handleTab(index)">
        <div class="tab-label">{{ tab.label }}</div>
        <div class="tab-pointer">
          <div class="trangle" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonNavTab',
  props: {
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    },
    activeTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeTabIndex: 0 // 默认激活的tab下标为0
    }
  },
  created() {
    // 根据父组件传入的数据做初始化
    this.activeTabIndex = this.activeTab
  },
  methods: {
    handleTab(index) {
      this.activeTabIndex = index;
      this.$emit('get-tab-index', index);
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-tabs {
  width: 250px;
  min-width: 180px;
  height: 100%;
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
</style>
