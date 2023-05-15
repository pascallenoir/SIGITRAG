/* menu hamburger */
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
/* menu hamburger */

/*
  indicateur de position
*/window.onscroll = function() {
    /*
         Scroll Indicator
    */
         let pos =  document.documentElement.scrollTop;
         let calc_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         let scroll = pos * 100 / calc_height;
         document.getElementById("progress").style.width= `${scroll}%`;
     
         /*
             Scroll To Top
         */
        
         let scrollTopBtn = document.getElementById("scroll-top-btn");
         if(pos > 300){
             scrollTopBtn.style.display = "grid";
         }
         else{
             scrollTopBtn.style.display = "none";
         }
         scrollTopBtn.addEventListener("click",()=>{
             document.documentElement.scrollTop = 0;
         });
     }
         /*
   indicateur de position
*/