$(function(){
    var images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    var i = 0;

    setInterval(function(){
        i = (i + 1) % images.length;
        $("#slide").attr("src", images[i]);
    }, 2000);
});
