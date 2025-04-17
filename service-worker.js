self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("velha-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "manifest.json",
        "service-worker.js",
        "som-clique.wav",
        "som-vitoria.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
