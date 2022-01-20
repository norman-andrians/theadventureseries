let shownav = false;
let pos = -80;
let anim;

const navBtn = document.getElementById("nav-mobile-btn");
const navContainer = document.getElementById("navcon");

navBtn.addEventListener('click', function() {
    if (shownav == false) {
        anim = setInterval(moveIn, 5);
    }
    else if (shownav == true) {
        anim = setInterval(moveOut, 5);
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
    if (pos >= -80) {
        shownav = false;
        clearInterval(anim);
    }
    else {
        pos--;
        navContainer.style.right = pos+'vw';
    }
}