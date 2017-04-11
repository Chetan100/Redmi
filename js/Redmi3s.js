$(document).ready(function () {
  $(window).scroll(function() {
    if($(document).scrollTop()>=6068 && $(document).scrollTop()<=6125 )
    {
      $(".section-camera-bgimg").css("background","url(http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-blur-bg.jpg?v=20170802) no-repeat center");
      $(".section-camera-productimg").css("opacity","1");
      $(".section-camera-productimg").attr('src','http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-border.png?v=20170802');
      setTimeout(function() {
      $(".section-camera-productimg").css("transform","translate3d(0,0,0)").attr('src','http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-product.png?v=20170802');
      $(".section-camera-content").css("opacity","1");
    },1000);
    }
  });
});






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
  imgchange[n-1].src="C:\\Users\\user\\Desktop\\Training\\images\\img"+(n+3)+".png";
}

function imgReset(n) {
  var imgreset=document.getElementsByClassName('imgchange');
  imgreset[n-1].src="C:\\Users\\user\\Desktop\\Training\\images\\img"+n+".png";
}

function section_camera_animation() {
  var section_camera_bgimg=document.getElementsByClassName('section-camera-bgimg');
  section_camera_bgimg[0].style.background="url('http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-bg.jpg?v=20170802') no-repeat center 0";
}
