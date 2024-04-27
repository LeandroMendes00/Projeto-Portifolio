const h1Menu__log = document.querySelector('.menu__logo');
const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
let indiceLetra = 0;

h1Menu__log.textContent = '';  //texto inicial vazio

function atualizarLogo() {
    if (indiceLetra < letras.length) {
        h1Menu__log.textContent += letras[indiceLetra]
        indiceLetra++;
    } else {
        h1Menu__log.textContent = 'LM'; //texto final
        clearInterval(intervalo);
    }
}

const intervalo = setInterval(atualizarLogo, 300);