let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    
    if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista("listaAmigos", amigos);
    inputAmigo.value = "";
}

function atualizarLista(elementoId, lista) {
    const elemento = document.getElementById(elementoId);
    elemento.innerHTML = lista.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }
    
    let sorteio = [...amigos];
    for (let i = sorteio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
    }
    
    const resultado = sorteio.map((amigo, index) => `${amigo} tira ${sorteio[(index + 1) % sorteio.length]}`);
    atualizarLista("resultado", resultado);
}

function reiniciarLista() {
    amigos = [];
    atualizarLista("listaAmigos", amigos);
    atualizarLista("resultado", []);
}

document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.querySelector(".button-container");
    
    const botaoSortear = document.querySelector(".button-draw");
    
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";
    botaoReiniciar.className = "button-draw";
    botaoReiniciar.onclick = reiniciarLista;
    
    botaoReiniciar.style.width = getComputedStyle(botaoSortear).width;
    botaoReiniciar.style.marginTop = "10px";
    
    buttonContainer.appendChild(botaoReiniciar);
});
