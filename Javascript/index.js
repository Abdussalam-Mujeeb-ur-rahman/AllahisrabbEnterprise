const proceed = document.getElementById("proceed");
const retreat = document.getElementById("return");
const page = document.getElementById("page");
const container = document.getElementById("container");
const harmburger = document.getElementById("harmburger");
const navigate = document.querySelector(".navigate");


proceed.addEventListener("click",(e)=>{
    container.style.display="none";
    page.style.display="flex";
    page.style.opacity="1";
})
// console.log(proceed)

retreat.addEventListener("click", (e)=>{
    location.href = ("https://www.google.com")
})

harmburger.addEventListener("click",(e)=>{
    navigate.classList.toggle("slideout");
})