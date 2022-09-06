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
const about = document.getElementById("about");
const aboutContent = document.getElementById("aboutContent");
const faq_contents = document.getElementById("faq_contents");
const faq = document.getElementById("faq");
const contact_section = document.getElementById("contact_section");
const contact = document.getElementById("contact");
const home = document.getElementById("home");
const footer = document.getElementById("footer");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const Submit = document.getElementById("Submit")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const passwordNotice = document.getElementById("passwordNotice")
const confirmPasswordNotice = document.getElementById("confirmPasswordNotice")
const eight = document.getElementById("eight");
const number = document.getElementById("number");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");



window.addEventListener("scroll", (e) => {
    links.classList.remove("linkedIn");
})

harmburger.addEventListener("click", (e) => {
    links.classList.toggle("linkedIn");
})

homeLoginButton.addEventListener("click", (e) => {
    loginForm.style.display="flex";
    signupForm.style.display="none";
    signupFormButton.style.opacity="0.5";
    formContainer.style.display="flex";
    displayNone(faq_contents);
    displayNone(aboutContent);
    displayNone(contact_section);
    links.classList.remove("linkedIn");
    footer.style.display="none";
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

home.addEventListener("click", (e) => {
    displayFlex(aboutContent);
    displayFlex(faq_contents);
    displayBlock(contact_section);
    displayNone(formContainer);
    links.classList.remove("linkedIn");
})

about.addEventListener("click", (e) => {
    displayFlex(aboutContent);
    displayNone(faq_contents);
    displayNone(contact_section);
    displayNone(formContainer);
    links.classList.remove("linkedIn");
})

faq.addEventListener("click", (e) => {
    displayFlex(faq_contents);
    displayNone(aboutContent);
    displayNone(contact_section);
    displayNone(formContainer);
    links.classList.remove("linkedIn");
   footer.style.display="none";
})

contact.addEventListener("click", (e) => {
    displayBlock(contact_section);
    displayNone(aboutContent);
    displayNone(faq_contents);
    displayNone(formContainer);
    links.classList.remove("linkedIn");
   footer.style.display="none";
})

password.addEventListener("focus", (e) => {
    displayBlock(passwordNotice);
}) 

password.addEventListener("blur", (e) => {
    displayNone(passwordNotice);
})

password.addEventListener("keyup", (e) => {
    validatePasswordInputs(e.target);
})

confirmPassword.addEventListener("focus", (e) => {
    displayBlock(confirmPasswordNotice);
}) 

confirmPassword.addEventListener("blur", (e) => {
    displayNone(confirmPasswordNotice);
    if(e.target.value !== password.value){
        e.target.value = null;
    }else{
        e.target.value;
    }
})

confirmPassword.addEventListener("keyup", (e) => {
    confirmPasswordInput();
})





////////////////////////////////////////////// callback functions ///////////////////////////////////////////////////////////////////////////////
displayFlex = (item) => {
    item.style.display="flex";
}

displayBlock = (item) => {
    item.style.display="block";
}

displayNone = (item) => {
    item.style.display="none";
}

displayInline = (item) => {
    item.style.display="inline";
}



validatePasswordInputs = (item) => {
         // validate uppercase letters 
         let password = item.value;
         if(/[A-Z]/.test(password)){
            upper.classList.add(`green_changed_text`);
            upper.classList.remove(`passwordNotice`);
            
        }else{
            upper.classList.remove(`green_changed_text`);
            upper.classList.add(`passwordNotice`);
            
         }
    
         //validate lowercase letters
         if(/[a-z]/.test(password)){
            lower.classList.add(`green_changed_text`);
            lower.classList.remove(`passwordNotice`);
            
        }else{
            lower.classList.remove(`green_changed_text`);
            lower.classList.add(`passwordNotice`);
            
         }
    
         //validate numbers
         if(/[0-9]/.test(password)){
            number.classList.add(`green_changed_text`);
            number.classList.remove(`passwordNotice`);
            
        }else{
            number.classList.remove(`green_changed_text`);
            number.classList.add(`passwordNotice`);
            
         }
    
         if(password.length >= 8){
            eight.classList.add(`green_changed_text`);
            eight.classList.remove(`passwordNotice`);
            
        }else{
            eight.classList.remove(`green_changed_text`);
            eight.classList.add(`passwordNotice`);
            
         }
}

confirmPasswordInput = () => {
    if( confirmPassword.value === password.value){
        confirmPasswordNotice.classList.add(`green_changed_text`);
        confirmPasswordNotice.classList.remove(`passwordNotice`);
        
    }else{
        confirmPasswordNotice.classList.remove(`green_changed_text`);
        confirmPasswordNotice.classList.add(`passwordNotice`);
        
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


