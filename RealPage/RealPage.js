const harmburger = document.getElementById("harmburger");
const navbar = document.getElementById("navbar");
const mission_vision = document.getElementById("mission_vision");
const vision = document.getElementById("vision");
const mission = document.getElementById("mission");
const vision_button = document.getElementById("vision_button");
const mission_button = document.getElementById("mission_button");
const cove_logo = document.getElementById("cove_logo");
const light_mode = document.getElementById("light_mode");
const items_wrapper = document.getElementById("items_wrapper");
const teen = document.getElementById("teen");
const female = document.getElementById("female");
const male = document.getElementById("male");
const footer = document.getElementById("footer");
const home = document.getElementById("home");
const searchIcon = document.getElementById("search-icon");
const header = document.getElementById("header");
const search_here = document.getElementById("search_here");
const kids = document.getElementsByClassName("kid");
const men = document.getElementsByClassName("men");
const women = document.getElementsByClassName("women");
const header_button = document.querySelectorAll("header > nav > button")
const shop_prices = document.querySelectorAll("section > div > .item_holder")
const cart = document.querySelectorAll("section > div > .item_holder > div  span")

ArrayOfWhiteTextToggle = [cove_logo, searchIcon, light_mode, harmburger];
ArrayToBlackBackgroundToggle = [items_wrapper, header, mission_vision]
ArrayToWhiteBackgroundToggle = []

harmburger.addEventListener("click", (e) => {
    navbar.classList.toggle("navbarInOut");
})

window.addEventListener("scroll", (e) => {
    navbar.classList.remove("navbarInOut");
})
////////////////////////////////////////////////////////////////////////////////////////////////////////


teen.addEventListener("click", (e) => {
    display_product(kids);
    off_product(men);
    off_product(women);
    displayNone(mission_vision)
})

female.addEventListener("click", (e) => {
    display_product(women);
    off_product(men);
    off_product(kids);
    displayNone(mission_vision)
})

male.addEventListener("click", (e) => {
    display_product(men);
    off_product(women);
    off_product(kids);
    displayNone(mission_vision)
})

home.addEventListener("click", (e) => {
    footer.style.display="none";
    items_wrapper.style.display="none";
    displayNone(mission_vision)
})

searchIcon.addEventListener("click", (e) => {
    search_here.classList.toggle("search_here_inOut");
})

mission_button.addEventListener("click", (e) => {
    displayFlex(mission_vision);
    displayBlock(mission);
    displayNone(vision);
    displayNone(items_wrapper);
})

vision_button.addEventListener("click", (e) => {
    displayFlex(mission_vision);
    displayBlock(vision);
    displayNone(mission);
    displayNone(items_wrapper);
})

light_mode.addEventListener("click", (e) => {
    loopingFunction(header_button, "white_textColor");
    loopingFunction(shop_prices, "white_textColor");
    loopingFunction(cart, "white_backgroundColor");
    loopingFunction(ArrayToWhiteBackgroundToggle, "white_backgroundColor");
    loopingFunction(cart, "black_textColor");
    loopingFunction(ArrayOfWhiteTextToggle, "white_textColor");
    loopingFunction(ArrayToBlackBackgroundToggle, "black_backgroundColor");

})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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

toggleFunction = (item, classTitle) => {
    item.classList.toggle(classTitle)
}

loopingFunction = (item, classTitle) => {
    item.forEach((n) => {
        toggleFunction(n, classTitle)
    })
}
