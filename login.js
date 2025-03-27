'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        const loginData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch("https://back-spider.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login bem-sucedido!");
                localStorage.setItem("token", data.token); // Armazena o token para autenticação futura
                window.location.href = "home.html"; // Redireciona para a página home
            } else {
                alert(data.message || "Erro ao fazer login. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
        }
    });
});
