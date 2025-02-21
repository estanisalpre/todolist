const editModal = document.getElementById('editModal');
const editModalInput = document.getElementById('newInput'); 
const editModalBtn = document.getElementById('editModalBtn');

export function editTask() {
    const editIcons = document.querySelectorAll("#editIcon");

    const userEmail = sessionStorage.getItem('activeUser');
    const users = JSON.parse(localStorage.getItem('allUsers')) || [];
    const userIndex = users.findIndex(user => user.email === userEmail);

    if (editIcons.length > 0 && userIndex !== -1) {
        const allTasks = users[userIndex].tasks.flat() || [];

        editIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const taskId = parseInt(icon.dataset.id); 
                const taskIndex = allTasks.findIndex(task => task.taskId === taskId);

                if (taskIndex !== -1) {
                    editModal.style.display = 'flex';
                    editModalInput.value = allTasks[taskIndex]?.taskDescription || "";

                    editModalBtn.onclick = function () {
                        allTasks[taskIndex].taskDescription = editModalInput.value; 
                        localStorage.setItem('allUsers', JSON.stringify(users)); 
                        editModal.style.display = 'none';
                        window.location.reload();
                    };
                } else {
                    console.error("No se encontró la tarea con el ID:", taskId);
                }
            });
        });
    } else {
        console.warn("No se encontraron iconos de edición o el usuario no existe.");
    }
}

// Cerrar el modal
export function closeModal() {
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            editModal.style.display = 'none';
        });
    }
}
