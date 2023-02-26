function setTitle() {
    const titleInput = document.getElementById("title").value;
    localStorage.setItem("title", titleInput);
    document.title = titleInput;
}
function setIcon() {
    const iconInput = document.getElementById("icon").value;
    localStorage.setItem("icon", iconInput);
    document.getElementById("favicon").href = iconInput;
}
function reset() {
    localStorage.removeItem("title");
    localStorage.removeItem("icon");
    document.getElementById("favicon").href = null;
    document.title = "NVSHS";
}

function setColour() {
    const colourInput = document.getElementById("colour").value;
    localStorage.setItem("colour", colourInput);
    document.documentElement.style.overflow = "hidden";
    document.body.clientWidth;
    document.documentElement.style.overflow = "";
    if (colourInput == 0) {
        document.documentElement.setAttribute("data-color-scheme", "dark");
    }
    if (colourInput == 1) {
        document.documentElement.setAttribute("data-color-scheme", "light");
    }
}
