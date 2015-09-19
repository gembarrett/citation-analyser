$(document).ready(function(){
    $.getJSON('open-internet-footnotes.json', function(obj) {
      var noOfId = 0;
      var innerNoOfId = 0;
      var innerInnerNoOfId = 0;
      var innerInnerInnerNoOfId = 0;
      var innerInnerInnerInnerNoOfId = 0;
      var shouldStayZero = 0;
      var whyIsThisStillGoing = 0;
         // for every object in the json
         for (var i = 0; i < obj.length; i++) {
           thisObj = obj[i];
           // if the text contains a reference to a previous citation
           if (checkForPreviousCitation(thisObj)){
             // add one to the tally
             noOfId++;
             // prepare to check previous one
             var prevObj = obj[i-1];
             if (checkForPreviousCitation(prevObj)){
               innerNoOfId++;
               var prevPrevObj = obj[i-2];
               if (checkForPreviousCitation(prevPrevObj)){
                 innerInnerNoOfId++;
                 var prevPrevPrevObj = obj[i-3];
                 if (checkForPreviousCitation(prevPrevPrevObj)){
                   innerInnerInnerNoOfId++;
                   var prevPrevPrevPrevObj = obj[i-4];
                   if (checkForPreviousCitation(prevPrevPrevPrevObj)){
                     innerInnerInnerInnerNoOfId++;
                     var shouldBeUnneccessary = obj[i-5];
                     if (checkForPreviousCitation(shouldBeUnneccessary)){
                       shouldStayZero++;
                       var wtaf = obj[i-6];
                       if (checkForPreviousCitation(whyIsThisStillGoing)){
                         whyIsThisStillGoing++;
                         console.log(thisObj.text + "\n" + prevObj.text + "\n" + prevPrevObj.text + "\n" + prevPrevPrevObj.text + "\n" + prevPrevPrevPrevObj.text + "\n" + shouldBeUnneccessary.text + "\n" + whyIsThisStillGoing.text);
                       }
                     }
                   }
                 }
               }
             }
           }
        }
        $('h1 span').append(noOfId);
        console.log(noOfId);
        $('h2 span').append(innerNoOfId);
        console.log(innerNoOfId);
        $('h3 span').append(innerInnerNoOfId);
        console.log(innerInnerNoOfId);
        $('h4 span').append(innerInnerInnerNoOfId);
        console.log(innerInnerInnerNoOfId);
        $('h5 span').append(innerInnerInnerInnerNoOfId);
        console.log(innerInnerInnerInnerNoOfId);
        $('h6 span').append(shouldStayZero);
        console.log(shouldStayZero);
        $('h7 span').append(whyIsThisStillGoing);
        console.log(whyIsThisStillGoing);
    });
});

function checkForPreviousCitation(thisObj) {
  if (/(Id\.)|(Id\sat)/ig.test(thisObj.text)) {
    return true;
  }
}