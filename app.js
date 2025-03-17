// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre === '') {
        alert('¡No estás ingresando ningún nombre!'); // Nuevo mensaje de alerta
        input.focus();
        return;
    }
    
    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert(amigos.length === 0 
            ? '¡No se ha ingresado ningún nombre!' 
            : '¡Debe ingresar al menos dos nombres!');
        return;
    }

    const mezclados = mezclarArray([...amigos]);
    const resultados = document.getElementById('resultado');
    resultados.innerHTML = '';
    
    mezclados.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = `${nombre} ➔ ${mezclados[(index + 1) % mezclados.length]}`;
        resultados.appendChild(li);
    });
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}