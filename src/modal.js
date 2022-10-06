// get modal element
const modal = document.getElementById('simpleModal');

// get open modal button
const modalBtn = document.querySelectorAll('.modalBtn');

// get close button
const closeBtn = document.querySelector('.closeBtn');

// get submit button

const submitBtn = document.querySelector('#submitBtn');

// listen for click
modalBtn.forEach(btn => {
  btn.addEventListener('click', openModal);
})


// Function for close click
closeBtn.addEventListener('click', closeModal);
submitBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', outsideClick);


// function to open modal
function openModal() {
    modal.style.display = 'block';
}

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}


// function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display ='none';
  }
}

