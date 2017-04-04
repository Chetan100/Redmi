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

function imgChange(n) {
  var imgchange=document.getElementsByClassName('imgchange');
  imgchange[n-1].src="C:\\Users\\user\\Desktop\\Training\\images"+(n+3)+".png";
}

function imgReset(n) {
  var imgreset=document.getElementsByClassName('imgchange');
  imgreset[n-1].src="C:\\Users\\user\\Desktop\\Training\\images"+n+".png";
}
