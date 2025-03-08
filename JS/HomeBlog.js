document.addEventListener("DOMContentLoaded", () => {
    fetch("JSON/ResumenBlog.json")
        .then(response => response.json())
        .then(data => {
            data.noticias.forEach(noticia => {
                const categoriaId = noticia.categoria.toLowerCase(); // Convertimos a minúsculas
                const seccion = document.getElementById(categoriaId);
                if (seccion) {
                    seccion.querySelector(".noticia").innerHTML = `
                        <img src="${noticia.imagen}" alt="${noticia.titulo}">
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.contenido}</p>
                    `;
                } else {
                    console.warn(`No se encontró la sección con id "${categoriaId}"`);
                }
            });
        })
        .catch(error => console.error("Error cargando las noticias:", error));
});