let shownav = false;
let pos = -80;
let anim;

const navBtn = document.getElementById("nav-mobile-btn");
const navContainer = document.getElementById("navcon");
const navBg = document.getElementById("precon");

navBtn.addEventListener('click', function() {
    clearInterval(anim);
    if (shownav == false) {
        navBg.style.display = "block";
        navBg.style.backgroundColor = "rgba(0, 0, 0, .4)";
        anim = setInterval(moveIn, 2);
    }
    else if (shownav == true) {
        navBg.style.backgroundColor = "transparent";
        anim = setInterval(moveOut, 2);
    }
});

function moveIn() {
    if (pos >= 0) {
        shownav = true;
        clearInterval(anim);
    }
    else {
        pos++;
        navContainer.style.right = pos+'vw';
    }
}

function moveOut() {
    if (pos <= -80) {
        shownav = false;
        clearInterval(anim);
        navBg.style.display = "none";
    }
    else {
        pos--;
        navContainer.style.right = pos+'vw';
    }
}