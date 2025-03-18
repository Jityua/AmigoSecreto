// Array para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un amigo desde el input
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar el input
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para sortear.");
        return;
    }

    let mezclados = [...amigos];
    let resultado = {};
    
    // Mezclar los nombres asegurando que nadie se autoasigne
    do {
        mezclados.sort(() => Math.random() - 0.5);
    } while (mezclados.some((amigo, i) => amigo === amigos[i]));

    // Asignar parejas de amigo secreto
    amigos.forEach((amigo, i) => {
        resultado[amigo] = mezclados[i];
    });

    // Mostrar los resultados en la interfaz
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (let [key, value] of Object.entries(resultado)) {
        let li = document.createElement("li");
        li.textContent = `${key} → ${value}`;
        resultadoLista.appendChild(li);
    }
}
