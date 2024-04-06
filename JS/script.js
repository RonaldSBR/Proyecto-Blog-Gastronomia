document.getElementById("submitButton").addEventListener("click", function() {
    
    alert("El formulario de receta ha sido enviado.");
    
    document.getElementById("recipe-name").value = "";
    document.getElementById("preparation-time").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
});



const buttondarkmode = document.getElementById("a3")
const elementbody = document.querySelector("body")
const container = document.querySelector(".container")
const originalBackgroundColor = container.style.backgroundColor
  
buttondarkmode.addEventListener("click", function() {
    event.preventDefault()
    if (document.body.style.backgroundColor !== "black") {
        // Si el fondo no es negro, cambia a negro
        document.body.style.backgroundColor = "black";
    } else {
        // Si el fondo es negro, restaura el color original
        document.body.style.backgroundColor = "#F3E5D8";
    }
})


