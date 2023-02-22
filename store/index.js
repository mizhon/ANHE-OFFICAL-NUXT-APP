export const state = () => ({
  activeMenuIndex: 0
})

export const mutations = {
  SET_ACTIVE_MENU_INDEX(state, activeMenuIndex) {
    // eslint-disable-next-line no-console
    console.log('[$store] active menu: --->', activeMenuIndex)
    state.activeMenuIndex = activeMenuIndex;
  }
}
