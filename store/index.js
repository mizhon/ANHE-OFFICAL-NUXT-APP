export const state = () => ({
  activeMenuIndex: 0, // 默认页面索引为0，表示默认首页激活
  lang: 'zh-cn', // 默认语言为中文
})

export const mutations = {
  SET_ACTIVE_MENU_INDEX(state, activeMenuIndex) {
    // eslint-disable-next-line no-console
    console.log('[$store] active menu: --->', activeMenuIndex)
    state.activeMenuIndex = activeMenuIndex;
  },
  SET_LANGUAGE(state, lang) {
    // eslint-disable-next-line no-console
    console.log('[$store] current language: --->', lang)
    state.lang = lang
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
