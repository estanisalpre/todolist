import { loginUser, registerUser } from "./auth/userAuth.js"
import { allControllers } from "./controllers/mainController.js";

document.addEventListener('DOMContentLoaded', () => {
    allControllers();
    registerUser();
    loginUser();
})