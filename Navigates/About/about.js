const harmburger = document.getElementById("harmburger");
const navigate = document.querySelector(".navigate");

harmburger.addEventListener("click",(e)=>{
    navigate.classList.toggle("slideout");
})