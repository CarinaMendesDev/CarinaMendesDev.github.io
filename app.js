let amigos = []; // Lista para armazenar os amigos
let sorteio = []; // Lista para armazenar os nomes sorteados
let index = 0; // Índice para controlar a ordem dos sorteios

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();
    
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista("listaAmigos", amigos);
    } else {
        alert("Nome inválido ou já adicionado.");
    }

    document.getElementById("amigo").value = "";
}

// Função para atualizar a lista na tela
function atualizarLista(id, lista) {
    document.getElementById(id).innerHTML = lista.map(item => `<li>${item}</li>`).join('');
}

// Função para embaralhar a lista de amigos
function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

// Função para sortear um nome
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes.");
        return;
    }

    if (index === 0 || index >= sorteio.length) {
        sorteio = [...amigos]; // Copia e embaralha a lista
        embaralhar(sorteio);
        index = 0;
    }

    atualizarLista("resultado", [`O nome sorteado é: ${sorteio[index]}`]);
    index++;

    if (index >= sorteio.length) {
        document.getElementById("botaoSortear").disabled = true;
        setTimeout(() => alert("Todos os nomes foram sorteados."), 500);
    }
}

// Função para reiniciar
function reiniciarLista() {
    amigos = [];
    sorteio = [];
    index = 0;
    atualizarLista("listaAmigos", []);
    atualizarLista("resultado", []);
    document.getElementById("botaoSortear").disabled = false;
}

// Inicializa o botão "Reiniciar"
document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.querySelector(".button-container");
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";
    botaoReiniciar.className = "button-restart";
    botaoReiniciar.onclick = reiniciarLista;
    buttonContainer.appendChild(botaoReiniciar);
});
