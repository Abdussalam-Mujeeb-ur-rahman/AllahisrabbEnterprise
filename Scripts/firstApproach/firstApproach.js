const harmburger = document.getElementById("harmburger");
const links = document.getElementById("links");
const homeLoginButton = document.getElementById("home_login_button");
const formContainer = document.getElementById("form_container");
const formHolder = document.getElementById("form_holder");
const loginForm = document.getElementById("login_form");
const signupForm = document.getElementById("signup_form");
const loginFormButton = document.getElementById("loginFormButton");
const signupFormButton = document.getElementById("signupFormButton");
const body = document.getElementById("body");

harmburger.addEventListener("click", (e) => {
    links.classList.toggle("linkedIn");
    formContainer.style.display="none";

})



homeLoginButton.addEventListener("click", (e) => {
    links.classList.toggle("linkedIn");
    loginForm.style.display="flex";
    signupFormButton.style.opacity="0.5";
    formContainer.style.display="flex";
})

loginFormButton.addEventListener("click", (e) => {
    loginForm.style.display="flex";
    loginFormButton.style.opacity="1";
    signupForm.style.display="none";
    signupFormButton.style.opacity="0.5";
})

signupFormButton.addEventListener("click", (e) => {
    signupForm.style.display="flex";
    signupFormButton.style.opacity="1";
    loginForm.style.display="none";
    loginFormButton.style.opacity="0.5";
})