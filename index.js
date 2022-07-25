let a = "1) Вёрстка соответствует макету. Ширина экрана 390px +48 \n";
let b = "2) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n";
let c = "3) На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n";
let result = a + b + c;

console.log(result);


/* Show login form after clicking on "Log in" button (close form after clicking on e.target == .pop-up-container  */
document.querySelector(".btn-login").addEventListener("click", showLoginForm);
document.querySelector(".link-login").addEventListener("click", showLoginForm);

function showLoginForm() {
    document.getElementById("loginContainer").classList.remove("pop-up-container-hidden");
    document.getElementById("loginForm").classList.remove("pop-up-form_translate--up");
    document.getElementById("loginForm").classList.add("pop-up-form-translate");
    
}

function closeLoginForm() {
    document.getElementById("loginForm").classList.remove("pop-up-form-translate");
    document.getElementById("loginForm").classList.add("pop-up-form_translate--up");

    setTimeout(function() {
        document.getElementById("loginContainer").classList.add("pop-up-container-hidden");

	}, 500);

    changeToSignIn();
}

/* e.target on click (close Login form and Burger menu)*/
document.addEventListener('click', findTarget);
function findTarget(e) {
    if(e.target === loginContainer) {
        console.log("close login form " + e.target);
        closeLoginForm();
    }


    if(e.target === document.querySelector(".burger-menu_container") ) {
        console.log("burger menu " + e.target);
        burgerMenuAnimateOff();
    }

}


/* BUTTONS */
document.querySelector(".search-link").addEventListener("click", viewMSG);
document.querySelector(".link-find-more").addEventListener("click", viewMSG);
document.querySelector(".link-see-more").addEventListener("click", viewMSG);
document.querySelector(".pop-up-btn-sign-in").addEventListener("click", signInAction);
document.querySelector(".pop-up-btn-register").addEventListener("click", changeToSignUp);

function viewMSG() {
    alert(result);
}


function signInAction (){
    let login = "Empty value";
    let password = "Empty value";
    login = document.querySelector(".pop-up_login").value;
    password = document.querySelector(".pop-up_password").value;
    alert("login = " + login + "\n" + "password = " + password);
}

