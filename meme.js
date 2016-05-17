$(document).ready(function(){

  $('#refresh').click(function() {
    randomQuote = true;
    getRandomImage();
  })
  $('#quote').click(function() {
    // randomQuote.removeChildAt(randomQuote.length-1);
    randomQuote = true;
    getRandomThought();
  })
  $('#background').click(function() {
    randomQuote = false;
    getRandomImage();
  })
  $('#tweet').click(function() {

  })

  $('#screenshot')click(function() {

  })

var currentRandomQuote = "";
var randomQuote = true;
getRandomImage();

// Getting Random Quote
function getRandomQuote() {
  $.get("https://www.reddit.com/r/quotes/.json", function(data) {
    var random = Math.floor(Math.random()*17);
    currentRandomQuote=data.data.children[random].data.title;
    $(".quote").append('currentRandomQuote')//add text to div container
  })
}




//Getting Random Space Image
  function getBackgroundImage() {
    $.get("https://www.reddit.com/r/spaceporn/top/.json?sort=top&t=all", function(data) {
      var goodImages = [];
      // Makes sure images have valid file names
        for (var i = 0; i < data.data.children.length; i++) {
        var image = data.data.children[i].data.url;
          if (image.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i)) {
            goodImages.push(image);
              // console.log(goodImages);
          }
        }
        // var random = Math.floor(Math.random*goodImages.length);

        $('myObject').css({
          'background-image': 'url(' + imageUrl + '),' 'background-size': 'cover'
        )};
    })
  }
});
