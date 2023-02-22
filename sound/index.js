const titleStorage = localStorage.getItem("title");
const iconStorage = localStorage.getItem("icon");

const favicon = document.getElementById("favicon");

document.title = titleStorage ? titleStorage : "NVSHS";
favicon.href = iconStorage;