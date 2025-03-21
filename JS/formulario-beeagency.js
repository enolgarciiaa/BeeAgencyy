document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let name = document.getElementById("name").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || lastname === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    alert("¡Formulario enviado con éxito!");
    this.reset(); // Resetea el formulario
});

// Función para validar email con expresión regular
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
