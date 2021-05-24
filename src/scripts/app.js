// import '../scss/app.scss';

/* Your JS Code goes here */

function OnFirstLoad() {
    if (document.attachEvent) {
        document.attachEvent('onscroll', scrollEvent);
    } else if (document.addEventListener) {
        document.addEventListener('scroll', scrollEvent, false);
    }

}




$(document).ready(function () {
    OnFirstLoad();
});

function scrollEvent(e) {
    var body = document.body
    var html = document.documentElement;

    var docHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    var currentScroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    // implement your logic according to requirement
    if (currentScroll > 50) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#logo-instagram-white').show();
        $('#logo-instagram-black').hide();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.8)"})
    } else {
        $('.nav-link').css('color', 'black');
        $('#logo-instagram-white').hide();
        $('#logo-instagram-black').show();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.0)"})
    }
    if (currentScroll > 50) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#logo-fb-white').show();
        $('#logo-fb-black').hide();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.8)"})
    } else {
        $('.nav-link').css('color', 'black');
        $('#logo-fb-white').hide();
        $('#logo-fb-black').show();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.0)"})
    }
    if (currentScroll > 50) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#line-white').show();
        $('#line-black').hide();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.8)"})
    } else {
        $('.nav-link').css('color', 'black');
        $('#line-white').hide();
        $('#line-black').show();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.0)"})
    }
    if (currentScroll > 50) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#line-white1').show();
        $('#line-black1').hide();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.8)"})
    } else {
        $('.nav-link').css('color', 'black');
        $('#line-white1').hide();
        $('#line-black1').show();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.0)"})
    }
    if (currentScroll > 50) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#text-size1').show();
        $('#text-size').hide();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.8)"})
    } else {
        $('.nav-link').css('color', 'black');
        $('#text-size1').hide();
        $('#text-size').show();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.0)"})
    }
    if (currentScroll > 50) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#contrast1').show();
        $('#contrast').hide();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.8)"})
    } else {
        $('.nav-link').css('color', 'black');
        $('#contrast1').hide();
        $('#contrast').show();
        $('.position-nav').css({"background-color":"rgba(0,0,0,0.0)"})
    }
}

function readMoreFunction() {
    var dots = document.getElementById("dots-it");
    var contentText = document.getElementById("content");
    var btnText = document.getElementById("buttonReadMore");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Wczytaj więcej";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Pokaż mniej";
      contentText.style.display = "inline";
    }
  }

/* Demo JS */
import './demo.js';
