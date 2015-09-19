$(document).ready(function(){
    $.getJSON('open-internet-footnotes.json', function(obj) {
      var noOfId = 0;
      var testStr;
      var prevStr;
      var prevPrevStr;
         // for every object in the json
         for (var i = 0; i < obj.length; i++) {
           thisObj = obj[i];
           // grab the text
           testStr = thisObj.text;
           // if the text contains a reference to a previous citation
           if (checkForPreviousCitation(thisObj)){
             // add one to the tally
             noOfId++;
             // print that shizzle out
             console.log(thisObj.value + " - " + thisObj.text);
           }
        }
        $('h1 span').append(noOfId);
        console.log(noOfId);
    });
});

function checkForPreviousCitation(thisObj, noOfId) {
  if (/(Id\.)|(Id\sat)/ig.test(thisObj.text)) {
    return true;
  }
}