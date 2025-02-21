export function addTask(){
    const newTaskInput = document.getElementById('newTask')
    const addBtn = document.getElementById('addBtn')

    if(addBtn){
        addBtn.addEventListener('click', () => {
            const newTaskValue = newTaskInput.value 

            if(newTaskValue != ''){
                // Sessionstorage and localstorage
                const userEmail = sessionStorage.getItem('activeUser')
                const users = JSON.parse(localStorage.getItem('allUsers')) || [];
                const userIndex = users.findIndex(user => user.email === userEmail)

                if(userIndex != -1){
                    const taskLength = users[userIndex].tasks.length;
                    const newTaskId = taskLength + 1;

                    const newTask = Array(
                        {
                            taskId: newTaskId,
                            taskDescription: newTaskValue,
                            taskCompleted: 0
                        }
                    )

                    users[userIndex].tasks.push(newTask)
                    localStorage.setItem('allUsers', JSON.stringify(users))
                    window.location.reload();
                } else {
                    alert('No existe el usuario para almacenar la tarea.')
                }
            } else {
                alert('No hay texto para agregar.')
            }
        })
    } else {
        alert('Boton "agregar" inexistente.')
    }
}