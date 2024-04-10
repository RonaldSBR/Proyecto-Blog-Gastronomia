document.getElementById("submitButton").addEventListener("click", function () {
  alert("El formulario de receta ha sido enviado.");

  document.getElementById("recipe-name").value = "";
  document.getElementById("preparation-time").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("instructions").value = "";
});

const buttondarkmode = document.getElementById("a3");
const elementbody = document.querySelector("body");
const container = document.querySelector(".container");
const originalBackgroundColor = container.style.backgroundColor;

buttondarkmode.addEventListener("click", function () {
  event.preventDefault();
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "#F3E5D8";
  }
});
