// guardamos el id de la imagen visible
idImagenVisible = "Fotos Burbu";
function mostrar(id) {
    // esconedemos la imagen visible
    document.getElementById(idImagenVisible).style.display = "none";
    // mostramos la imagen seleccionada
    document.getElementById(id).style.display = "block";
    // guardamos en la variable la imagen que estamos visualizando
    idImagenVisible = id;
}
