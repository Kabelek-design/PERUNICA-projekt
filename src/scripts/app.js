// import '../scss/app.scss';

/* Your JS Code goes here */

// remember original settings

var cssValNavColor = $('.nav-link').css('color');
var cssValOpisColor = $('.opis-title').css('color');
var cssValBtn2Color = $('.btn2').css('color');
var cssValBtn4Color = $('.btn4').css('color');
var cssValBtn2ColorMobile = $('.btn2-mobile').css('color');
var cssValPytamColor = $('.pytam').css('color');
var cssValPytamColorMobile = $('.pytam-mobile').css('color');
var cssValBodyImage = $('body').css('background-image');
var cssValIndexImage = $('.index-bg').css('background-image');
var cssValMainImage = $('main').css('background-image');
var cssValMain1Image = $('.main1').css('background-image');
var cssValMain1Color = $('.main1').css('background-color');
var cssValColColor = $('.col').css('background-color');
var cssValBodyColor = $('body').css('background-color');
// var cssValRowColor = $('.row').css('color');
var cssValFontColor = $('.font-im-regular').css('color');
// var cssValRowColorbk = $('.row').css('background-color');
var cssValTextColor = $('text').css('color');
var cssValFooterColor = $('.footer-opis1').css('color');
var cssValFooterColor = $('.footer-opis2').css('color');

var cssTextRow = $('.row').css('font-size');
var cssTextCol = $('.col').css('font-size');
var cssTextFooter = $('footer').css('font-size');


function HighText() {
    $('.row').css('font-size', '1.5rem');
    $('.col').css('font-size', '1.5rem');
    $('footer').css('font-size', '1.5rem');
}

function NormalText() {
    $('.row').css('font-size', cssTextRow);
    $('.col').css('font-size', cssTextCol);
    $('footer').css('font-size', cssTextFooter);
}

function LoadText() {
    if (localStorage.getItem("highTextOn") == "true") {
        HighText();
    } else {
        NormalText();
    }
}

function SwitchText() {
    if (localStorage.getItem("highTextOn") == "true") {
        localStorage.setItem("highTextOn", false);
        NormalText();
    }
    else {
        localStorage.setItem("highTextOn", true);
        HighText();
    }
}

function HighContrast() {
    $('.nav-link').css('color', '#FFFF00');
    $('.opis-title').css('color', '#FFFF00');
    $('.btn2').css('color', '#FFFF00');
    $('.btn4').css('color', '#FFFF00');
    $('.btn2-mobile').css('color', '#FFFF00');
    $('.pytam').css('color', '#FFFF00');
    $('.pytam-mobile').css('color', '#FFFF00');
    $('body').css('background-image', 'none');
    $('.index-bg').css('background-image', 'none');
    $('main').css('background-image', 'none');
    $('.main1').css('background-image', 'none');
    $('.main1').css('background-color', '#000');
    $('.col').css('background-color', '#000');
    $('body').css('background-color', '#000');
    //$('.row').css('color', '#FFFF00');
    $('.font-im-regular2').css('color', '#FFFF00');
    //$('.row').css('background-color', '#000');
    $('text').css('color', '#FFFF00');
    $('.footer-opis1').css('color', '#FFFF00');
    $('.footer-opis2').css('color', '#FFFF00');

    $('#contrast1').show();
    $('#contrast').hide();
    $('#text-size1').show();
    $('#text-size').hide();

    $('#logo-fb-white').show();
    $('#logo-fb-black').hide();
    $('#line-white').show();
    $('#line-black').hide();
    $('#line-white1').show();
    $('#line-black1').hide();

    // check if there is already pressed button
}

