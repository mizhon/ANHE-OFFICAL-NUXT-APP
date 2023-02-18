<template>
  <div class="app-header">
    <header class="header-container">
      <AppLogo :path="logoPath" :width="100" :height="50" />
      <div class="menu-list">
        <div v-for="(menu, idx) in menus" :key="idx" class="menu-item" :class="[activeMenuIndex === menu.idx ? 'active' : '']" @click="handleSelectedMenu(menu)">
          <NuxtLink :to="`${menu.route}`">{{ menu.name }}</NuxtLink>
          <!-- 下滑线标记 -->
          <span></span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import AppLogo from '~/components/common/AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo
  },
  data() {
    return {
      logoPath: '/logos/anhe-topbar-logo.svg',
      activeMenuIndex: 0, // 默认首页激活
      menus: [
        { idx: 0, name: '首页', route: '/' },
        { idx: 1, name: '产品系列', route: '/product_series' },
        { idx: 2, name: '技术支持', route: '/tech_support' },
        { idx: 3, name: '知识中心', route: '/knowledge_center' },
        { idx: 4, name: '新闻动态', route: '/media_news' },
        { idx: 5, name: '关于我们', route: '/about_us' },
      ],
    }
  },
  methods: {
    handleSelectedMenu(menu) {
      // todo
      this.activeMenuIndex = menu.idx;
    }
  }
}
</script>
<style lang="scss" scoped>
.app-header {
  position: fixed;
  // padding: 0 40px;
  width: 100%;
  height: 60px;
  z-index: 1000;
  box-shadow: 4px 2px 9px -3px rgba(0, 0, 0, 0.2);
  background: $black;
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .menu-list {
      display: flex;
      justify-content: center;
      align-items: center;
      .menu-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $white;
        cursor: pointer;
        white-space: nowrap;
        &:hover {
          background: #eee;
          font-weight: 800;
          span {
            position: relative;
            width: 48%;
            top: -10px;
            border: 1px solid transparent;
          }
          a {
            color: $menuActiveText;
          }
        }

        a {
          padding: 20px;
          text-decoration: none;
          color: $white;
        }
      }
      .active {
        background: $white;
        color: $menuActiveText;
        font-weight: 800;
        span {
          position: relative;
          width: 50%;
          top: -10px;
          border: 1px solid $menuActiveText;
        }
        a {
          color: $menuActiveText;
        } 
      }
    }
  }
}
</style>