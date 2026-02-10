self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app").then(cache => {
      return cache.addAll([
        "/EXPENCE-CALCULATOR/"
      ]);
    })
  );
});
