import { matchPath } from 'react-router';

window.matchPath = matchPath;
export const config = {
  // hash or browser
  routeType: 'hash',
};

/**
 * @deprecated
 * @param {Object} routePath routePath
 */
export function getRouteSelectKey(routePath) {
  const k = Object.entries(routePath);
  const path = window.location.hash;
  const prefix = '#';
  return k.find(it => path.startsWith(`${prefix}${it[1]}`))?.[1];
}

/**
 * 获取当前匹配的子路由path
 * @param {ReactDOM} routerSwitch Switch DOM
 */
export function getDefaultSelectedKey(routerSwitch) {
  const routeProps = routerSwitch.props.children.map(it => it.props);
  const path = window.location.hash.substring(1);
  const matchedRoute = routeProps.find(it => matchPath(path, it));
  return matchedRoute?.path;
}

export function linkProps(to) {
  return {
    to,
    replace: window.location.hash === `#${to}`,
  };
}
