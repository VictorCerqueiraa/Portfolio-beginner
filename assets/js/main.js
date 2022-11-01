//menu
const burguer = document.querySelector('#burguer')
const nav = document.querySelector('#nav-bar')

burguer.addEventListener("click", () =>{
   burguer.classList.toggle('active');
   nav.classList.toggle('active');
})
//dark-mode

const dark = document.querySelector('#dark')
const darkMode = document.querySelector('#dark-mode')
const  navBar= document.querySelector('nav')
const  logo  = document.querySelector('.logo')
const main = document.querySelector('body')
const home = document.querySelector('.home')
const footer = document.querySelector('footer')
const menu = document.querySelector('.menu')
const menu1 = document.querySelector('.menu1')
const menu2 = document.querySelector('.menu2')
const pic = document.querySelector('.pictu')
const bar = document.querySelector('.bar')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')

darkMode.addEventListener("click", () =>{
   dark.classList.toggle("active")
   darkMode.classList.toggle("active")
   navBar.classList.toggle("active")
   logo.classList.toggle("active")
   main.classList.toggle("active")
   footer.classList.toggle("active")
   menu.classList.toggle("active")
   menu1.classList.toggle("active")
   menu2.classList.toggle("active")
   home.classList.toggle("active")
   pic.classList.toggle("active")
   bar.classList.toggle('active')
   bar1.classList.toggle('active')
   bar2.classList.toggle('active')
   nav.classList.toggle('enable')
})