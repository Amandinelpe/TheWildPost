const faFa = document.querySelector('.fa-bars');

// faFa.addEventListener("click", () => {
//   const burger = document.getElementById("navBurger");
//   if (burger.style.display == "none") {
//     burger.style.display = "block";
//   } else {
//     burger.style.display = "none";
//   }
// })

faFa.addEventListener("click", () => {
  const burger = document.getElementById("navBurger");
  burger.classList.toggle('burgerOut');

})