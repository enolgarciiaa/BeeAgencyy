document.addEventListener("DOMContentLoaded", function () {
    const highlight = document.querySelector(".highlight");
    const tooltip = document.getElementById("tooltip");

    highlight.addEventListener("mouseenter", function () {
        const images = this.getAttribute("data-images").split(",");
        
        tooltip.innerHTML = "";
        images.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.style.animationDelay = `${index * 0.5}s`; // Retraso para cada imagen
            tooltip.appendChild(img);
        });

        tooltip.style.display = "flex";
        setTimeout(() => {
            tooltip.style.opacity = "1";
            showImagesSequentially(tooltip);
        }, 100);
    });

    highlight.addEventListener("mouseleave", function () {
        tooltip.style.opacity = "0";
        setTimeout(() => {
            tooltip.style.display = "none";
        }, 500);
    });

    function showImagesSequentially(tooltip) {
        const images = tooltip.querySelectorAll("img");
        images.forEach((img, index) => {
            setTimeout(() => {
                const randomRotation = (Math.random() * 40 - 30).toFixed(2); // Rotación entre -10° y 10°
                img.style.opacity = "1";
                img.style.transform = `scale(1) rotate(${randomRotation}deg)`;
            }, index * 500);
        });
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    const highlight = document.querySelector(".highlight2");
    const tooltip = document.getElementById("tooltip2");

    highlight.addEventListener("mouseenter", function () {
        const images = this.getAttribute("data-images").split(",");
        
        tooltip.innerHTML = "";
        images.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.style.animationDelay = `${index * 0.5}s`; // Retraso para cada imagen
            tooltip.appendChild(img);
        });

        tooltip.style.display = "flex";
        setTimeout(() => {
            tooltip.style.opacity = "1";
            showImagesSequentially(tooltip);
        }, 100);
    });

    highlight.addEventListener("mouseleave", function () {
        tooltip.style.opacity = "0";
        setTimeout(() => {
            tooltip.style.display = "none";
        }, 500);
    });

    function showImagesSequentially(tooltip) {
        const images = tooltip.querySelectorAll("img");
        images.forEach((img, index) => {
            setTimeout(() => {
                const randomRotation = (Math.random() * 40 - 30).toFixed(2); // Rotación entre -10° y 10°
                img.style.opacity = "1";
                img.style.transform = `scale(1) rotate(${randomRotation}deg)`;
            }, index * 500);
        });
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    const highlight = document.querySelector(".highlight3");
    const tooltip = document.getElementById("tooltip3");

    highlight.addEventListener("mouseenter", function () {
        const images = this.getAttribute("data-images").split(",");
        
        tooltip.innerHTML = "";
        images.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.style.animationDelay = `${index * 0.5}s`; // Retraso para cada imagen
            tooltip.appendChild(img);
        });

        tooltip.style.display = "flex";
        setTimeout(() => {
            tooltip.style.opacity = "1";
            showImagesSequentially(tooltip);
        }, 100);
    });

    highlight.addEventListener("mouseleave", function () {
        tooltip.style.opacity = "0";
        setTimeout(() => {
            tooltip.style.display = "none";
        }, 500);
    });

    function showImagesSequentially(tooltip) {
        const images = tooltip.querySelectorAll("img");
        images.forEach((img, index) => {
            setTimeout(() => {
                const randomRotation = (Math.random() * 40 - 30).toFixed(2); // Rotación entre -10° y 10°
                img.style.opacity = "1";
                img.style.transform = `scale(1) rotate(${randomRotation}deg)`;
            }, index * 500);
        });
    }
    
});

