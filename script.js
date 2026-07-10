const button = document.getElementById("letterButton");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");

button.addEventListener("click", () => {
    overlay.classList.add("show");
});

close.addEventListener("click", () => {
    overlay.classList.remove("show");
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("show");
    }
});document.getElementById("overlay").classList.remove("show")