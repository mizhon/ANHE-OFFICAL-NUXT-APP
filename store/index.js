export const state = () => ({
  activeMenuIndex: 0, // 默认页面索引为0，表示默认首页激活
})

export const mutations = {
  SET_ACTIVE_MENU_INDEX(state, activeMenuIndex) {
    // eslint-disable-next-line no-console
    console.log('[$store] active menu: --->', activeMenuIndex)
    state.activeMenuIndex = activeMenuIndex;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}