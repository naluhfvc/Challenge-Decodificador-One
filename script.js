const inputTexto = document.querySelector(".caixa-texto"); //DOM
const mensagem = document.querySelector(".caixa-resultado");

function botaoEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);//recebe valor
    mensagem.value = textoEncriptado; //retorna valor
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];//troca
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) { // funçao includes verifica se esta inclusa a letra na string
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); // replaceAll faz a troca
        }
    }

    return stringEncriptada; //retorna a string modificada
}


function botaoDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiar() {
        var mensagem = document.querySelector('.caixa-resultado');
        mensagem.select(); //seleciona msg
        navigator.clipboard.writeText(mensagem.value); //copia o texto
        mensagem.value = "";
}