function changeToSignUp () {
    document.querySelector(".pop-up-btn-sign-in-txt").textContent = "Sign Up";
}
function changeToSignIn () {
    document.querySelector(".pop-up-btn-sign-in-txt").textContent = "Sign In";
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

/*tap-on*/
let elem = document.querySelector(".btn-menu-main");

function burgerMenuAnimateOn() {
    document.querySelector(".btn-menu-main_line--top").classList.remove("btn-menu-main-off-top");
    document.querySelector(".btn-menu-main_line--bottom").classList.remove("btn-menu-main-off-bottom");

    document.querySelector(".btn-menu-main_line--middle").classList.add("btn-menu-main-on-middle");
    document.querySelector(".btn-menu-main_line--top").classList.add("btn-menu-main-on-top");
    document.querySelector(".btn-menu-main_line--bottom").classList.add("btn-menu-main-on-bottom");

    document.querySelector(".burger-menu").classList.remove("burger-menu_display--off");
    document.querySelector(".burger-menu_container").classList.remove("burger-menu_display--off");
    document.querySelector(".burger-menu").classList.remove("burger-menu_translate--r");
    document.querySelector(".burger-menu").classList.add("burger-menu_translate--l");

    
    elem.parentNode.removeChild(elem);
    document.querySelector(".burger-menu_menu-main").appendChild(elem);

    clicked = true;
    return clicked;
}
/*tap-off*/

function burgerMenuAnimateOff() {
    document.querySelector(".btn-menu-main_line--top").classList.remove("btn-menu-main-on-top");
    document.querySelector(".btn-menu-main_line--bottom").classList.remove("btn-menu-main-on-bottom");

    document.querySelector(".btn-menu-main_line--middle").classList.remove("btn-menu-main-on-middle");
    document.querySelector(".btn-menu-main_line--top").classList.add("btn-menu-main-off-top");
    document.querySelector(".btn-menu-main_line--bottom").classList.add("btn-menu-main-off-bottom");

    document.querySelector(".burger-menu").classList.remove("burger-menu_translate--l");
    document.querySelector(".burger-menu").classList.add("burger-menu_translate--r");

    document.querySelector(".header").appendChild(elem);

   
    setTimeout(function() {
		document.querySelector(".burger-menu").classList.add("burger-menu_display--off");
        document.querySelector(".burger-menu_container").classList.add("burger-menu_display--off");
	}, 500);
    
    clicked = false;
    return clicked;
}


/*document.addEventListener('click',e => console.log(e.target));*/




/* SLIDER */
let cell0 = document.querySelector(".dest-cell0");
let cell1 = document.querySelector(".dest-cell1");
let cell2 = document.querySelector(".dest-cell2");
let cell3 = document.querySelector(".dest-cell3");
let cell4 = document.querySelector(".dest-cell4");
let cells = [cell0, cell1, cell2, cell3, cell4];
let j = 0;
let k = 0;
let scrolledR = false;
let scrolledL = false;
let scrolled = false;

/* move right */
document.querySelector(".btn-scroll-r").addEventListener("click", scrollRight);
function scrollRight() {
    
    scrolledR = true;
    if(scrolled === false){
        j = 4;
        k = 0;
        scrolled = true;
    } 
    if (scrolledL === true) {
        if (j>0) {
            j--;
            k++
        } else {
            j = 4;
            k = 0;
        }
        
        scrolledL = false;
    }
    
    let myWidth = getComputedStyle(document.querySelector(".dest-cell")).getPropertyValue('width');
    let myGap = getComputedStyle(document.querySelector(".destinations-main")).getPropertyValue('gap');
    let myPos = parseFloat(myWidth) + parseFloat(myGap);

    for (i = 0; i < cells.length; i++){
        let x = getComputedStyle(cells[i]).getPropertyValue('--position');
        x = parseFloat(x);
        x = x + myPos;
        x = x + 'px';
        cells[i].style.setProperty('--position', x);
    }
   

    let moveRight = getComputedStyle(cells[j]).getPropertyValue('--position');
    moveRight = parseFloat(moveRight);
    moveRight = moveRight - myPos*5;
    moveRight = moveRight + 'px';
    
    cells[j].style.setProperty('--position', moveRight);
    j--;
    if (j < 0) {
        j = 4;
    }
    

    cells[j].style.setProperty('--vis', '0');

    cells[k].style.setProperty('--vis', '100');
    k--;
    if (k < 0) {
        k = 4;
    }
    

   return j,k;
}


/* move left */
document.querySelector(".btn-scroll-l").addEventListener("click", scrollLeft);
function scrollLeft() {

    scrolledL = true;
    if(scrolled === false){
        j = 0;
        k = 4;
        scrolled = true;
    }
    if (scrolledR === true) {
        if (j<4) {
            j++;
            k--;
        } else {
            j = 0;
            k = 4;
        }
        scrolledR = false;
    }
 
    let myWidth = getComputedStyle(document.querySelector(".dest-cell")).getPropertyValue('width');
    let myGap = getComputedStyle(document.querySelector(".destinations-main")).getPropertyValue('gap');
    let myPos = parseFloat(myWidth) + parseFloat(myGap);
   for (i = 0; i < cells.length; i++){
        let x = getComputedStyle(cells[i]).getPropertyValue('--position');
        x = parseFloat(x);
        x = x - myPos;
        x = x + 'px';
        cells[i].style.setProperty('--position', x);
    }
   
    let moveRight = getComputedStyle(cells[j]).getPropertyValue('--position');
    moveRight = parseFloat(moveRight);
    moveRight = moveRight + myPos*5;
    moveRight = moveRight + 'px';
    
    
    cells[j].style.setProperty('--position', moveRight);
    j++;
    if(j > 4) {
        j = 0;
    }
   
    

    cells[j].style.setProperty('--vis', '0');

    cells[k].style.setProperty('--vis', '100');
    k++;
    if (k >= 5) {
        k = 0;
    }
    
    return j,k;
}
