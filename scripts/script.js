"use strict;"
function $(id){
    return document.getElementById(id);
}


function checkHeadHeight(){
    var main = $("main");
    var header = $("header");
    var h = header.getBoundingClientRect().height;
    main.style.marginTop= h + "px";
    console.log(h)
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