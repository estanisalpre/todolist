// Functionality to add a new task here
export function deleteTask(){
    const deleteIcon = document.querySelectorAll("#deleteIcon")

    // Sessionstorage and localstorage
    const userEmail = sessionStorage.getItem('activeUser')
    const users = JSON.parse(localStorage.getItem('allUsers')) || [];
    const userIndex = users.findIndex(user => user.email === userEmail)

    if(deleteIcon && userIndex != -1){
        const allTasks = users[userIndex].tasks;

        deleteIcon.forEach(function(icon){
            icon.addEventListener('click', () => {
                const iconId = parseInt(icon.dataset.id)
                del(iconId, allTasks, users);             
            })
        })
    }
}

function del(id, array, userArray){
    const myindex = array.findIndex(ids => ids[0].taskId === id)
    array.splice(myindex, 1)
    localStorage.setItem('allUsers', JSON.stringify(userArray))
    window.location.reload();
}
