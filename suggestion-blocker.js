  document.addEventListener('yt-navigate-finish', () => {
    (async () => {
        const response = await chrome.runtime.sendMessage({requestMessage: "getEnabledStatus"});    
        if(response.enabledStatus){
            let secondary = document.getElementById("secondary");
            if (secondary) {
                secondary.parentNode.removeChild(secondary);
           }
        }
      })();
})

