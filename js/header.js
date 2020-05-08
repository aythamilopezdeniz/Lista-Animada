// Global variables
var block = false;

// Show Menu

function displayMenuSetting() {
    document.getElementById("settings-container").style.display = "block";
    document.getElementById("settings-container").style.animation = `showMenu 2s ease`;
}

document.getElementById('header-settings').addEventListener('click', function() {
    if(block === false) {
        block = true;
        displayMenuSetting();
    }
});

// Close Menu

function closeMenuSettings() {
    document.getElementById("settings-container").style.animation = `closeMenu 2s ease`;
    setTimeout(() => {
        document.getElementById("settings-container").style.display = 'none';
        var nodeSpeed = document.getElementById('nodeSpeed');
        var pointerSpeed = document.getElementById('pointerSpeed');
        var removeSpeed = document.getElementById('removeSpeed');
        if(nodeSpeed != null) nodeSpeed.value = '';
        if(pointerSpeed != null) pointerSpeed.value = '';
        if(removeSpeed != null) removeSpeed.value = '';
        document.getElementById('save').innerHTML = null;
    }, 2000);
    block = false;
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
    block = false;
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
    document.querySelectorAll('h1')[1].style.color = color2;
    document.getElementById('settings-line').style.backgroundColor = color2;

    if(document.getElementById('settings-container').style.backgroundColor === "white")
        document.getElementById('settings-container').style.borderRight = "2px solid " + color3;
    else document.getElementById('settings-container').style.borderRight = '2px solid ' + color3;
   
    // Color text settings
    var setting_p = document.querySelectorAll('#title');
    setting_p.forEach(value => {
        value.setAttribute('style', 'color: ' + color2);
    });

    // Color text error
    var error = document.getElementById('error');
    error.style.color = "#d31a2c";
    
    // Color text save
    var success = document.getElementById('save');
    if(success.style.color === "rgb(32, 163, 116)") success.style.color = "#20a374";
    else if(success.style.color === "rgb(211, 26, 44)") success.style.color = "#d31a2c";

    // Color text numbers
    var number = document.querySelectorAll('#number');
    if(number != null) {
        number.forEach(value => {
            value.setAttribute('style', 'color: white');
        });
    }

    // Get All the tags and change the background-color of the inputs
    var element = document.querySelectorAll(".input-style");
    element.forEach(value => {
        value.setAttribute('style', "background-color: " + color3);
    });
    
    var input = document.querySelectorAll('.input-setting');
    input.forEach(value => {
        value.setAttribute('style', 'background-color: ' + color3);
    });
}

document.getElementById('header-theme').addEventListener('click', function() {
    if(block === false) {
        block = true;
        changeTheme();
    }
});