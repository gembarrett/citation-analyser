$(document).ready(function(){
    $.getJSON('open-internet-footnotes.json', function(obj) {
         alert(obj[0].text);
    });
});