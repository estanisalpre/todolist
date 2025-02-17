import { Tasks } from "./Tasks.js";

export class User {
    constructor(username, email, password, tasks = null){
        this.username = username;
        this.email = email;
        this.password = password;
        this.tasks = tasks;
    }
}