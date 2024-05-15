const FILTER_PATHS = ['umdjs/xx/xx'];

export function patchRoutes({ routes, routeComponents }) {
  Object.keys(routes).forEach(key => {
    console.log('key', key);
    if (FILTER_PATHS.includes(key) || key.toUpperCase().endsWith('/README')) {
      delete routes[key];
      delete routeComponents[key];
    }
  });
}

export function patchClientRoutes({ routes }) {
  const i = routes?.[0]?.children?.findIndex(route => route.id === 'DocLayout');
  if (i === -1 || !routes[0].children[i]?.children?.length) return;
  const filterRoute = routes[0].children[i].children.filter(
    item => !(item.id.toUpperCase().endsWith('/README') || FILTER_PATHS.includes(item.id))
  );
  routes[0].children[i].children = filterRoute;
  routes[0].children[i].routes = filterRoute;
}
