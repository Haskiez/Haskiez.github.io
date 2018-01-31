// make sure document has loaded
document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        
        // get the settings button
        var settingsBtn = document.getElementsByClassName("settings-button")[0];
        var settingsMenuShow = 0;
        settingsBtn.addEventListener("click", function() {
            if (settingsMenuShow == 0) {
                document.getElementById("settings-menu").style.display = "inline-block";
                settingsMenuShow = 1;
            }
            else {
                document.getElementById("settings-menu").style.display = "none";
                settingsMenuShow = 0;
            }
        });
    }
}
