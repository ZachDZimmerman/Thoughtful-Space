$(document).ready(function() {

  // Hosting variables to run in functions
  var currentRandomQuote;
  var currentRandomBackground;
  randomQuote = true;
  getRandomQuote();
  getBackgroundImage();
  var url= window.location.href;

  $('#refresh').click(function() {
    $('.quote').empty();
    if (randomQuote = true) {
        getRandomQuote();
    }
      getBackgroundImage();
  })

  $('#quote').click(function() {
      $('.quote').empty();
      if (randomQuote = true) {
          getRandomQuote();
      }
  })

  $('#background').click(function() {
      randomQuote = false;
      getBackgroundImage();
  })

  $("#twitterBtn").click(function() {
    window.open("https://twitter.com/intent/tweet?text=Thoughtful+Space+By+@ZacZ&hashtags=SpaceQuotes " + url);
  });

  $("#facebookBtn").click(function() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fzz-quarter1-project.firebaseapp.com%2F&display=popup&ref=plugin&src=share_button")
  });

// , function(response){});

  // Getting Random Quote
  function getRandomQuote() {
      $.get("https://www.reddit.com/r/quotes/top/.json?sort=top&t=month", function(data) {
          var random = Math.floor(Math.random() * 25);
          // console.log(random);
          currentRandomQuote = data.data.children[random].data.title;
          // console.log(currentRandomQuote);
          $('.quote').append(currentRandomQuote);
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
          }
      }
      // console.log(goodImages);
      var random = Math.floor(Math.random() * goodImages.length);
      // console.log(random);
      var currentRandomBackground = goodImages[random];
      // console.log(currentRandomBackground)
      $('body').css('background-image', 'url(' + currentRandomBackground + ')');
    })
  }
});
