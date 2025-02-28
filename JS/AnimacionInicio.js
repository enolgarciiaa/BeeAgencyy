document.addEventListener("DOMContentLoaded", function () {
  let typingText = document.getElementById("typing-text");
  let logo = document.getElementById("logo");
  let preloader = document.getElementById("preloader");
  let content = document.querySelector("main"); // Para mostrar el contenido tras la animación
  let fullText = "BEEAGENCY"; // Texto a escribir
  let index = 0;

  // Verificar si la animación ya se mostró en esta sesión
  if (sessionStorage.getItem("animationShown")) {
    preloader.style.display = "none"; // Oculta el preloader
    content.style.display = "block"; // Muestra directamente el contenido
    return;
  }

  // Función para escribir el texto
  function typeEffect(text, speed, callback) {
    index = 0;
    let typingInterval = setInterval(() => {
      typingText.textContent = text.slice(0, index);
      index++;

      if (index > text.length) {
        clearInterval(typingInterval);
        setTimeout(callback, 1000); // Espera 1s antes de borrar
      }
    }, speed);
  }

  // Función para borrar el texto
  function deleteEffect(speed, callback) {
    let deleteInterval = setInterval(() => {
      typingText.textContent = typingText.textContent.slice(0, -1);

      if (typingText.textContent.length === 0) {
        clearInterval(deleteInterval);
        setTimeout(callback, 500); // Espera 0.5s antes de mostrar el logo
      }
    }, speed);
  }

  // Secuencia de animación
  typeEffect(fullText, 150, () => {
    deleteEffect(100, () => {
      typingText.style.display = "none"; // Oculta el texto
      logo.style.display = "block"; // Muestra el logo
      setTimeout(() => {
        logo.style.opacity = "1"; // Hace que aparezca con transición
        setTimeout(() => {
          preloader.style.opacity = "0";
          preloader.style.visibility = "hidden";
          content.style.display = "block";

          // Guardar en sessionStorage para que no se repita la animación
          sessionStorage.setItem("animationShown", "true");
        }, 2000); // Espera 2s con el logo antes de mostrar la web
      }, 500);
    });
  });
});
