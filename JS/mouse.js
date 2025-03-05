const cursor = document.getElementById("custom-cursor");
const tooltip = document.createElement("div");
tooltip.id = "cursor-tooltip";
tooltip.innerText = "Saber más";
document.body.appendChild(tooltip);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const delay = 0.2; // Velocidad del retraso

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.opacity = "1";
});

// Función de interpolación suave
function animateCursor() {
  cursorX += (mouseX - cursorX) * delay;
  cursorY += (mouseY - cursorY) * delay;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  tooltip.style.left = `${cursorX + 25}px`; // Ajusta el texto a la derecha del cursor
  tooltip.style.top = `${cursorY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor(); // Inicia la animación

// Efecto en enlaces (<a>): El cursor crece
document.querySelectorAll("ul").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("view-mode");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("view-mode");
  });
});

// Efecto en botones (<button>): Se muestra el tooltip
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    tooltip.style.opacity = "1";
  });
  button.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});




