// All app functionality ends here
import { addTask } from "./app/addTask.js";
import { deleteTask } from "./app/deleteTask.js";
import { closeModal, editTask } from "./app/editTask.js";
import { printTasks } from "./app/printTasks.js";
import { strikeOut } from "./app/strikeOut.js";
import { logout } from "./auth/logout.js"
import { homeControllers } from "./controllers/homeController.js";

document.addEventListener('DOMContentLoaded', () => {
    homeControllers();
    // Task functionality
    printTasks();
    strikeOut();
    addTask();
    editTask();
    deleteTask();

    logout();
    closeModal();
})