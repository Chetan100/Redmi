$(document).ready(function () {
  $(window).scroll(function() {

    if($(window).scrollTop()>=$(".navbar-bottom-container").offset().top) {

      $(".navbar-bottom-container").css({"top":"0","width":"100%","background":"rgba(255,255,255,.9)","z-index":"30","border-bottom":"1px solid #dfdfdf","box-shadow":"0 0 3px #c3c3c3"});
    }
    else{
      $(".navbar-bottom-container").css({"background":"#f5f5f5","border":"none","box-shadow":"none"});
    }

    if ($(window).scrollTop()>=$(".section-summary-container").offset().top && $(window).scrollTop()<=$(".section-summary-container").offset().top+1526) {
      $(".section-summary-animation-stage").css("position","fixed");

      var mi5_slide=$(window).scrollTop()-$(".section-summary-container").offset().top;
      $(".section-summary-mi5-white").css("transform","translate3d(-"+mi5_slide+"px,"+mi5_slide+"px,0)");
      $(".section-summary-mi5-black").css("transform","translate3d(-"+mi5_slide+"px,"+mi5_slide+"px,0)");
      $(".section-summary-mi5-brown").css("transform","translate3d("+mi5_slide+"px,-"+mi5_slide+"px,0)");
      $(".section-summary-mi5-grey").css("transform","translate3d("+mi5_slide+"px,-"+mi5_slide+"px,0)");
    }
    else {
      $(".section-summary-animation-stage").css("position","absolute");
    }

    if ($(window).scrollTop()>=$(".section-summary-container").offset().top+350) {
      var section_summary_features_animation=$(".section-summary-features-animation");
      $(section_summary_features_animation[2]).css("opacity","1");
      $(section_summary_features_animation[0]).css({"opacity":"1","transform":"translate3d(0,0,0)"});
      $(section_summary_features_animation[1]).css({"opacity":"1","transform":"translate3d(0,0,0)"});
      $(section_summary_features_animation[3]).css({"opacity":"1","transform":"translate3d(0,0,0)"});
      $(section_summary_features_animation[4]).css({"opacity":"1","transform":"translate3d(0,0,0)"});
    }

    if ($(window).scrollTop()>=$(".section-battery-container").offset().top+350) {

      $(".section-battery-graph").css({"transform":"scale(1,1)","transform-origin":"50% 100%"});
      setTimeout(function functionName() {
        $(".section-battery-chart").css("opacity","1");
      },2000);

    }


    if($(window).scrollTop()>=$(".section-camera-container").offset().top+100)
    {
      $(".section-camera-container").css("background","url(http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-blur-bg.jpg?v=20170802) no-repeat center");
      $(".section-camera-productimg").css("opacity","1");

      setTimeout(function() {
      $(".section-camera-productimg").css("transform","translate3d(0,30px,0)").attr('src','http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-product.png?v=20170802');
      $(".section-camera-content").css("opacity","1");
    },1000);
    }

    if($(window).scrollTop()>=$(".section-screen-container").offset().top+100) {

      $(".section-screen-container").css({"background":"url(http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-screen-dark-bg.jpg?v=20170802) no-repeat center #1e1f40","color":"white"});
      $(".section-screen-displayimg").css("opacity","1");

    }


    if($(window).scrollTop()>=$(".section-screen-container").offset().top+900) {

      $(".section-screen-container").css("overflow","hidden");

      if ($(".section-miui-animated-productimg").css("display")=="block") {
        setTimeout(function () {
          $(".section-screen-displayimg").css({"transform":"translate3d(0,564px,0) scale(0.75)"});
          $(".section-miui-animated-productimg").css({"transform":"scale(0.75)","top":"240px"});
        },500);
      }

      setTimeout(function () {
        $(".section-miui-content").css("opacity","1");
        $(".section-miui-animated-productimg").css("display","none");
        $(".section-miui-productimg").css({"opacity":"1","transform":"translate3d(0,0,0)"});
      },1500);

    }

    if ($(window).scrollTop()<=$(".section-screen-container").offset().top+900) {
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
  var section_camera_bgimg=document.getElementsByClassName('section-camera-container'),
  section_camera_content=document.getElementsByClassName('section-camera-content'),
  section_camera_productimg=document.getElementsByClassName('section-camera-productimg'),
  section_camera_is_flash=document.getElementsByClassName('section-camera-is-flash');
  section_camera_bgimg[0].style.background="url('http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-bg.jpg?v=20170802') no-repeat center 0";
  section_camera_content[0].style.opacity="0";
  section_camera_productimg[0].style.opacity="0";
  section_camera_productimg[0].style.transform="translate3d(0,-100px,0)";
  section_camera_productimg[0].src="http://i01.appmifile.com/webfile/globalimg/en/goods/hongmi3s/overall-camera-border.png?v=20170802";
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

function section_summary_features_animation() {
  var section_summary_features_content=document.getElementsByClassName('section-summary-features-animation');
  section_summary_features_content[0].style.opacity="0";
  section_summary_features_content[0].style.transform="translate3d(-50px,0,0)";
  section_summary_features_content[1].style.opacity="0";
  section_summary_features_content[1].style.transform="translate3d(-50px,0,0)";
  section_summary_features_content[2].style.opacity="0";
  section_summary_features_content[3].style.opacity="0";
  section_summary_features_content[3].style.transform="translate3d(50px,0,0)";
  section_summary_features_content[4].style.opacity="0";
  section_summary_features_content[4].style.transform="translate3d(50px,0,0)";
}

function section_battery_graph_animation() {
  var section_battery_graph_bgimg=document.getElementsByClassName('section-battery-graph'),
  section_battery_chart_img=document.getElementsByClassName('section-battery-chart');
  section_battery_graph_bgimg[0].style.transform="scale(1,0)";
  section_battery_chart_img[0].style.opacity="0";

}
