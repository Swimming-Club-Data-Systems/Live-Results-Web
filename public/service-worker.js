// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  '/',
  '/stylesheets/style.css',
  '/javascripts/app.js',
  '/javascripts/idb.js',
  '/javascripts/bootstrap.bundle.min.js',
  '/javascripts/jquery-3.5.0.slim.min.js'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE).then(function (cache) {
      // console.log('Opened cache');
      return cache.addAll(PRECACHE_URLS);
    }).catch(error => {
    })
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim()).catch((error) => {
      console.log(error);
    })
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // console.log(event);
  // Skip cross-origin requests, like those for Google Analytics.

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        var fetchPromise = fetch(event.request)
          .then(function (networkResponse) {
            caches.open(RUNTIME).then(function (cache) {
              cache.put(event.request, networkResponse.clone()); // here we use the clone
            });
            return networkResponse;
          })
        return cachedResponse || fetchPromise;
      })
  );
});
