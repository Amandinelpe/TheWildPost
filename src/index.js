document.getElementById('myBtn').addEventListener('click', vintage);



function vintage() {
    const faFa = document.querySelector(".fa-bars");
    const navBurger = document.querySelector("#navBurger");
    document.querySelector('.container').classList.toggle('vintage');
    if (faFa.style.background === "none") {
    faFa.style.background = "white";
    } else {
      faFa.style.background = "none";
    };
    if (navBurger.style.background === "#F4E9DC") {
    navBurger.style.background = "white";
    } else {
      navBurger.style.background = "#F4E9DC";
    };
    
}

let navbar = document.querySelector('.navBar');
let myWindow = document.querySelector('.pageContent');

myWindow.addEventListener('scroll', function(){
  let navbar = document.querySelector('.navBar');
  navbar.classList.toggle("sticky", myWindow.scrollTop > 110);
})