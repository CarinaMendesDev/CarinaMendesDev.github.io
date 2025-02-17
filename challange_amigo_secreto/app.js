let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim();

    if (amigoNome === "") {
        alert("Por favor, insira um nome válido!");
    } else {
        amigos.push(amigoNome);
        atualizarLista();
    }

    amigoInput.value = "";
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

        const buttonDraw = document.getElementById('button-draw');
    if (amigos.length > 0) {
        buttonDraw.disabled = false;
    }
}

function sortearAmigo() {
    const buttonDraw = document.getElementById('button-draw');
    buttonDraw.disabled = true;

    if (amigos.length === 0) {
        alert("Por favor, adicione ao menos um nome antes de sortear!");
        buttonDraw.disabled = false;
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

function novoSorteio() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    amigos = [];

    const buttonDraw = document.getElementById('button-draw');
    buttonDraw.disabled = false;
}
