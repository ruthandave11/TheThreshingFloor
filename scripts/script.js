"use strict;"
function $(id){
    return document.getElementById(id);
}


function checkHeadHeight(){
    var main = $("main");
    var header = $("header");
    var h = window.getComputedStyle(header).getPropertyValue("height");
    main.style.marginTop=h;
}

window.onload = function() {
    checkHeadHeight();
}


function openNav() {
    document.getElementById("id-mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("id-mobile-menu").style.width = "0";
}