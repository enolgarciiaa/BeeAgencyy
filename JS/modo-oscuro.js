const toggleButton = document.getElementById("toggle-dark-mode");

// Cargar preferencia guardada
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Guardar preferencia en localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
