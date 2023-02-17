const titleInput = document.getElementById("title").value;
const iconInput = document.getElementById("icon").value;

function setTitle() {
    localStorage.setItem("title", titleInput);
    document.title = titleInput;
}
function setIcon() {
    localStorage.setItem("icon", iconInput);
    document.getElementById("favicon").href = iconInput;
}
function reset() {
    localStorage.removeItem("title");
    localStorage.removeItem("icon");
    document.getElementById("favicon").href = null;
    document.title = "NVSHS";
}
