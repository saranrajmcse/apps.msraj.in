// self.addEventListener('install', function(event) {
//     event.waitUntil(
//       caches.open('image-gallery-v1').then(function(cache) {
//         return cache.addAll([
//           '/',
//           'index.html',
//           'styles.css',
//           'script.js',
//           'icon.png',
//           'icon512.png'
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         return response || fetch(event.request);
//       })
//     );
//   });

  // Cached core static resources 
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", 'icon.png']);
        })
    );
});

// Fatch resources
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
  