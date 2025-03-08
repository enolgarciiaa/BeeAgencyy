document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let isValid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const business = document.getElementById("business");
        const service = document.getElementById("service");
        const message = document.getElementById("message");
        
        clearErrors();
        
        if (name.value.trim() === "") {
            showError(name, "El nombre es obligatorio.");
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, "Ingresa un correo válido.");
            isValid = false;
        }

        if (business.value.trim() === "") {
            showError(business, "El nombre del negocio es obligatorio.");
            isValid = false;
        }

        if (service.value === "") {
            showError(service, "Selecciona un servicio.");
            isValid = false;
        }

        if (message.value.trim() === "") {
            showError(message, "Por favor, cuéntanos en qué podemos ayudarte.");
            isValid = false;
        }
        
        if (isValid) {
            alert("Formulario enviado correctamente");
            form.reset();
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showError(input, message) {
        const error = document.createElement("p");
        error.classList.add("error-message");
        error.textContent = message;
        input.parentElement.appendChild(error);
        input.classList.add("input-error");
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => error.remove());
        document.querySelectorAll(".input-error").forEach(input => input.classList.remove("input-error"));
    }
});
