let a = "1) Слайдер изображений в секции destinations +30 \n";
let b = "2) Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n";
let c = "3) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25 \n";
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

   
}

/* e.target on click (close Login form and Burger menu)*/
document.addEventListener('click', findTarget);
function findTarget(e) {
    if(e.target === loginContainer) {
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
document.querySelector(".pop-up-reg-txt").addEventListener("click", changeLoginForm);

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

/* pop-up register button */
let signButton = document.querySelector(".pop-up-btn-sign-in-txt");
let registerText = document.querySelector(".pop-up-reg-txt");
let hideContentFacebookBtn = document.querySelector(".pop-up-btn-facebook");
let hideContentGoogleBtn = document.querySelector(".pop-up-btn-google");
let hideSeparatorTop = document.querySelector(".pop-up-separator_indent--top");
let hideForgotPassword = document.querySelector(".forgot-password");
let popUpForm = document.querySelector(".pop-up-form");
let popUpH2Text = document.querySelector(".pop-up-h2");

let clickedRegBtn = false;
function changeLoginForm (){
    
    if (!clickedRegBtn) {
        changeToSignUpForm ();
        changeElementsVisiability()
        clickedRegBtn = true;
    } else {
        changeToSignInForm ();
        changeElementsVisiability()
        clickedRegBtn = false;
    }
}
function changeElementsVisiability(){
    if (!clickedRegBtn) {
        hideContentFacebookBtn.classList.add("hide-element");
        hideContentGoogleBtn.classList.add("hide-element");
        hideSeparatorTop.classList.add("hide-element");
        hideForgotPassword.classList.add("hide-element");
    } else {
        hideContentFacebookBtn.classList.remove("hide-element");
        hideContentGoogleBtn.classList.remove("hide-element");
        hideSeparatorTop.classList.remove("hide-element");
        hideForgotPassword.classList.remove("hide-element");
    }
}
function changeToSignUpForm () {
    signButton.textContent = "Sign Up";
    registerText.innerHTML = "Already have an account? <span class='pop-up-btn-register pop-up-links'>Log in</span>";
    popUpH2Text.textContent = "Create account";
    popUpForm.style.setProperty('max-height', '436px');
}
function changeToSignInForm () {
    signButton.textContent = "Sign In";
    registerText.innerHTML = "Don't have an account? <span class='pop-up-btn-register pop-up-links'>Register</span>";
    popUpH2Text.textContent = "Log in to your account";
    popUpForm.style.setProperty('max-height', '660px');
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
let aNavLinks = document.querySelectorAll(".a-nav_burger");
for (let i = 0; i< aNavLinks.length; i++) {
    aNavLinks[i].addEventListener("click", burgerMenuAnimateOff)
}


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
let ellipseCount = 1;
let scrolledR = false;
let scrolledL = false;
let scrolled = false;
let ellipseSpain = document.querySelector(".btn-scroll-r");
let ellipseJapan = document.querySelector(".btn-ellipse-pressed");
let ellipseUsa = document.querySelector(".btn-scroll-l");
let ellipses = [ellipseSpain, ellipseJapan, ellipseUsa];

/* move right */
document.querySelector(".btn-scroll-r").addEventListener("click", scrollRight);
document.querySelector(".destinations-button_left").addEventListener("click", scrollRight);

function scrollRight() {
    for (let n = 0; n<ellipses.length; n++){
        ellipses[n].style.setProperty('background-color', '#f2775c86');
    }
    
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
    
   
        
        ellipseCount--;
        if(ellipseCount < 0) {
            ellipseCount = 2;
        }
        ellipses[ellipseCount].style.setProperty('background-color', '#F2785C');
        
    
}


/* move left */
document.querySelector(".btn-scroll-l").addEventListener("click", scrollLeft);
document.querySelector(".destinations-button_right").addEventListener("click", scrollLeft);
function scrollLeft() {
    for (let n = 0; n<ellipses.length; n++){
        ellipses[n].style.setProperty('background-color', '#f2775c86');
    }

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
    
    ellipseCount++;
    if(ellipseCount > 2) {
        ellipseCount = 0;
    } 
        ellipses[ellipseCount].style.setProperty('background-color', '#F2785C');
       

}
