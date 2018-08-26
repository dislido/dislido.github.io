export const config = {
  // hash or browser
  routeType: 'hash',
};

export function getRouteSelectKey(routePath) {
  const k = Object.entries(routePath);
  const path = window.location.hash;
  const prefix = '#';
  return k.find(it => path.startsWith(`${prefix}${it[1]}`))?.[1];
}
