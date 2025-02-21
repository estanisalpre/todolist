export function homeControllers(){
    printName();
}

function printName(){
    const activeUser = sessionStorage.getItem('activeUser')
    const users = JSON.parse(localStorage.getItem('allUsers')) || [];
    const findIndex = users.findIndex(user => user.email === activeUser)
    const userName = users[findIndex].username;

    const welcomeSpan = document.getElementById('welcomeSpan')

    if(findIndex != -1){
        welcomeSpan.textContent = `Hola, ${userName} 👋`
    } else {
        welcomeSpan.textContent = `Hola, desconocido/a 🤨`
    }
}