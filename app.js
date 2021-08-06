var btntranslate = document.querySelector("#btn-translate");
var textarea = document.querySelector("#txtarea");
var divoutput = document.querySelector( "#output");

console.log.div( "cbsjbdshjbdshj"+textarea.value);

function clickEventhandler(){
    console.log("clicked"),
    console.log("input",textarea.value);
   
 } 

btntranslate.addEventListener("click", clickEventhandler);

// trying out
// textarea.addEventListener("input", clickEventhandler);

