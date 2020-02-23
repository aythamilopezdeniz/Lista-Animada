// Show Menu

function displayMenuSetting() {
    document.getElementById("settings-container").style.display = "block";
}

document.getElementById('header-settings').addEventListener('click', function() {
    displayMenuSetting();
});

// Close Menu

function closeMenuSettings() {
    document.getElementById("settings-container").style.display = "none";
}

document.getElementById('settings-close').addEventListener('click', function() {
    closeMenuSettings();
});

// Change Theme

function changeTheme() {
    // Get Body Style
    var element = document.body.style;
    
    if(element.backgroundColor === "rgb(30, 31, 32)" || element.backgroundColor === "")
        establishTheme("white", "rgb(30, 31, 32)", "lightgray");
    else
        establishTheme("rgb(30, 31, 32)", "white", "white");
}

function establishTheme(color1, color2, color3) {
    // Background color - body
    document.getElementsByTagName("body")[0].style = "background-color: " + color1;
    // Background color - setting
    document.getElementById('settings-container').style.backgroundColor = color1;
    // Color icons header
    document.getElementById("header-settings").style = "color: " + color2;
    document.getElementById("header-theme").style = "color: " + color2;
    // Color icons settings
    document.getElementById('settings-close').style.color = color2;
    // Color title settings
    document.getElementById('settings-line').style.backgroundColor = color2;
    // document.getElementById('settings-container').style.borderRight = "2px solid " + color3;
    // Color text settings
    var setting_p = document.querySelectorAll('p');
    setting_p.forEach(value => {
        value.setAttribute('style', 'color: ' + color2);
    });
    
    // Get All the tags and change the background-color of the inputs
    var element = document.querySelectorAll(".input-style");
    element.forEach(value => {
        value.setAttribute('style', "background-color: " + color3);
    });
}

document.getElementById('header-theme').addEventListener('click', function() {
    changeTheme();
});