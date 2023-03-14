export default ({app}) => {
  // 获取到store
  const store = app.store

  // eslint-disable-next-line no-console
  console.log('plugins store.js: --->', store)
  // 获取sessionStorage中store数据 有就存入
  if (sessionStorage.getItem('store')) {
    store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))))
  }

  // 在页面刷新时更新store信息到sessionStorage
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('store', JSON.stringify(store.state))
  })
  window.addEventListener('pagehide', () => {
    sessionStorage.setItem('store', JSON.stringify(store.state))
  })
}
