const animatedPresentation = document.getElementById('animatedPresentation');
const mediaContainer = document.getElementById('media-container');
const discoverMe = document.getElementById('discoverMe');
const header = document.getElementById('responsive-navbar');


// const menuHamburger = document.querySelector(".menu-logo");
// const navLinks = document.getElementById('responsive-navbar');

// menuHamburger.addEventListener('click',()=>{
//   navLinks.classList.toggle('mobile-menu')
//   })
  



    function onLaunchRunTypeWriter() {

      const typeWriter = new Typewriter(animatedPresentation,{
            deleteSpeed : 20
        })
        .start()
        .pauseFor(200)
        .changeDelay(70)
        .typeString("Moi c'est <strong> François Kukla</strong>,")
        .pauseFor(1000)
        
        .typeString("<br> Je suis développeur ")
        .pauseFor(100)
        
        .typeString("<span class='webDev'> Web.</span>")
        .pauseFor(1000)
        .deleteChars(4)
        
        .typeString("<span class='phpDev'> PhP.</span>")
        .pauseFor(1000)
        .deleteChars(4)
        
        .typeString("<span class='javaDev'> Java.</span>")
        .pauseFor(1000)
        .deleteChars(5)
        
        .typeString("<span class='fullstackDev'>Full-stack.</span>")

     };

     function onLaunchRunMediaBtn() {
        setTimeout(() => {
            mediaContainer.classList.add('appearMediaBtn');
           }, "12000")
         setTimeout(() => {
           discoverMe.classList.add('appearMediaBtn');
         }, "13000")
    }

document.addEventListener("DOMContentLoaded", () =>{
    onLaunchRunTypeWriter();
    onLaunchRunMediaBtn();
});


window.addEventListener('scroll', () =>{


if ( scrollY > 10) {
    mediaContainer.classList.add('appearMediaBtn');
    discoverMe.classList.add('appearMediaBtn');
}

// if (scrollY > 500) {
// header.style.top = 0;
// } else {
//   header.style.top = "-100px";
 
// }


});





 

 