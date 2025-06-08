// src/utils/serviceWorker.js
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    console.log('Service worker registration available');
  }
};