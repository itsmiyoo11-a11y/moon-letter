const openButton = document.getElementById("openLetter");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeLetter");

openButton.addEventListener("click", () => {

    overlay.classList.add("show");

    document.body.style.overflow = "hidden";

});

closeButton.addEventListener("click", closeLetter);

overlay.addEventListener("click", function(e){

    if(e.target === overlay){

        closeLetter();

    }

});

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeLetter();

    }

});

function closeLetter(){

    overlay.classList.remove("show");

    document.body.style.overflow = "auto";

}