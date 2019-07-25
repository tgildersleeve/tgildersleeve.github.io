$(document).ready(function() {
    $("#menuIcon").click(function(){
		$(".menuItem").css("display") === "none" ? $(".menuItem").css("display", "block"): $(".menuItem").css("display", "none");
	});
	$(".menuItem").click(function(){
		$(".menuItem").toggle();
	});

});


var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow5 = document.getElementById("slideshow5");
slideshow5.currentSlideIndex = 1;
showSlides(slideshow5.currentSlideIndex, slideshow5);

var slideshow6 = document.getElementById("slideshow6");
slideshow6.currentSlideIndex = 1;
showSlides(slideshow6.currentSlideIndex, slideshow6);

var slideshow7 = document.getElementById("slideshow7");
slideshow7.currentSlideIndex = 1;
showSlides(slideshow7.currentSlideIndex, slideshow7);

var slideshow8 = document.getElementById("slideshow8");
slideshow8.currentSlideIndex = 1;
showSlides(slideshow8.currentSlideIndex, slideshow8);

var slideshow9 = document.getElementById("slideshow9");
slideshow9.currentSlideIndex = 1;
showSlides(slideshow9.currentSlideIndex, slideshow9);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("slideshowImage");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
}