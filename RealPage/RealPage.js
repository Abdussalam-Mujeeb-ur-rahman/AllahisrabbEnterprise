const harmburger = document.getElementById("harmburger");
const navbar = document.getElementById("navbar");

harmburger.addEventListener("click", (e) => {
    navbar.classList.toggle("navbarInOut");
})

window.addEventListener("scroll", (e) => {
    navbar.classList.remove("navbarInOut");
})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const items_wrapper = document.getElementById("items_wrapper");
const teen = document.getElementById("teen");
const female = document.getElementById("female");
const male = document.getElementById("male");
const footer = document.getElementById("footer");
const home = document.getElementById("home");
const searchIcon = document.getElementById("search-icon");
const search_here = document.getElementById("search_here");

const kids = document.getElementsByClassName("kid");
const men = document.getElementsByClassName("men");
const women = document.getElementsByClassName("women");

teen.addEventListener("click", (e) => {
    display_product(kids);
    off_product(men);
    off_product(women);
})

female.addEventListener("click", (e) => {
    display_product(women);
    off_product(men);
    off_product(kids);
})

male.addEventListener("click", (e) => {
    display_product(men);
    off_product(women);
    off_product(kids);
})

home.addEventListener("click", (e) => {
    footer.style.display="none";
    items_wrapper.style.display="none";
})

searchIcon.addEventListener("click", (e) => {
    search_here.classList.toggle("search_here_inOut");
})




display_product = (item) => {
    for(i=0;i<item.length;i++){
        item[i].style.display="inline-block";
    };
    items_wrapper.style.display="block";
    footer.style.display="block";
}
off_product = (item) => {
    for(i=0;i<item.length;i++){
        item[i].style.display="none";
    };
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const light_mode = document.getElementById("light_mode");

light_mode.addEventListener("click", (e) => {
    
})