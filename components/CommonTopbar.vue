<template>
  <section class="top-navbar-container">
    <header class="header-content">
      <TrademarkLogo :path="logoPath" :width="100" :height="50" class="logo" />
      <div class="menu-list">
        <div v-for="(menu, idx) in menus" :key="idx" @click="handleSelectedItem(menu, idx)">
          <div class="menu-item">
            <NuxtLink :to="`${menu.route}`">{{ menu.name }}</NuxtLink>
          </div>
        </div>
      </div>
      <div class="lang-switcher">
        <el-button
          type="text"
          style="font-size: 16px; color: #fff;"
          @click="switchLanguage">
          {{ currentLangText }}
        </el-button>
      </div>
    </header>
  </section>
</template>
<script>
export default {
  name: 'CommonTopbar',
  data() {
    return {
      logoPath: '/logos/anhe-topbar-logo.svg',
      menus: [
        { name: '首页', idx: 0, route: '/' },
        { name: '产品系列', idx: 1, route: '/product_series' },
        { name: '技术支持', idx: 2, route: '/tech_support' },
        { name: '知识中心', idx: 3, route: '/knowledge_center' },
        { name: '新闻动态', idx: 4, route: '/media_news' },
        { name: '关于我们', idx: 5, route: '/about_us' },
      ],
      currentLangText: 'English'
    }
  },
  methods: {
    handleSelectedItem(menu, idx) {
      if (this.$route.path === menu.route) {
        // todo
      } else {
        // todo
      }
    },
    switchLanguage() {}
  }
}
</script>
<style lang="scss" scoped>
.top-navbar-container {
  position: fixed;
  overflow: hidden;
  // height: 60px;
  width: 100%;
  // padding: 0 20px;
  box-shadow: 4px 2px 9px -3px rgba(0, 0, 0, 0.2);
  background: $black;
  z-index: 1000;

  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;

    .logo {
      cursor: pointer;
    }
  }
  .menu-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    .menu-item {
      padding: 20px 10px;
      color: $white;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        background: $white;
        font-weight: 800;
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
    }
  }

  .lang-switcher {
    display: flex;
    justify-content: center;
    width: 100px;

  }
}
</style>
