/* eslint-disable no-restricted-globals  */
/* eslint-disable  */

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https:.*min.(css|js)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('http://.*:3004/api/v1/'),
  new workbox.strategies.NetworkFirst()
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
