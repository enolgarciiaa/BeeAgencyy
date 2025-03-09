document.addEventListener("DOMContentLoaded", function () {
  let typingText = document.getElementById("typing-text");
  let logo = document.getElementById("logo");
  let preloader = document.getElementById("preloader");
  let content = document.querySelector("main");
  let fullText = "BEEAGENCY";
  let index = 0;

  // Deshabilitar el scroll al inicio
  document.body.classList.add("no-scroll");

  if (sessionStorage.getItem("animationShown")) {
    preloader.style.display = "none";
    content.style.display = "block";
    document.body.classList.remove("no-scroll"); // Habilitar scroll inmediatamente si la animación ya ocurrió
    return;
  }

  function typeEffect(text, speed, callback) {
    index = 0;
    let typingInterval = setInterval(() => {
      typingText.textContent = text.slice(0, index);
      index++;
      if (index > text.length) {
        clearInterval(typingInterval);
        setTimeout(callback, 1000);
      }
    }, speed);
  }

  function deleteEffect(speed, callback) {
    let deleteInterval = setInterval(() => {
      typingText.textContent = typingText.textContent.slice(0, -1);
      if (typingText.textContent.length === 0) {
        clearInterval(deleteInterval);
        setTimeout(callback, 500);
      }
    }, speed);
  }

  typeEffect(fullText, 150, () => {
    deleteEffect(100, () => {
      typingText.style.display = "none";
      logo.style.display = "block";
      setTimeout(() => {
        logo.style.opacity = "1";
        setTimeout(() => {
          preloader.style.opacity = "0";
          preloader.style.visibility = "hidden";
          content.style.display = "block";

          // Habilitar el scroll después de que termine la animación
          document.body.classList.remove("no-scroll");

          sessionStorage.setItem("animationShown", "true");
        }, 2000);
      }, 500);
    });
  });
});

