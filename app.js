let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigos[indice];
}

