export const state = () => ({
  activeTabIndex: 0
})

export const mutations = {
  SET_ACTIVE_TAB_INDEX(state, activeTabIndex) {
    // eslint-disable-next-line no-console
    console.log('active tab: --->', activeTabIndex)
    state.activeTabIndex = activeTabIndex;
  }
}
