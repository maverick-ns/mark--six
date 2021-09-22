var btntranslate = document.querySelector(".btn-translate");
var textareaInput = document.querySelector(".txt-area");
var finalOutput = document.querySelector(".Output");

// var tranlationUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;
var translationUrl = "https://api.funtranslations.com/translate/mandalorian.json";

function gettranlationUrl(text) {
  return translationUrl + "?" + "text=" + text
}

function errorHandling(error) {
  console.log("failed to fetch", error);
  alert("sorry try again sometime error occured !! ");
};


function clickeventhandler() {
  var inputText = textareaInput.value
  fetch(gettranlationUrl(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated
      finalOutput.innerText = translatedText
    })

    .catch(errorHandling)

}

btntranslate.addEventListener("click", clickeventhandler)












// var btntranslate = document.querySelector(".btn-translate").addEventListener("mouseover",myfunction);


//  function myfunction(){
//      console.log("mouseover")
//  }  