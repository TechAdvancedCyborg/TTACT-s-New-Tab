chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({bg-color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });