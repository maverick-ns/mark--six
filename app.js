var btntranslate = document.querySelector("#btn-translate");
var textarea = document.querySelector("#textarea");

console.log(textarea)


function clickEventhandler(){
    console.log("clicked"),
    console.log("input",textarea.value);

 } 

btntranslate.addEventListener("click", clickEventhandler);

// trying out
// textarea.addEventListener("input", clickEventhandler);

