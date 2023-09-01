let notes = [
    "buy groceries",
    "clean the car",
    "do the laundry",
    "make tiramisu",
    "enrol daughter in swimming class",
    "buy name tag for daughter's school stuff",
    "rearrange the study room",
    "book flights to Taiwan",
    "apply for passport", 
    "order vegetarian meals for next flights"
]

// Create list of notes and remove button
function createListOfNotes() {
    let rootULNode = document.querySelector("ul");
    rootULNode.innerHTML = "";

    notes.forEach( (noteItem) => { // noteItem is type of string
        let newNoteItem = document.createElement("li"); 

        newNoteItem.textContent = noteItem; // inner text of li in HTML 
        newNoteItem.id = noteItem; // id of li in HTML
        //console.log(newNoteItem.id);
        newNoteItem.style.color = "darkblue";

        let removeItemButton = document.createElement("button");
        removeItemButton.addEventListener("click", () => {removeItemFromList(noteItem)});
        removeItemButton.id = "removebutton";
        removeItemButton.textContent = "Remove";
        removeItemButton.style.margin = "5px";
        removeItemButton.style.backgroundColor = "palevioletred";
        removeItemButton.style.borderRadius = "5px";
        removeItemButton.style.border = "none";
        
        
        newNoteItem.appendChild(removeItemButton)

        rootULNode.appendChild(newNoteItem)
    });
}

function removeItemFromList(targetItem) {
    let targetItemNode = document.getElementById(targetItem);

    if (targetItemNode) {

        notes = notes.filter(item => item !== targetItem);

        createListOfNotes()
    }
}


// Change bullets to squares

function changeBulletsToSquares() {
    let _image = "./images/star.png"
    let bullet = document.querySelector("ul");
    bullet.style.listStyleImage = 'url(' + _image + ')';
    //bullet.style.listStyleType = "square"
}

const themes = {
    lightmode : {background: "white", text: "darkblue"}, // themeName is lightmode
    darkmode : {background: "black", text: "white"}, // themeName is darkmode
}


// Theme change functionality
function changeCSSTheme(themeName) {
    for (let variable in themes[themeName]) {
        console.log("themes[themeName][variable] is:" + themes[themeName][variable]);
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName[variable]]);
    }
}

function toggleLightDark() {
    let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");

    let changeThemeButton = document.getElementById("change-theme");
    
    if (currentBackgroundColour == "white") {
        changeThemeButton.addEventListener("click", () => {changeCSSTheme("darkmode")});
    } else {
        changeThemeButton.addEventListener("click", () => {changeCSSTheme("lightmode")});
    }
}
