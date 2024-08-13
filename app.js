//funcion para encriptar texto 
function encriptarTexto()
{
    //Se toma el texto desde input con id "textoEntrada"
    let textoEntrada = document.getElementById('textoEntrada').value;
    //Se convierte en array
    let textoArray = Array.from(textoEntrada);

    //Encriptacion de texto
    let textoEncriptado = textoArray.map(caracter => {
        if (caracter === "a") {
            return "ai";
        } else if (caracter === "e") {
            return "enter";
        } else if (caracter === "i") {
            return "imes";
        } else if (caracter === "o") {
            return "ober";
        } else if (caracter === "u") {
            return "ufat";
        }
        return caracter;
    }).join('');

    console.log(textoEncriptado);
    mostrarResultado(textoEncriptado);

}

//Funcion para mostrar resultado de encriptación y desencriptacion 
function mostrarResultado(texto)
{
    //Estilizar area del resultado
    let textoSalida = document.getElementById('area-resultado');
    textoSalida.style.textAlign = "center"; 
    textoSalida.style.justifyContent = "space-between";
    textoSalida.style.padding = "15px 10px";
    textoSalida.className = "texto-salida-resultado"; 

    //Se denomina el area que mostrara el resultado
    let mensajeSinTexto = document.getElementById('mensajeSinTexto');
    mensajeSinTexto.textContent = texto;
    mensajeSinTexto.style.overflowY = "auto";

    //Ocultar imagen
    let idImagen = document.getElementById('idImagen');
    idImagen.style.display = "none";

    //Mostrar boton para copiar resultado
    let btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.style.visibility = "visible";
    
}

//funcion para boton de copiar texto
function copiarTexto()
{
    //Se crea constante con el resultado de la encriptacion o desencriptacion 
    const texto = document.getElementById('mensajeSinTexto').textContent;

    //Se guarda en el porta papeles del navegador
    navigator.clipboard.writeText(texto).then(() =>
    {
        //mensaje de copiado con exito 
        alert("Copiado");
    }).catch(err =>
    {
        //En caso de error, aparecera la siguiente alerta
        console.error('Error al copiar el texto', err);
    });
}


function desencriptarTexto()
{
    //Se toma el id del texto de entrada
    let textoEncriptado = document.getElementById('textoEntrada').value;

    // Reemplazar las cadenas encriptadas por las vocales correspondientes
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    //mostrar resultado
    mostrarResultado(textoDesencriptado);
}