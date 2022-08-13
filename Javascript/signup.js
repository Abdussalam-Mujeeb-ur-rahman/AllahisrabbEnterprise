

// .......................................................................................................................................................................

const password = document.getElementsByClassName("password");
const confirmPassword = document.getElementsByClassName("confirmPassword")
const button = document.getElementById("signup")
// ........................................................................................................................................................................ 

for(i=0;i<password.length;i++){
    eachPassword = password[i];
}

for(i=0;i<confirmPassword.length;i++){
    eachConfirmedPassword = confirmPassword[i];
}

// ........................................................................................................................................................................

eachConfirmedPassword.addEventListener("input",(e)=>{
    stringPassword = JSON.stringify(eachPassword.value)
    stringConfirmedPassword = JSON.stringify(e.target.value)
    let check = (stringPassword === stringConfirmedPassword)? "great" : e.target.style.border="2px solid red";
    console.log(check)
})