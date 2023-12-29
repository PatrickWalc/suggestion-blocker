document.addEventListener('yt-navigate-finish', () => {
    let secondary = document.getElementById("secondary");
    if (secondary) {
        secondary.parentNode.removeChild(secondary);
   }
})