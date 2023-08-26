chrome.action.onClicked.addListener((tab) => {

  //https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension
  //get url

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    if (!String(url).includes("chrome://")){
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['script1.js']
      });
    }
  });

});
