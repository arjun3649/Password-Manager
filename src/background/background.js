// TODO: background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab ? "from a content script:" + sender.url : "from the extension"
  );
    console.log('====================================');
    console.log(request.uname);
    console.log('====================================');
 
 
});
let key = 'shishir'
let value=[1,2,3,4,5,6,7]
chrome.storage.sync.set({ key: value }).then(() => {
    
  
});

chrome.storage.sync.get(["key"]).then((result) => {
  console.log("Value is " + result.key+"type of"+typeof(result.key));
});