// swipper
var swiper = new Swiper(".work__container", {
    spaceBetween:32,
    gradCursor:true,
    centeredSlides:true,
    slidePerView:"auto",
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// about acording

const aboutItems=document.querySelectorAll(".about__accordion__items");

aboutItems.forEach((item)=>{
  const aboutHeader=item.querySelector(".about__accordion__header");

  aboutHeader.addEventListener("click",()=>{
    const openItem=document.querySelector("accordion-open");
    
    toggleItem(item);

    if (openItem && openItem!==item){
      toggleItem(openItem);
    }
    
  })

})

const toggleItem=(item)=>{
  const accordionContent=item.querySelector(".about__accordion__content");
  if (item.classList.contains("accordion-open")){

    accordionContent.removeAttribute("style")
    item.classList.remove("accordion-open")
  }
  else{
    accordionContent.style.height=accordionContent.scrollHeight+"px";
    item.classList.add("accordion-open");
  }
}

// scroll sectiion active links

const sections=document.querySelectorAll("section[id]")

function scrollActive(){
  const scrollY=window.pageYOffset;

  sections.forEach(current=>{
    const sectionHeight=current.offsetHeight,
          sectionTop=current.offsetTop-60,
          sectionId=current.getAttribute("id")

    if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
      document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.add("active-link")
    }
    else{
      document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.remove("active-link")

    }

  })
}

window.addEventListener("scroll",scrollActive);


// show scroll up

function scrollUp(){
  const scrollUp=document.getElementById("scrollUp");

  if(this.scrollY>400){
    scrollUp.classList.add("show-scroll");
  }else{
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll",scrollUp);

// dark light theme

const themeButton=document.getElementById("theme-button");
const darkTheme="dark-theme"
const iconTheme= "bx-sun"

const selectTheme=localStorage.getItem("selected-theme")
const selectedIcon=localStorage.getItem("selected-icon");

const getCurrentTheme=()=> document.body.classList.contains(darkTheme)?"dark":"light"
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"

if(selectTheme){
  document.body.classList[selectTheme==="dark" ? "add" :"remove"](darkTheme)
  themeButton.classList[selectedIcon==="bx bx-moon" ? "add":"remove"](iconTheme)

}


themeButton.addEventListener("click", ()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem("selected-them" ,getCurrentTheme)
  localStorage.setItem("selected-icon",getCurrentIcon)
})





// scrollreveal

const sr= ScrollReveal({
      origin:"top",
      distance:"40px",
      duration:2000,
      delay:300,
      // reset:true


})

sr.reveal("home__title, .work, .footer__container , .section__title")
sr.reveal(".home__description, .home__subtitle, .footer__info",{delay:500})
sr.reveal(".home__images",{delay:600, origin:"bottom"})


sr.reveal("logos__img",{setInterval:100})
sr.reveal(".contact__image, .contact__card", {origin:"left"})




// type writer

const homeSubtitle = document.getElementById('homeSubtitle');

const typewriter = new Typewriter(homeSubtitle, {
    loop: true
});

typewriter.typeString('Tornike Silakadze')
    .pauseFor(2500)
    .deleteAll()
    .typeString('თორნიკე სილაქაძე')
    .pauseFor(2500)
    .start();
