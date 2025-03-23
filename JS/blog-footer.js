document.addEventListener("DOMContentLoaded", () => {
    fetch("/JSON/ResumenBlogFooter.json")
        .then(response => response.json())
        .then(data => {
            // Mostrar en secciones principales
            data.noticias.forEach(noticia => {
                const categoriaId = noticia.categoria.toLowerCase();
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

            // Mostrar en el footer
            const footerContainer = document.getElementById("footer-news");
            if (footerContainer) {
                data.noticias.forEach(noticia => {
                    const noticiaFooter = document.createElement("div");
                    noticiaFooter.classList.add("footer-noticia");
                    noticiaFooter.innerHTML = `
                        <img src="${noticia.imagen}" alt="${noticia.titulo}">
                        <div>
                            <h4>${noticia.titulo}</h4>
                            <p>${noticia.contenido}</p>
                        </div>
                    `;
                    footerContainer.appendChild(noticiaFooter);
                });
            }
        })
        .catch(error => console.error("Error cargando las noticias:", error));
});
