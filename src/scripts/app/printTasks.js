// Reading and printing all the tasks
export function printTasks(){
    // Sessionstorage and localstorage
    const userEmail = sessionStorage.getItem('activeUser')
    const users = JSON.parse(localStorage.getItem('allUsers')) || [];
    const userIndex = users.findIndex(user => user.email === userEmail)

    const tasksEmpty = document.getElementById('tasksEmpty')
    const logo = document.getElementById('logo')

    if(userIndex != -1){
        const taskUl = document.getElementById('taskList')
        const allTasks = users[userIndex].tasks;

        if(allTasks.length === 0){
            taskUl.style.justifyContent = 'center'
            logo.style.display = 'flex'
            tasksEmpty.style.display = 'flex'
            tasksEmpty.textContent = 'Aún no hay tareas ingresadas.'
            return;
        }

        allTasks.forEach(function(task){
            let newLi = document.createElement('li')
            let spanDescription = document.createElement('span')
            let iconsContainer = document.createElement('div')
            let editIcon = document.createElement('img')
            let deleteIcon = document.createElement('img')

            let taskId = task[0].taskId;
            let delId = task[0].taskId;
            let editId = task[0].taskId;
            let taskState = task[0].taskCompleted;

            editIcon.setAttribute("src", "/src/assets/icons/edit.png")
            deleteIcon.setAttribute("src", "/src/assets/icons/delete.png")
            editIcon.setAttribute("id", "editIcon")
            editIcon.setAttribute("data-id", editId)
            deleteIcon.setAttribute("id", "deleteIcon")
            deleteIcon.setAttribute("data-id", delId)
            newLi.setAttribute("data-id", taskId)
            newLi.classList.add('li')

            if(taskState == 1){
                spanDescription.classList.add('task')
                spanDescription.setAttribute("data-id", taskId)
                spanDescription.classList.add('taskDesc')
                spanDescription.classList.add('completed')

                spanDescription.textContent = task[0].taskDescription;
                
                iconsContainer.appendChild(editIcon)
                iconsContainer.appendChild(deleteIcon)
                taskUl.appendChild(newLi)
                newLi.appendChild(spanDescription)
                newLi.appendChild(iconsContainer)
            } else {
                spanDescription.classList.add('task')
                spanDescription.setAttribute("data-id", taskId)
                spanDescription.classList.add('taskDesc')
                spanDescription.classList.remove('completed')

                spanDescription.textContent = task[0].taskDescription;
                
                iconsContainer.appendChild(editIcon)
                iconsContainer.appendChild(deleteIcon)
                taskUl.appendChild(newLi)
                newLi.appendChild(spanDescription)
                newLi.appendChild(iconsContainer)
            }
        })  
    } else {
        alert('Usuario no encontrado')
    }
}