document.getElementById('myBtn').addEventListener('click', vintage);

function vintage() {
  const body = document.body;
  const navBar = document.querySelector('.navEffect');
  const burgerMenu = document.querySelector('#navBurger');
  body.classList.toggle('vintageStyle');
  navBar.classList.toggle('vintageStyle');
  burgerMenu.classList.toggle('vintageStyle');
  submitModal.classList.toggle('vintageStyle');
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

// video.addEventListener("touchstart", function() {
// 	this.play();
// });
// video.addEventListener("touchend", function() {
// 	this.pause();
// });


let myWindow = document.querySelector('.pageContent');

myWindow.addEventListener('scroll', function(){
  let navbar = document.querySelector('.navBar');
  navbar.classList.toggle('sticky', myWindow.scrollTop > 115);
})