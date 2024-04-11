document.getElementById("submitButton").addEventListener("click", function () {
  alert("El formulario de receta ha sido enviado.");

  document.getElementById("recipe-name").value = "";
  document.getElementById("preparation-time").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("instructions").value = "";
});


