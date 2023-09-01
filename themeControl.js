// Change bullets' style
function changeBulletsToSquares(themeName) {
    let _imageLight = "./images/icons8-task-16-lightmode.png"
    let _imageDark = "./images/icons8-task-16-darkmode.png"

    let bullet = document.querySelector("ul");
    if (themeName == "lightmode") {
        bullet.style.listStyleImage = 'url(' + _imageLight + ')';
    } else {
        bullet.style.listStyleImage = 'url(' + _imageDark + ')';
    }

    //bullet.style.listStyleType = "square"
}


const themes = {
    lightmode : {background: "whitesmoke", text: "darkblue"}, // themeName is lightmode
    darkmode : {background: "black", text: "white"} // themeName is darkmode
}


// Change theme
function changeCSSTheme(themeName) {
    for (let variable in themes[themeName]) {
        console.log("themes[themeName][variable] is:" + themes[themeName][variable]);
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
    }
}

function toggleLightDark() {
    let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");
    let changeThemeButton = document.getElementById("change-theme");
    
    if (currentBackgroundColour == "whitesmoke") {
        changeCSSTheme("darkmode");
        changeThemeButton.textContent = "Light Mode";
        changeThemeButton.style.backgroundColor = "black";
        changeThemeButton.style.color = "white";
        changeThemeButton.style.borderColor = "white";
        changeBulletsToSquares("darkmode");
        
    } else {
        changeCSSTheme("lightmode");
        changeThemeButton.textContent = "Dark Mode";
        changeThemeButton.style.backgroundColor = "";
        changeThemeButton.style.color = "";
        changeThemeButton.style.border = "";
        changeBulletsToSquares("lightmode");
    }

    changeThemeButton.addEventListener("click", toggleLightDark);
}
