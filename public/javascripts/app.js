/**
 * app.js code
 * 
 * Can handle high level stuff such as menus on every page
 * 
 */

/**
 * Run js only when page load is complete
 */
document.addEventListener('DOMContentLoaded', function (event) {

  (function () {
    'use strict';   // impose strict syntax checks on the Javascript code
    //check for support
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
      return;
    }

    var dbPromise = idb.openDb('social-db', 1, function (upgradeDb) {
      console.log('Creating object store');
      if (!upgradeDb.objectStoreNames.contains('posts')) {
        upgradeDb.createObjectStore('posts');
      }
    });
  })();

  // Register service worker if supported by browser
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }

});