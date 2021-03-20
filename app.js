const typed = new Typed(".hpara",{
    strings:["Inspire...","Innovate...","Integrate..."],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
    showCursor:false
});

let menu = document.querySelector(".menu");
let links = document.querySelector(".links");
let navbar = document.querySelector(".navbar");
menu.addEventListener('click',()=>{
links.classList.toggle("active");
});