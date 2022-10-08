// get form modal element

const modal = document.getElementById('simpleModal');

// get submit modal element

const submitModal = document.querySelector('#submitModal');

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
submitBtn.addEventListener('click', submitMsg);

// listen for outside click
window.addEventListener('click', outsideClick);


// function to open modal
function openModal() {
    modal.style.display = "block";
}

// function to close modal
function closeModal() {
    modal.style.display = "none";
}


// function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal){
        modal.style.display = "none";
  }
}

// submit msg

function submitMsg() {
  submitModal.style.display = "block";
  function slideOut() {
    submitModal.classList.add('msgClose');
  }
  setTimeout(slideOut, 3000);
  function closeMsg() {
    submitModal.style.display = "none";
    submitModal.classList.remove('msgClose');
  }
  setTimeout(closeMsg, 5000);
}

