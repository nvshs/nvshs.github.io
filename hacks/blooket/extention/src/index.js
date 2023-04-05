var myJavaScript = "alert('hey guys');";    //You need to put your JS here. 
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);