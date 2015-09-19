$(document).ready(function(){
    $.getJSON('open-internet-footnotes.json', function(obj) {
      var noOfId = 0;
      var innerNoOfId = 0;
      var innerInnerNoOfId = 0;
      var innerInnerInnerNoOfId = 0;
      var innerInnerInnerInnerNoOfId = 0;
      var shouldStayZero = 0;
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
                     }
                   }
                 }
               }
             }
           }
        }
        $('h7 span').append(noOfId);
        console.log(noOfId);
        $('h6 span').append(innerNoOfId);
        console.log(innerNoOfId);
        $('h5 span').append(innerInnerNoOfId);
        console.log(innerInnerNoOfId);
        $('h4 span').append(innerInnerInnerNoOfId);
        console.log(innerInnerInnerNoOfId);
        $('h3 span').append(innerInnerInnerInnerNoOfId);
        console.log(innerInnerInnerInnerNoOfId);
        $('h2 span').append(shouldStayZero);
        console.log(shouldStayZero);
        var spans = $('span');
        for (var i=0; i<spans.length; i++) {
          var thisNumber = parseInt(spans[i].innerText);
          if (thisNumber > 100) {
            $(spans[i]).css('color','red');
            $(spans[i]).css('font-size','200%');
          } else if (thisNumber < 100) {
            $(spans[i]).css('font-size','200%');
          }
        }
        console.log(spans);
    });
});

function checkForPreviousCitation(thisObj) {
  if (/(Id\.)|(Id\sat)/ig.test(thisObj.text)) {
    return true;
  }
}