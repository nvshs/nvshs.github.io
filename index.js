const titleStorage = localStorage.getItem("title");
const iconStorage = localStorage.getItem("icon");
const colourStorage = localStorage.getItem("colour");

const favicon = document.getElementById("favicon");

document.title = titleStorage ? titleStorage : "NVSHS";
favicon.href = iconStorage;

document.documentElement.style.overflow = "hidden";
document.body.clientWidth;
document.documentElement.style.overflow = "";
if (colourStorage == 0) {
    document.documentElement.setAttribute("data-color-scheme", "dark");
}
if (colourStorage == 1) {
    document.documentElement.setAttribute("data-color-scheme", "light");
}

document.getElementById("year").innerHTML = new Date().getFullYear();

if (window.location.origin != "https://nvshs.github.io") {
    document.getElementById("body").style.display = "none"
    var flash = false;
    var task = setInterval(function () {
        if ((flash = !flash)) {
            document.body.style.backgroundColor = "#ff0";
        } else {
            document.body.style.backgroundColor = "#f00"
        }
    }, 10);
}