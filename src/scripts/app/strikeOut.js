// Strike out functionality here
export function strikeOut(){
    const userEmail = sessionStorage.getItem('activeUser')
    const users = JSON.parse(localStorage.getItem('allUsers')) || [];
    const userIndex = users.findIndex(user => user.email === userEmail)

    if (userIndex != -1){
        const allTasks = users[userIndex].tasks
        const taskLi = document.querySelectorAll('.task')

        taskLi.forEach(function(strike){
            strike.addEventListener('click', () => {
                const taskValue = parseInt(strike.dataset.id)
                const local = taskValue - 1;
                const task = allTasks[local][0];
                const taskCompleted = task.taskCompleted;

                if (taskCompleted === 0) {
                    strike.classList.add('completed');
                    task.taskCompleted = 1; 
                } else {
                    strike.classList.remove('completed');
                    task.taskCompleted = 0; 
                    window.location.reload();
                }
                localStorage.setItem('allUsers', JSON.stringify(users));
            })
        })
    } else {
        alert('Usuario no existe')
    }
}