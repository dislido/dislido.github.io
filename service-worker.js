const cacheName = 'helloWorld'; // 缓存的名称
const self = this;
// install 事件，它发生在浏览器安装并注册 Service Worker 时
self.addEventListener('install', () => {
/* event.waitUtil 用于在安装成功之前执行一些预装逻辑
 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
 安装成功后 ServiceWorker 状态会从 installing 变为 installed */
});

/**
为 fetch 事件添加一个事件监听器。接下来，使用 caches.match() 函数来检查传入的请求 URL 是否匹配当前缓存中存在的任何内容。如果存在的话，返回缓存的资源。
如果资源并不存在于缓存当中，通过网络来获取资源，并将获取到的资源添加到缓存中。
*/
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        const requestToCache = event.request.clone();
        return fetch(requestToCache).then((resp) => {
          if (!resp || resp.status !== 200) {
            return resp;
          }
          const responseToCache = resp.clone();
          caches.open(cacheName)
            .then((cache) => {
              cache.put(requestToCache, responseToCache);
            });
          return resp;
        });
      }),
  );
});
