import { login } from "./api.js";

const loginForm = document.querySelector('#loginForm');
const token = localStorage.getItem('loginData');
if (loginForm && token) {
    window.location.href = "../../account";
}

/*LOGIN FORM*/

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const loginFormUsername = document.getElementById("username").value;
        const loginFormPassword = document.getElementById("password").value;
        
        try {
            const loginData = await login(loginFormUsername, loginFormPassword);
    
            if (loginData !== undefined) {
                localStorage.setItem("loginData", JSON.stringify(loginData));
                window.location.href = "../../index.html";
            } else {
                const errorMessageElement = document.getElementById("errorMessage");
                errorMessageElement.textContent = "Email et/ou mot de passe incorrect(s).";
            }
        } catch (error) {
            console.error("Une erreur s'est produite : " + error.message);
        }
    });
}