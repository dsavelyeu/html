let a = "1) Вёрстка валидная +10 \n";
let b = "2) Вёрстка семантическая +20 \n";
let c = "3) Вёрстка соответствует макету +48  \n";
let d = "4) Требования к css + 12 \n";
let e = "5) Интерактивность, реализуемая через css +20 \n";
let f = "Итого: 120";
let result = a + b + c + d + e + f;

console.log(result);


/* Show login form after clicking on "Log in" button (close form after clicking on e.target == .pop-up-container  */
document.querySelector(".btn-login").addEventListener("click", showLoginForm);

function showLoginForm() {
    document.getElementById("loginContainer").classList.remove("pop-up-container-hidden");
    document.getElementById("loginForm").classList.add("pop-up-form-translate");

    document.body.classList.add("overflow");
    
}

function closeLoginForm() {
    document.getElementById("loginContainer").classList.add("pop-up-container-hidden");
    document.body.classList.remove("overflow");

}

document.addEventListener('click', findTarget);
function findTarget(e) {
    if(e.target == document.querySelector(".pop-up-container")) {
        closeLoginForm();
    }
}


