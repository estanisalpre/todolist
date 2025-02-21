export function logout(){
    const logoutBtn = document.getElementById('logoutIcon');

    if(logoutBtn){
        logoutBtn.addEventListener('click', () => {
            const activeUser = sessionStorage.getItem('activeUser')

            if (activeUser != ''){
                location.href = '../../index.html'
                sessionStorage.removeItem('activeUser')
            } else {
                alert('No hay una sesión activa para cerrar')
            }
        })
    } else {
        alert('Error al cerrar sesión')
    }
}