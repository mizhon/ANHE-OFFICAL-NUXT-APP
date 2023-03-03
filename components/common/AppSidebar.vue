<template>
  <div class="app-sidebar" :class="[isOpen ? '' : 'hidden']">
    <div class="menu-container">
      <div class="fold-button" @click="foldSidebar">
        <img :src="foldIcon" alt="" width="24" height="24" />
      </div>
      <div class="menu-list">
        <div v-for="(menu, idx) in menus" :key="idx" class="menu-item">
          <!-- <NuxtLink :to="`${menu.route}`">{{ menu.name }}</NuxtLink> -->
          <span @click="handleMobileSelectedMenu(menu)">{{ menu.name }}</span>
        </div>
      </div>
      <div class="lang-switch">
        <span @click="langSwitch('en')">{{ englishText }}</span>
        <span class="line"></span>
        <span @click="langSwitch('zh')">{{ chineseText }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppSidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: true
    },
    menus: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      foldIcon: '/icons/m_fold.svg',
      sidebarOpen: false,
      englishText: 'English',
      chineseText: '简体'
    }
  },
  methods: {
    foldSidebar() {
      this.$emit('toggle', false)
      this.sidebarOpen = !this.sidebarOpen;
    },
    handleMobileSelectedMenu(menu) {
      // 修改激活菜单状态
      this.$store.commit('SET_ACTIVE_MENU_INDEX', menu.idx);
      // 关闭菜单
      this.foldSidebar();
      this.$router.push({
        path: menu.route
      });
    },
    langSwitch(lang) {
      // eslint-disable-next-line no-console
      console.log(lang);
      // 关闭菜单
      this.foldSidebar();
    }
  }
}
</script>
<style lang="scss" scoped>
// PC端样式
@media screen and (min-width: 769px) {
  .app-sidebar {
    display: none !important;
  }
}
// 移动端样式
@media only screen and (max-width: 768px) {
  .app-sidebar {
    position: fixed;
    width: 40%;
    min-width: 280px;
    right: 0;
    top: -60px;
    height: calc(100vh + 60px);
    background: $white;
    box-shadow:0 0 5px 1px #ccc;

    .menu-container {
      padding-top: 3.75rem /* 60/16 */;
      .fold-button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 3.75rem /* 60/16 */;
        margin: 0 1.875rem /* 30/16 */;
      }

      .menu-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 1.875rem /* 30/16 */;
        .menu-item {
          padding: 1.25rem /* 20/16 */;
          font-size: 1.125rem /* 18/16 */;
          a {
            text-decoration: none;
            color: $primaryText;
          }
        }
      }
      .lang-switch {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3.125rem /* 50/16 */ 0;
        .line {
          border-right: 1px solid $primaryText;
          height: .75rem /* 12/16 */;
          margin: 0 .625rem /* 10/16 */;
        }
      }
    }
  }

  .hidden {
    display: none !important;
  }
}

</style>
