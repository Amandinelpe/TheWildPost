// const ul    = document.querySelector(".navEffect");
// const allLi = ul.querySelectorAll("li");

// for ( let i = 0; i <allLi.length; i++){
//     let li = allLi[i];

//     li.addEventListener("click", function() {
        
//     })
// }



document.getElementById('myBtn').addEventListener('click', vintage);

function vintage() {
    document.querySelector('.container').classList.toggle('vintage');   
}