"use strict;"
function $(id){
    return document.getElementById(id);
}

function checkHeadHeight() {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    if (!main || !header) return;
    main.style.marginTop = header.getBoundingClientRect().height + "px";
}

Promise.all([
    loadPartial('site-header', '/partials/header.html'),
    loadPartial('site-footer', '/partials/footer.html'),
]).then(checkHeadHeight);

window.addEventListener("resize", checkHeadHeight);


function openNav() {
    document.getElementById("id-mobile-menu").style.height = "100dvh";
}

function closeNav() {
    document.getElementById("id-mobile-menu").style.height = "0";
}

async function loadPartial(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        const res = await fetch(url);
        el.innerHTML = await res.text();
    } catch (err) {
        console.error(`Could not load ${url}`, err);
    }
}


