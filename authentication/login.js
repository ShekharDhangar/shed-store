
const signUpForm = document.getElementById('sign-up'),
trylogIn = document.getElementById('try-login'),
trySignUp = document.getElementById('try-signup'),
logInForm = document.getElementById('login');
const passwordEye = document.querySelector('.password-control');
const showPasswordInp = document.querySelector('.see-password-input');    

trySignUp.addEventListener('click', changeForm)
trylogIn.addEventListener('click', changeForm)

function changeForm(){
    signUpForm.classList.toggle('none')
    logInForm.classList.toggle('none');
}
// see password value 
const show_hide_password = event => {
    event.target.classList.toggle('view'); (showPasswordInp.getAttribute('type') == 'password')? showPasswordInp.setAttribute('type', 'text') : showPasswordInp.setAttribute('type', 'password');
}
passwordEye.addEventListener('click',show_hide_password)

