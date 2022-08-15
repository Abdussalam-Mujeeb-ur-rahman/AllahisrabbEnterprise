

// .......................................................................................................................................................................

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
passwordHint = document.getElementById("password-hint");
confirmPasswordHint = document.getElementById("confirmPassword-hint");
const button = document.getElementById("signup");
// ........................................................................................................................................................................ 

// ........................................................................................................................................................................

const disabledButton = () => {
    button.addEventListener(`click`, (e) => {
        
    })
}
const abledButton = () => {
    button.addEventListener(`click`, (e) => {

    })
}

password.addEventListener("input", (e) => {
    if(e.target.value.length <= 6){
        e.target.style.border = "2px solid red";
        passwordHint.style.opacity = "1";
        confirmPasswordHint.style.opacity = "1";
        
    }else{
        e.target.style.border = "none";
        passwordHint.style.opacity = "0";
       
    }
})

confirmPassword.addEventListener("input", (e) => {
    if(e.target.value !== password.value){
        e.target.style.border = "2px solid red";
        confirmPasswordHint.style.opacity ="1";
        
    }else{
        e.target.style.border = "none";
        confirmPasswordHint.style.opacity = "0";
        
    }
})


button.addEventListener(`click`, (e) => {
    if(password.value.length >= 6){
        e.preventDefault();
    }else if(password.value !== confirmPassword.value){
        e.preventDefault()
    }else{
        console.log(`${password.value}`)
    }
})