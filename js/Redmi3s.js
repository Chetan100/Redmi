var slideindex=0;
showSlides(slideindex);
function plusSlides(n) {
  showSlides(slideindex+=n);
}
function currentSlides(n) {
  showSlides(slideindex=n);
}
function showSlides(n) {
  var slides=document.getElementsByClassName('slides'),links=document.getElementsByClassName('links');
  if (n>2) {
    slideindex=0;
  }
  if (n<0) {
    slideindex=slides.length-1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  for (var i = 0; i < links.length; i++) {
    links[i].className=links[i].className.replace(" active","");
  }
  slides[slideindex].style.display="block";
  links[slideindex].className+=" active";
}
