export default ({app, store, route, redirect, params, query})=>{
  // 前置路由守卫
  app.router.beforeEach((to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('[plugins] -- beforeEach路由守卫', store.state)
    let currentActiveMenuIdx = 0;
    switch(to.path) {
      case '/product_series':
        currentActiveMenuIdx = 1;
        break;
      case '/tech_support':
        currentActiveMenuIdx = 2;
        break;
      case '/knowledge_center':
        currentActiveMenuIdx = 3;
        break;
      case '/media_news':
        currentActiveMenuIdx = 4;
        break;
      case '/about_us':
        currentActiveMenuIdx = 5;
        break;
      default:
        break;
    }

    // 获取sessionStorage中store数据 有就存入
    if (sessionStorage.getItem('store')) {
      const data = JSON.parse(sessionStorage.getItem('store'));
      const keys = Object.keys(data)
      // eslint-disable-next-line no-console
      console.log('keys: --->', keys)
      // TODO: 需优化
      sessionStorage.setItem('store', JSON.stringify({
        activeMenuIndex: currentActiveMenuIdx,
        i18n: data.i18n
      }))
    }
    return next()
  });
}
