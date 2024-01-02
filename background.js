chrome.action.onClicked.addListener(function(tab) { 
    chrome.storage.sync.get(["isEnabled"]).then((result) => {
        if(result.isEnabled != null){
            let newValue = !result.isEnabled
            chrome.storage.sync.set({"isEnabled": newValue})
        }
        else {
            chrome.storage.sync.set({"isEnabled": false});
        }
    })
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.requestMessage === "getEnabledStatus"){
        chrome.storage.sync.get(["isEnabled"]).then((result) => {
            sendResponse({enabledStatus: result.isEnabled});  
        })
        return true
     }
    }
);  