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


// When the user clicks on div, open the popup
function pdgmyEmail() {
  // pdg
  var pdgmyEmail = document.getElementById("pdgmyEmail");
  pdgmyEmail.classList.toggle("show");
}

function pdgmyfacebook() {
  // pdg
  var pdgmyfacebook = document.getElementById("pdgmyfacebook");
  pdgmyfacebook.classList.toggle("show");
}

function pdgmylinkedin() {
  // pdg
  var pdgmylinkedin = document.getElementById("pdgmylinkedin");
  pdgmylinkedin.classList.toggle("show");
}
//////////////////////////////////////////////////////

// When the user clicks on div, open the popup
function dgmyEmail() {
  var dgmyEmail = document.getElementById("dgmyEmail");
  dgmyEmail.classList.toggle("show");
}

function dgmyfacebook() {
  var dgmyfacebook = document.getElementById("dgmyfacebook");
  dgmyfacebook.classList.toggle("show");
}

function dgmylinkedin() {
  var dgmylinkedin = document.getElementById("dgmylinkedin");
  dgmylinkedin.classList.toggle("show");
}
//////////////////////////////////////////////////////


// When the user clicks on div, open the popup
function ComptablemyEmail() {
  var ComptablemyEmail = document.getElementById("ComptablemyEmail");
  ComptablemyEmail.classList.toggle("show");
}

function Comptablemyfacebook() {
  var Comptablemyfacebook = document.getElementById("Comptablemyfacebook");
  Comptablemyfacebook.classList.toggle("show");
}

function Comptablemylinkedin() {
  var Comptablemylinkedin = document.getElementById("Comptablemylinkedin");
  Comptablemylinkedin.classList.toggle("show");
}
//////////////////////////////////////////////////////

// When the user clicks on div, open the popup
function RespOpmyEmail() {
  var RespOpmyEmail = document.getElementById("RespOpmyEmail");
  RespOpmyEmail.classList.toggle("show");
}

function RespOpmyfacebook() {
  var RespOpmyfacebook = document.getElementById("RespOpmyfacebook");
  RespOpmyfacebook.classList.toggle("show");
}

function RespOpmylinkedin() {
  var RespOpmylinkedin = document.getElementById("RespOpmylinkedin");
  RespOpmylinkedin.classList.toggle("show");
}
//////////////////////////////////////////////////////

// When the user clicks on div, open the popup
function RespCommyEmail() {
  var RespCommyEmail = document.getElementById("RespCommyEmail");
  RespCommyEmail.classList.toggle("show");
}

function RespCommyfacebook() {
  var RespCommyfacebook = document.getElementById("RespCommyfacebook");
  RespCommyfacebook.classList.toggle("show");
}

function RespCommylinkedin() {
  var RespCommylinkedin = document.getElementById("RespCommylinkedin");
  RespCommylinkedin.classList.toggle("show");
}
//////////////////////////////////////////////////////


// When the user clicks on div, open the popup
function RespMarmyEmail() {
  var RespMarmyEmail = document.getElementById("RespMarmyEmail");
  RespMarmyEmail.classList.toggle("show");
}

function RespMarmyfacebook() {
  var RespMarmyfacebook = document.getElementById("RespMarmyfacebook");
  RespMarmyfacebook.classList.toggle("show");
}

function RespMarmylinkedin() {
  var RespMarmylinkedin = document.getElementById("RespMarmylinkedin");
  RespMarmylinkedin.classList.toggle("show");
}
//////////////////////////////////////////////////////

