const cacheName = 'persit19-cache-v2';
const filesToCache = [
  'persit19tambusai.github.io/persit19/',
  'persit19tambusai.github.io/persit19/index.html',
  'persit19tambusai.github.io/persit19/css/style.css',
  'persit19tambusai.github.io/persit19/css/bootstrap.min.css',
  'persit19tambusai.github.io/persit19/images/persit.png',
  'persit19tambusai.github.io/persit19/images/slider-1.jpg'
];

// Saat install — jangan hentikan jika satu file gagal
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installing and caching...');
  event.waitUntil(
    caches.open(cacheName).then(async cache => {
      for (const file of filesToCache) {
        try {
          await cache.add(file);
          console.log('[ServiceWorker] Cached:', file);
        } catch (err) {
          console.warn('[ServiceWorker] Failed to cache:', file, err);
        }
      }
    })
  );
});

// Activate — bersihkan cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== cacheName).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch handler — gunakan cache dulu, lalu jaringan
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request).catch(() => response);
    })
  );
});
