// If your element defines a background image with CSS, you can omit the argement altogether $(".foo").backstretch();

$(document).ready(function(){

//Getting Random Space Image
  function getBackgroundImage() {
    $.get("https://www.reddit.com/r/spaceporn/top/.json?sort=top&t=all", function(data) {
      var goodImages = [];
      // Makes sure images have valid file names
        for (var i = 0; i < data.data.children.length; i++) {
        var image = data.data.children[i].data.url;
          if (image.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i)) {
            goodImages.push(image);
              console.log(goodImages);
          }
        }
        // var random = Math.floor(Math.random*goodImages.length);


        // var thumbnail = data.data.children[i].data.thumbnail;


        $(".result").append( '<body>' + image + '</body>');
        // $(".result").append('<img src=' + thumbnail + '>');

    // Trying to display imagesource on the page through thumbnail url

    })
  }
});
