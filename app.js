//Navigation Script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("mouseover", function () {
      new Audio("./images/hover.mp3").play();
    });
  }

  //Appear On scroll
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

//Gsap and Tween Max Script
gsap.registerPlugin(ScrollTrigger)
TweenMax.from(".nav-logo",1,{
    opacity:0,
    x:-20,
    ease: Expo.easeInOut,
})

TweenMax.staggerFrom(".navbar ul li",1,{
    opacity:0,
    x:-20,
    ease: Power3.easeInOut,
},0.08)

TweenMax.from(".titlehead-container h1",1,{
    opacity:0,
    y:30,
    ease: Power3.easeInOut,
},0.2)
TweenMax.from(".titlehead-container p",1,{
    opacity:0,
    y:30,
    ease: Power3.easeInOut,
},0.4)

