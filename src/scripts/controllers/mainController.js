const startBtn = document.getElementById('startBtn')
const regLoginContainer = document.getElementById('regLoginContainer')
const showLogin = document.getElementById('showLoginForm')
const showRegister = document.getElementById('showRegisterForm')
const loginContainer = document.getElementById('loginContainer')
const registerContainer = document.getElementById('registerContainer')

export function allControllers(){
    openModals();
}

function openModals(){
    if(startBtn){
        startBtn.addEventListener('click', () => {
            regLoginContainer.style.display = 'flex'
        })
    }

    if(showLogin){
        showLogin.addEventListener('click', () => {
            loginContainer.style.display = 'flex'
            registerContainer.style.display = 'none'
        })
    }

    if(showRegister){
        showRegister.addEventListener('click', () => {
            registerContainer.style.display = 'flex'
            loginContainer.style.display = 'none'
        })
    }
}
