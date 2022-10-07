document.getElementById('myBtn').addEventListener('click', vintage);


function vintage() {
  const body = document.body;
  const navBar = document.querySelector('.navEffect');
  const burgerMenu = document.querySelector('#navBurger');
  console.log(burgerMenu);
  body.classList.toggle('vintageStyle');
  navBar.classList.toggle('vintageStyle');
  burgerMenu.classList.toggle('vintageStyle');
  document.querySelector('.container').classList.toggle('vintage');
  
}

const video = document.getElementById("trump");

video.addEventListener("mouseover", function() {
	this.play();
});
video.addEventListener("mouseleave", function() {
	this.pause();
});

// mobile

video.addEventListener("touchstart", function() {
	this.play();
});
video.addEventListener("touchend", function() {
	this.pause();
});


// function vintage() {
//     const faFa = document.querySelector(".fa-bars");
//     const navBurger = document.querySelector("#navBurger");
//     document.querySelector('.container').classList.toggle('vintage');
//     if (faFa.style.background === "none") {
//     faFa.style.background = "white";
//     } else {
//       faFa.style.background = "none";
//     };
//     if (navBurger.style.background === "#F4E9DC") {
//     navBurger.style.background = "white";
//     } else {
//       navBurger.style.background = "#F4E9DC";
//     };
    
// }

let navbar = document.querySelector('.navBar');
let myWindow = document.querySelector('.pageContent');

myWindow.addEventListener('scroll', function(){
  let navbar = document.querySelector('.navBar');
  navbar.classList.toggle("sticky", myWindow.scrollTop > 115);
})