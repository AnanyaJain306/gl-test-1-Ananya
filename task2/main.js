const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const password = document.querySelector('#password');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    var valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;

    if(nameInput.value === '' || emailInput.value === '' || password.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }
    if(nameInput.value.length < 4){
        alert('Enter Valid Name! Minimum 4 characters required.');
    } 
    if(password.value.length < 6 || !password.value.match(valid)){
        alert('Enter Valid Password!');
    }
    
}
