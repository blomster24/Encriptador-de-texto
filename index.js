
const texto = document.getElementById("texto").value;
const resultado = document.querySelector(".p-resultado-ok");
const btnCopiar = document.querySelector(".btn-copiar");

const imagen = document.querySelector(".dibujo");
const pTextoUno = document.querySelector(".p-resultado-1");
const pTextoDos = document.querySelector(".p-resultado-2");

const iniciar = () => {
    imagen.style.display = "inline";
    pTextoUno.style.display = "inline";
    pTextoDos.style.display = "inline";

    resultado.style.display = "none"
    btnCopiar.style.display = "none"
}


const reemplazarVocales = (texto = '') => {
    return texto.replace(/[aeiou]/gi, (vocal) => {
        switch (vocal) {
            case 'a':
                return "ai"
                break;
            case 'e':
                return 'enter'
                break;
            case 'i':
                return 'imes'
                break;
            case 'o':
                return 'ober'
                break;
            case 'u':
                return 'ufat'
            default:
                break;
        }
    })
}

const devolverVocales = (texto = '') => {
    let nuevoTexto = texto.replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return nuevoTexto
}

let salida = "";

const encriptar = () => {
    const texto = document.getElementById("texto").value;
    //alert("Hola");
    if (texto === '') return console.log("Nada para encriptar");


    salida = reemplazarVocales(texto);

    imagen.style.display = "none";
    pTextoUno.style.display = "none";
    pTextoDos.style.display = "none";

    resultado.style.display = "flex"
    btnCopiar.style.display = "inline"
    console.log(salida)
    resultado.textContent = salida


}

const desencriptar = () => {
    const texto = document.getElementById("texto").value;
    if (texto === '') return console.log("Nada para desencriptar, campo vacío")

    salida = devolverVocales(texto)


    imagen.style.display = "none";
    pTextoUno.style.display = "none";
    pTextoDos.style.display = "none";

    resultado.style.display = "flex"
    btnCopiar.style.display = "inline"
    console.log(salida)
    resultado.textContent = salida
}

const copiar = () => {
    const textoACopiar = resultado.textContent;

    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            console.log("Copiado")
        })
        .catch(() => {
            console.log("Error copiando")
        })
}