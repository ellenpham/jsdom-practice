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

// Create list of notes and remove notes
function createListOfNotes() {
    let rootULNode = document.querySelector("ul");
    rootULNode.innerHTML = "";

    notes.forEach( (noteItem) => { // noteItem is type of string
        let newNoteItem = document.createElement("li"); 

        newNoteItem.textContent = noteItem; // inner text of li in HTML 
        newNoteItem.id = noteItem; // id of li in HTML
        //console.log(newNoteItem.id);
        //newNoteItem.style.color = "darkblue";

        let removeItemButton = document.createElement("button");
        removeItemButton.addEventListener("click", () => {removeItemFromList(noteItem)});
        removeItemButton.id = "removebutton";
        removeItemButton.textContent = "Remove";
        removeItemButton.style.margin = "5px";
        removeItemButton.style.backgroundColor = "palevioletred";
        removeItemButton.style.borderRadius = "5px";
        removeItemButton.style.border = "none";
        removeItemButton.style.color = "white";
        removeItemButton.style.fontFamily = "Times New Roman";
        
        
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

// Add new notes
function addNotes () {
    function addItemToList(event, targetId) {
        event.preventDefault();
        console.log("We tried to add a new note to the list.");

        let inputField = document.getElementById(targetId);
        let newItemName = inputField.value;
        if (newItemName) {
            console.log("newItemName is: " + newItemName);

            notes.push(newItemName);

            createListOfNotes();
        } else {
            console.warn("Attempted to add an empty item to the list.");
            console.error("Example error");
        }
    }

    let addButton = document.getElementById("add-item");
    addButton.addEventListener("click" , (event) => {addItemToList(event, "note-input")});
}


// Hide-Show text-hint

function hideShowTextHint() {
    function inputHelperOnFocus(targetId) {
        let helperElement = document.getElementById(targetId);
        console.log("showing text hint now");
        helperElement.style.display = "inherit";
    }

    function inputHelperOnBlur(targetId) {
        let helperElement = document.getElementById(targetId);
        console.log("hiding text hint now");
        helperElement.style.display = "none";
    }


    let noteInput = document.getElementById("note-input");
    noteInput.addEventListener("focusin", () => {inputHelperOnFocus("text-hint")});
    noteInput.addEventListener("focusout", () => {inputHelperOnBlur("text-hint")});
    inputHelperOnBlur("text-hint");
}


