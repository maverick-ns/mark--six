var btntranslate = document.querySelector("#btn-translate");
var textarea = document.querySelector("#txtarea");
var outputdiv = document.querySelector("#output");




function clickEventhandler(){
   
    outputdiv.innertext= "assd" + textarea.value;
   
 } 

btntranslate.addEventListener("click", clickEventhandler);

// trying out
// textarea.addEventListener("input", clickEventhandler);


function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
     document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
   }
