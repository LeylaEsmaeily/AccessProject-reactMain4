self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
  });
  
  self.addEventListener('fetch', (event) => {
    // می‌توانید کشینگ اضافه کنید، فعلاً ساده بگذارید
    event.respondWith(fetch(event.request));
  });
  