function NormalContrast() {
    $('.nav-link').css('color', cssValNavColor);
    $('.opis-title').css('color', cssValOpisColor);
    $('.btn2').css('color', cssValBtn2Color);
    $('.btn4').css('color', cssValBtn4Color);
    $('.btn2-mobile').css('color', cssValBtn2ColorMobile);
    $('.pytam').css('color', cssValPytamColor);
    $('.pytam-mobile').css('color', cssValPytamColorMobile);
    $('body').css('background-image', cssValBodyImage);
    $('.index-bg').css('background-image', cssValIndexImage);
    $('main').css('background-image', cssValMainImage);
    $('.main1').css('background-image', cssValMain1Image);
    $('.main1').css('background-color', cssValMain1Color);
    $('.col').css('background-color', cssValColColor);
    $('body').css('background-color', cssValBodyColor);
    // $('.row').css('color', cssValRowColor);
    $('.font-im-regular2').css('color', cssValFontColor);
     //$('.row').css('background-color', cssValRowColorbk);
    $('text').css('color', cssValTextColor);
    $('.footer-opis1').css('color', cssValFooterColor);
    $('.footer-opis2').css('color', cssValFooterColor);


    $('#text-size1').hide();
    $('#text-size').show();
    $('#contrast1').hide();
    $('#contrast').show();

    $('#logo-fb-white').hide();
    $('#logo-fb-black').show();
    $('#line-white').hide();
    $('#line-black').show();
    $('#line-white1').hide();
    $('#line-black1').show();

    var currentScroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    // implement your logic according to requirement
    if (currentScroll > 500) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#logo-instagram-white').show();
        $('#logo-instagram-black').hide();
        $('.position-nav').css({ "background-color": "rgba(0,0,0,0.8)" })
        $('#logo-fb-white').show();
        $('#logo-fb-black').hide();
        $('#line-white').show();
        $('#line-black').hide();
        $('#line-white1').show();
        $('#line-black1').hide();
        $('#text-size1').show();
        $('#text-size').hide();
        $('#contrast1').show();
        $('#contrast').hide();
    } else {
        $('.nav-link').css('color', 'black');
        $('#logo-instagram-white').hide();
        $('#logo-instagram-black').show();
        $('.position-nav').css({ "background-color": "rgba(0,0,0,0.0)" })
        $('#logo-fb-white').hide();
        $('#logo-fb-black').show();
        $('#line-white').hide();
        $('#line-black').show();
        $('#line-white1').hide();
        $('#line-black1').show();
        $('#text-size1').hide();
        $('#text-size').show();
        $('#contrast1').hide();
        $('#contrast').show();

    }

}

function LoadContrast() {
    // if (localStorage.getItem("highContrastOn") == "true") {
    //     HighContrast();
    // } else {
    //     NormalContrast();
    // }
}

function SwitchContrast() {
    // if (localStorage.getItem("highContrastOn") == "true") {
    //     localStorage.setItem("highContrastOn", false);
    //     NormalContrast();
    // }
    // else {
    //     localStorage.setItem("highContrastOn", true);
    //     HighContrast();
    // }
}

function OnFirstLoad() {
    if (document.attachEvent) {
        document.attachEvent('onscroll', scrollEvent);
    } else if (document.addEventListener) {
        document.addEventListener('scroll', scrollEvent, false);
    }
}

function navMenu() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav-od") {
        x.className += " responsive";
        $('.topnav-od').css('background-color', '#0F0C07');
    } else {
        x.className = "topnav-od";
        $('.topnav-od').css('background-color', 'transparent');
    }
}

function navMenuWithBlackBelt() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function () {
    OnFirstLoad();
    $('#contrast').click(function () { SwitchContrast(); return false; });
    $('#text-size').click(function () { SwitchText(); return false; });
    $('#contrast1').click(function () { SwitchContrast(); return false; });
    $('#text-size1').click(function () { SwitchText(); return false; });
    $('#nav-menu-mobile').click(function () { navMenu(); return false; });
    $('#nav-menu-mobile-blackbelt').click(function () { navMenuWithBlackBelt(); return false; });

    // LoadContrast();
    // LoadText();
});



function scrollEvent(e) {
    var body = document.body
    var html = document.documentElement;

    var docHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    var currentScroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    // implement your logic according to requirement
    if (currentScroll > 1200) {
        // change color here navbar a
        $('.nav-link').css('color', 'white');
        $('#logo-instagram-white').show();
        $('#logo-instagram-black').hide();
        $('.position-nav').css({ "background-color": "rgba(0,0,0,0.8)" })
        $('#logo-fb-white').show();
        $('#logo-fb-black').hide();
        $('#line-white').show();
        $('#line-black').hide();
        $('#line-white1').show();
        $('#line-black1').hide();
        $('#text-size1').show();
        $('#text-size').hide();
        $('#contrast1').show();
        $('#contrast').hide();
    } else {
        // if (localStorage.getItem("highContrastOn") == "false") {
            $('.nav-link').css('color', 'black');
            $('#logo-instagram-white').hide();
            $('#logo-instagram-black').show();
            $('.position-nav').css({ "background-color": "rgba(0,0,0,0.0)" })
            $('#logo-fb-white').hide();
            $('#logo-fb-black').show();
            $('#line-white').hide();
            $('#line-black').show();
            $('#line-white1').hide();
            $('#line-black1').show();
            $('#text-size1').hide();
            $('#text-size').show();
            $('#contrast1').hide();
            $('#contrast').show();
        // }
    }
}


const perunica = () => 'Perunica version 1.0.0';

// eslint-disable-next-line no-console
console.log(perunica());

