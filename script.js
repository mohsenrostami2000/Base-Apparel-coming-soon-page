// select items
const btn = document.querySelector('.btn');
const success = document.querySelector('.success');
const error = document.querySelector('.error');
const form = document.getElementById('form');

// add event to btn

btn.addEventListener('click', function validation (e) {
    
    let email = document.getElementById("email").value;
    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?/
    // console.log(email)
    e.preventDefault()
     if (email.match(regx)) {
        
        return successResult();
        
    } else {
        if(email === ""){
            // alert('please enter your email')
            emptyError();
        } else {
            validationError();
        }
    }

})



function successResult() {
    success.innerHTML = `<p>Thanks for submiting</p>`;
        success.style.display = "block";
        setTimeout(() => {
            success.classList.add('hide');
            form.reset();
        }, 3000);
}

function emptyError() {
    error.innerHTML = `<p>Please enter your email</p>
    <img src="./images/icon-error.svg" alt="error">`;
    
    error.style.display = 'flex'
    setTimeout(() => {
        error.classList.add('hide')
    }, 2000)
}

function validationError() {
    error.innerHTML = `<p>Email format is not valid</p>
    <img src="./images/icon-error.svg" alt="error">`;
    
    error.style.display = 'flex'
    setTimeout(() => {
        error.classList.add('hide')
    }, 2000)
}