$(document).ready(function () {
  $(window).scroll(function() {
    if($(window).scrollTop()>=$(".section-camera-container").offset().top+100)
    {
      $(".section-camera-container").css("background","url(http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-blur-bg.jpg?v=20170802) no-repeat center");
      $(".section-camera-blur-productimg").css("opacity","1");
      $(".section-camera-blur-productimg").attr('src','http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-border.png?v=20170802');
      setTimeout(function() {
      $(".section-camera-blur-productimg").css("transform","translate3d(0,0,0)").attr('src','http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-product.png?v=20170802');
      $(".section-camera-content").css("opacity","1");
    },1000);
    }

    if($(window).scrollTop()>=$(".section-screen-container").offset().top+100) {

      $(".section-screen-container").css({"background":"url(http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-screen-dark-bg.jpg?v=20170802) no-repeat center #1e1f40","color":"white"});
      $(".section-screen-displayimg").css("opacity","1");

    }


    if($(window).scrollTop()>=$(".section-screen-container").offset().top+900) {

      $(".section-screen-container").css("overflow","hidden");
      setTimeout(function () {
        $(".section-screen-displayimg").css({"transform":"translate3d(0,564px,0) scale(0.75)"});
        $(".section-miui-animated-productimg").css({"transform":"scale(0.75)","top":"240px"});
      },500);

      setTimeout(function () {
        $(".section-miui-content").css("opacity","1");
        $(".section-miui-animated-productimg").css("display","none");
        $(".section-miui-productimg").css({"opacity":"1","transform":"translate3d(0,0,0)"});
      },1500);

    }

    else if ($(window).scrollTop()>=$(".section-screen-container").offset().top && $(window).scrollTop()<=$(".section-screen-container").offset().top+$(".section-screen-container").outerHeight()) {
      $(".section-screen-displayimg").css({"transform":"translate3d(0,0,0)"});
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

function navbar_middle_product_exhibit_show(n) {
  var navbar_middle_product_exhibit=document.getElementsByClassName('navbar-middle-product-exhibit');
    navbar_middle_product_exhibit[n].style.display="block";
}

function navbar_middle_product_exhibit_hide(n) {
  var navbar_middle_product_exhibit=document.getElementsByClassName('navbar-middle-product-exhibit');
  navbar_middle_product_exhibit[n].style.display="none";
}

function section_camera_animation() {
  var section_camera_bgimg=document.getElementsByClassName('section-camera-container');
  section_camera_bgimg[0].style.background="url('http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-bg.jpg?v=20170802') no-repeat center 0";
}

function section_screen_animation() {
  var section_screen_bgimg=document.getElementsByClassName('section-screen-container'),
  section_screen_productimg=document.getElementsByClassName('section-screen-displayimg');
  section_screen_bgimg[0].style.background="url('http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-screen-bg.jpg?v=20170802') no-repeat center 0";
  section_screen_bgimg[0].style.color="black";
  section_screen_productimg[0].style.opacity="0";
}

function section_miui_animation() {
  var section_miui_content=document.getElementsByClassName('section-miui-content'),
  section_miui_productimg=document.getElementsByClassName('section-miui-productimg');
  section_miui_content[0].style.opacity="0";
  section_miui_productimg[0].style.opacity="0";
  section_miui_productimg[0].style.transform="translate3d(250px,0,0)";
  section_miui_productimg[1].style.opacity="0";
  section_miui_productimg[2].style.opacity="0";
  section_miui_productimg[2].style.transform="translate3d(-250px,0,0)"
}
