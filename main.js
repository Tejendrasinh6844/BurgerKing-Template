// hamburger menu for navbar 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll("nav__Link");

navLink.forEach(link=>
    link.addEventListener("click",()=>{
        navMenu.classList.add("hidden");
    })
    )

hamburger.addEventListener("click",()=>{
navMenu.classList.remove("hidden");
})
closeIcon.addEventListener("click",()=>{
navMenu.classList.add("hidden");
})

// tabs 
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item__wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");



tabs.forEach(tab =>{
    tab.addEventListener("click",()=>{
        tabs.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active");

        const tabVal = tab.getAttribute("data-tabs");
        all.forEach(item=>{
            item.style.display= "none"
        })
        if(tabVal == "food"){
            foods.forEach(items=>{items.style.display = "block"})
        }

       else if(tabVal == "snack"){
            snacks.forEach(items=>{items.style.display = "block"})
        }
        else if(tabVal == "beverage"){
            beverages.forEach(items=>{items.style.display = "block"})
        }
        else {
            all.forEach(items=>{items.style.display = "block"})
        }
    })
})


// show scroll up 
const  scrollUp= ()=>{
    const scrollUpBtn = document.getElementById("scroll-up");
    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
 else{
    scrollUpBtn.classList.remove("bottom-4");
    scrollUpBtn.classList.add("-bottom-1/2");
 }
}
window.addEventListener("scroll", scrollUp)

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// Scroll header  
const  scrollHeader= ()=>{
    const header= document.getElementById("header");
    if(this.scrollY >= 50){
        // scrollUpHeader.classList.remove("-bottom-1/2");
        header.classList.add("border-b", "border-secondaryColor");
    }
 else{
    header.classList.remove("border-b", "border-secondaryColor");
    // scrollUpHeader.classList.add("-bottom-1/2");
 }
}
window.addEventListener("scroll", scrollHeader)

//    Scroll Section Active Link 
const activeLink=()=>{
  const section = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav__link")
  let current = "home";
  section.forEach(section => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60 ){
current = section.getAttribute("id")
    }
  })
    navLinks.forEach(item=>{
item.classList.remove("text-secondaryColor")
if(item.href.includes(current)){
  item.classList.add("text-secondaryColor")
}
  
  })
}
window.addEventListener("scroll", activeLink)
