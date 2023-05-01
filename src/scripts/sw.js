import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Caching the listed asset below
const assetsToCache = [
  './',
  './images/dreamy-meal-icon.svg',
  './images/hero-image.jpg',
  './images/meal-icon.svg',
  './images/app-icon/Icon-72.png',
  './images/app-icon/Icon-96.png',
  './images/app-icon/Icon-128.png',
  './images/app-icon/Icon-144.png',
  './images/app-icon/Icon-152.png',
  './images/app-icon/Icon-192.png',
  './images/app-icon/Icon-256.png',
  './images/app-icon/Icon-512.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
