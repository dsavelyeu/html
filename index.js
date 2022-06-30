let a = "1) Вёрстка валидная +10 \n";
let b = "2) Вёрстка семантическая +20 \n";
let c = "3) Вёрстка соответствует макету +48  \n";
let d = "4) Требования к css + 12 \n";
let e = "5) Интерактивность, реализуемая через css +20 \n";
let result = a + b + c + d + e;

console.log(result);


/* Show login form after clicking on "Log in" button (close form after clicking on e.target == .pop-up-container  */
document.querySelector(".btn-login").addEventListener("click", showLoginForm);

function showLoginForm() {
    document.getElementById("loginContainer").classList.remove("pop-up-container-hidden");
    document.getElementById("loginForm").classList.add("pop-up-form-translate");
    
}

function closeLoginForm() {
    document.getElementById("loginContainer").classList.add("pop-up-container-hidden");

}

document.addEventListener('click', findTarget);
function findTarget(e) {
    if(e.target == document.querySelector(".pop-up-container")) {
        closeLoginForm();
    }
}


/* slider */

/* move right */
document.querySelector(".btn-scroll-r").addEventListener("click", scrollRight);

function scrollRight() {
    document.querySelector(".destinations-pattern").classList.remove("scroll-l");
    document.querySelector(".destinations-pattern").classList.add("scroll-r");
    
}


/* move left */
document.querySelector(".btn-scroll-l").addEventListener("click", scrollLeft);

function scrollLeft() {
    document.querySelector(".destinations-pattern").classList.remove("scroll-r");
    document.querySelector(".destinations-pattern").classList.add("scroll-l");
    
}


document.querySelector(".search-link").addEventListener("click", viewMSG);
document.querySelector(".link-find-more").addEventListener("click", viewMSG);
document.querySelector(".link-see-more").addEventListener("click", viewMSG);
document.querySelector(".pop-up-btn-sign-in").addEventListener("click", viewMSG);

function viewMSG() {
    alert(result);
}


/* BURGER MENU ANIMATION */

document.querySelector(".btn-menu-main").addEventListener("click", burgerMenuAnimate);
let clicked = false;
function burgerMenuAnimate(){
   

    if (!clicked) {
        burgerMenuAnimateOn();
    } else {
        burgerMenuAnimateOff();
    }

}

/*TAP-ON*/
function burgerMenuAnimateOn() {
    document.querySelector(".btn-menu-main-line-top").classList.remove("btn-menu-main-off-top");
    document.querySelector(".btn-menu-main-line-bottom").classList.remove("btn-menu-main-off-bottom");

    document.querySelector(".btn-menu-main-line-middle").classList.add("btn-menu-main-on-middle");
    document.querySelector(".btn-menu-main-line-top").classList.add("btn-menu-main-on-top");
    document.querySelector(".btn-menu-main-line-bottom").classList.add("btn-menu-main-on-bottom");
    
    clicked = true;
    return clicked;
}
/*TAP-OFF*/

function burgerMenuAnimateOff() {
    document.querySelector(".btn-menu-main-line-top").classList.remove("btn-menu-main-on-top");
    document.querySelector(".btn-menu-main-line-bottom").classList.remove("btn-menu-main-on-bottom");

    document.querySelector(".btn-menu-main-line-middle").classList.remove("btn-menu-main-on-middle");
    document.querySelector(".btn-menu-main-line-top").classList.add("btn-menu-main-off-top");
    document.querySelector(".btn-menu-main-line-bottom").classList.add("btn-menu-main-off-bottom");
    
    clicked = false;
    return clicked;
}