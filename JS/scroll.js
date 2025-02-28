// Detecta el scroll y cambia el color del nav
window.onscroll = function() {
    const nav = document.querySelector('nav');
    
    
    // Si el scroll es mayor a 50px, se cambia el color
    if (window.scrollY > 250) {
      nav.classList.add('scrolled'); // Añadir clase para color más claro
    } else {
      nav.classList.remove('scrolled'); // Eliminar clase si no hay scroll
    }
  };
  
  