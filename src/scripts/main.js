import { loginUser, registerUser } from "./auth/userAuth.js"

document.addEventListener('DOMContentLoaded', () => {
    registerUser();
    loginUser();
})