function mostrarTexto(linguagem) {
    var texto = document.getElementById(linguagem + "Texto");
    texto.style.display = "block";
}

function esconderTexto(linguagem) {
    var texto = document.getElementById(linguagem + "Texto");
    texto.style.display = "none";
}