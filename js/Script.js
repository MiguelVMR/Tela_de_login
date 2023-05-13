const wrapper =  document.querySelector('.wrapper');
const login =  document.querySelector('.login-link');
const register =  document.querySelector('.register-link');
const btn =  document.querySelector('.btn-login');
const icon =  document.querySelector('.icon-close');

register.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
login.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
icon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});