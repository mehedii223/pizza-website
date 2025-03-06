
const barIcon = document.getElementById("barIcon");
const menuList = document.getElementById("menuList");
const crossIcon = document.getElementById("crossIcon");
const menus = document.querySelectorAll(".menu");

menus.forEach((menu)=> {
    menu.addEventListener("click", ()=> {
        menuList.classList.remove("top-0");
        menuList.classList.add("top-[-1000%]"); 
    })
})

barIcon.addEventListener("click", ()=> {
    menuList.classList.remove("top-[-1000%]");
    menuList.classList.add("top-0");
})
crossIcon.addEventListener("click", ()=> {
    menuList.classList.remove("top-0");
    menuList.classList.add("top-[-1000%]"); 
})

// menu slider
const items = document.querySelectorAll("#items");
let menuSliderTimeInterval;
let count = 0;

// left right click on menu slider
const leftbutton = document.querySelector("#leftbutton");
const rightbutton = document.querySelector("#rightbutton");

// for left button click
leftbutton.addEventListener("click", ()=> {
    items[0].classList.remove("left-[50%]");
    items[0].classList.add("left-[-1000%]");
    items.forEach((a)=> {
        a.classList.remove("animate-slide1");
        a.classList.remove("animate-slide2");
    })
    items[count].classList.remove("animate-leftSlider2");
    items[count].classList.add("animate-leftSlider1");
    if(count <= 0){
        count = 8;
    }else{
        count--;
    }
    items[count].classList.remove("animate-leftSlider1");
    items[count].classList.add("animate-leftSlider2");
})

// For right button click
rightbutton.addEventListener("click", ()=> {
    items[0].classList.remove("left-[50%]");
    items[0].classList.add("left-[-1000%]");
    items.forEach((a)=> {
        a.classList.remove("animate-leftSlider1");
        a.classList.remove("animate-leftSlider2");
    })
    items[count].classList.remove("animate-slide2");
    items[count].classList.add("animate-slide1");
    if(count == items.length - 1){
        count = 0;
    }else{
        count++;
    }
    items[count].classList.remove("animate-slide1");
    items[count].classList.add("animate-slide2");

})

// Auto slide
function menuSliderFun(){
    menuSliderTimeInterval = setInterval(function(){
        items[count].classList.remove("animate-slide2");
        items[count].classList.add("animate-slide1");

        if(count == items.length - 1){
            count = 0;
        }else{
            count++;
        }
        items[count].classList.remove("animate-slide1");
        items[count].classList.add("animate-slide2");
    }, 3000)
}
menuSliderFun()

// Best menu item buttun click
const bestMenuItem = document.querySelectorAll("#bestMenuItem");
const bestItem = document.querySelectorAll(".bestItem");

bestMenuItem.forEach((a)=> {
    a.addEventListener("click", ()=> {
        bestMenuItem.forEach((a)=> a.classList.remove("active"))
        a.classList.add("active");
        
        const menuBtnList = a.getAttribute("menu-best");
        bestItem.forEach((item)=> {
            item.classList.add("hidden")

            item.classList.forEach((val)=> {
                if(menuBtnList == val){
                    item.classList.remove("hidden")
                }else if(menuBtnList == "all"){
                    item.classList.remove("hidden")
                }
            })
        })
        
    })
})



// scroll up js

window.addEventListener("scroll", ()=> {
    const scrollEvent = document.getElementById("scroll-up");

    if(this.scrollY >= 600){
        scrollEvent.classList.remove("-bottom-[10%]")
        scrollEvent.classList.add("active")
    }else{
        scrollEvent.classList.add("-bottom-[10%]")
        scrollEvent.classList.remove("active")
    }
})

window.addEventListener("scroll", ()=> {
    const header = document.getElementById("header");

    if(this.scrollY >= 50){
        header.classList.add("border-b", "border-white")
    }else{
        header.classList.remove("border-b", "border-white")
    }
})

// darkmood on of
const lightMoodOn = document.querySelector("#lightMoodOn");
const darkMoodOn = document.querySelector("#darkMoodOn");
const html = document.querySelector("html");

darkMoodOn.addEventListener("click", ()=> {
    html.classList.add("dark")
    darkMoodOn.classList.add("hidden")
    lightMoodOn.classList.remove("hidden")
})
lightMoodOn.addEventListener("click", ()=> {
    html.classList.remove("dark")
    darkMoodOn.classList.remove("hidden")
    lightMoodOn.classList.add("hidden")
})


// scroll section activce link

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#nav-link");

    let current = "home";
    sections.forEach((section)=> {
        let sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    })
    navLinks.forEach((item)=> {
        item.classList.remove("text-blue-600");
        if(item.href.includes(current)){
            item.classList.add("text-blue-600");
        }
    })

}

window.addEventListener("scroll", activeLink);


// Scroll revel animation
const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    delay: 400
})

sr.reveal(".home_img");
sr.reveal(".home_content", {origin: "bottom"});

// sr.reveal(".catagory_card", {interval: 200});

// sr.reveal(".menu_drink1", {origin: "left"});
// sr.reveal(".menu_drink2", {origin: "right"});
// sr.reveal(".menu_drink3", {origin: "left"});

// sr.reveal(".popular_item1", {origin: "left"});
// sr.reveal(".popular_item2", {origin: "right"});
// sr.reveal(".popular_item3", {origin: "left"});

// sr.reveal(".best_items", {origin: "left"});

