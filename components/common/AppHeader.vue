<template>
  <div class="app-header">
    <header class="header-container">
      <AppLogo :path="logoPath" :width="100" :height="50" />
      <div class="menu-list">
        <div v-for="(menu, idx) in menus" :key="idx" class="menu-item" :class="[activeMenuIndex === menu.idx ? 'active': '']" @click="handleSelectedMenu(menu)">
          <NuxtLink :to="`${menu.route}`">{{ menu.name }}</NuxtLink>
          <!-- 下滑线标记 -->
          <span></span>
        </div>
        <div class="lang-switcher">
          <el-button
            type="text"
            style="font-size: 16px; color: #fff;"
            @click="switchLanguage">
            {{ currentLangText }}
          </el-button>
        </div>
      </div>
      <!-- 在大尺寸 > 768px 屏幕上不显示 -->
      <div class="toggle-button" @click="handleToggle">
        <img :src="toggleIcon" alt="" width="24" height="24" />
      </div>
    </header>
    <!-- 在大尺寸屏幕上不显示 -->
    <AppSidebar :menus="menus" :is-open="isOpen" @toggle="getToggleStatus" />
  </div>
</template>
<script>
import AppLogo from '~/components/common/AppLogo.vue'
import AppSidebar from '~/components/common/AppSidebar.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppSidebar
  },
  data() {
    return {
      logoPath: '/logos/anhe-topbar-logo.svg',
      toggleIcon: '/icons/m_toggle.svg',
      activeMenuIndex: 0, // 默认首页激活
      menus: [
        { idx: 0, name: '首页', route: '/' },
        { idx: 1, name: '产品系列', route: '/product_series' },
        { idx: 2, name: '技术支持', route: '/tech_support' },
        { idx: 3, name: '知识中心', route: '/knowledge_center' },
        { idx: 4, name: '新闻动态', route: '/media_news' },
        { idx: 5, name: '关于我们', route: '/about_us' },
      ],
      currentLangText: 'English',
      isOpen: false, // 默认小尺寸菜单收起
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log('AppHeader $store: --->', this.$store.state)
    this.activeMenuIndex = this.$store.state.activeMenuIndex;

  },
  methods: {
    handleSelectedMenu(menu) {
      this.activeMenuIndex = menu.idx;
      this.$store.commit('SET_ACTIVE_MENU_INDEX', menu.idx)
    },
    handleToggle() {
      this.isOpen = !this.isOpen;
      // eslint-disable-next-line no-console
      console.log('[AppHeader] handleToggle method: -- open status: ', this.isOpen)
    },
    getToggleStatus(status) {
      // eslint-disable-next-line no-console
      console.log('[AppHeader] getToggleStatus method: -- sidebar toggle status: ', status)
      this.isOpen = status;
    },
    switchLanguage() {
      // todo
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
  background: #21201f;
  .header-container {
    .menu-list {
      .lang-switcher{
        display: flex;
        justify-content: center;
        width: 100px;
      }
    }
  }
}

// PC端样式
@media screen and (min-width: 769px) {
  .app-header {
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

      .toggle-button {
        display: none !important;
      }
    }
  }
}

// 移动端样式
@media only screen and (max-width: 768px) {
  .app-header {
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .menu-list {
        display: none !important;
      }
      .toggle-button {
        cursor: pointer;
        margin: 0 30px;
      }
    }
  }
}
</style>
