// All user authentication here
import { User } from "../class/User.js";
import { Tasks } from "../class/Tasks.js";

// Calling the DOM
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword')
const logEmail = document.getElementById('email');
const logPassword = document.getElementById('password');

export function registerUser(){
    const registerBtn = document.getElementById('registerBtn');

    if(registerBtn){
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Values
            const username = userName.value 
            const email = userEmail.value 
            const password = userPassword.value

            const users = JSON.parse(localStorage.getItem('allUsers')) || [];
            const emailExist = users.some(user => user.email === email);

            if(emailExist){
                console.log('usuario existe')
            } else {
                const newUser = new User(username,email,password);
                users.push(newUser);
                localStorage.setItem('allUsers', JSON.stringify(users));
            }
        })
    }
}

export function loginUser(){
    const loginBtn = document.getElementById('loginBtn');

    if(loginBtn){
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const email = logEmail.value 
            const password = logPassword.value 

            if(email != '' && password != ''){
                const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

                if(allUsers){
                    console.log(allUsers)
                    const userExists = allUsers.find(user => user.email === email && user.password === password);

                    if(userExists){
                        sessionStorage.setItem('activeUser', email);
                        location.href = "./src/views/home.html"
                    } else {
                        console.log('Usuario no encontrado. Verifica credenciales.')
                    }
                } else {
                    console.log('No hay una base de datos disponible.')
                }
            } else {
                console.log('Datos incompletos.')
            }
        })
    }
}