import '../scss/app.scss';

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
    } else {
        $('.nav-link').css('color', 'black');
    }
}

/* Demo JS */
import './demo.js';
