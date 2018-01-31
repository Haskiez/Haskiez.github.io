// make sure document has loaded
document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        
        // hide menu if clicked anywhere
        document.addEventListener("click", function(e) {
            var divTag = e.target.parentNode;
            var classes = divTag.classList;
            if (!(classes.contains("settings-menu") || classes.contains("settings-menu-options") || classes.contains("menu-title") || classes.contains("menu-items") || classes.contains("settings-button"))) {
                document.getElementById("settings-menu").style.display = "none";
            }
        });
        
        // get the settings button
        var settingsBtn = document.getElementsByClassName("settings-button")[0];
        var settingsMenu = document.getElementById("settings-menu");
        settingsBtn.addEventListener("click", function() {
            if (settingsMenu.style.display == "none") {
                settingsMenu.style.display = "inline-block";
            }
            else {
                settingsMenu.style.display = "none";
            }
        });
    }
}
