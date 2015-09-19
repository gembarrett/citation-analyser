$(document).ready(function(){
    $.getJSON('open-internet-footnotes.json', function(obj) {
      var noOfId = 0;
      var testStr;
      var prevStr;
      var prevPrevStr;
         // for every object in the json
         for (var i = 0; i < obj.length; i++) {
           // grab the text
           testStr = obj[i].text ;
           // if the text contains a reference to a previous citation
           if (/(Id\.)|(Id\sat)/ig.test(testStr)) {
             // add one to the tally
             noOfId++;
             console.log(obj[i].value + " - " + obj[i].text);
            // grab the previous text
            //  prevStr = obj[i -1].text;
             // if the previous text contains a reference to a previous citation
            //  if (/Id\.? at/i.test(prevStr)) {
            //    prevPrevStr = obj[i-2].text;
            //  } else {
            //    console.log(prevPrevStr);
            //  }
           // if the text doesn't contain a reference to a previous citation
           } else {
            //  console.log(prevStr);
           }
        }
        console.log(noOfId);
    });
});