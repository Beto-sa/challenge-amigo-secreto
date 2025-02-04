//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []; //Array para armazenar os nomes.

//Função para exibis a lista de amigos no HTML.
function exibirAmigos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 

// Função para adicionar os nomes no Array.
function adicionarAmigo() {
    limparHtml('resultado');//Limpa o campo do resultado antes de adicionar os nomes, criado para caso de reiniciar o sorteio.

    let amigos = document.querySelector('input').value;//Armazena o valor recebido no HTML na variável "amigos".
    
    //Estrutura "if" verifica se há string vazia, para que somente strings com informações sejam enviadas ao Array.
    if (amigos.trim() !== "") {
        listaAmigos.push(amigos);//Joga o valor armazenado na variável "amigos" para dentro do Array.
        console.log(listaAmigos);

        let listaFinal = "";
        for ( let i = 0; i < listaAmigos.length; i++ ) {
            listaFinal += listaAmigos[i];
            listaFinal += i < listaAmigos.length - 1 ? ", " : "."; 
        }
        exibirAmigos('ul', listaFinal);
        limparCampo('input');//Limpa o campo após adicionar o nome.

    } else {
        limparCampo('input');//Limpa o campo após caso haja espaços.
        console.log("O array não pode receber uma string vazia.");
        alert('Por favor, insira um nome.');
    }
    
}

//funcção para Limpar campo.
function limparCampo(tag) {
    let retornoVazio = document.querySelector(tag);
    retornoVazio.value = '';
}

//funcção para limpar o local do endereço HTML.
function limparHtml(id) {
    let retornoHtml = document.getElementById(id);
    retornoHtml.innerHTML = '';
}

//Função para sortear o nome.
function sortearAmigo() {
    let tamanhoDaLista = listaAmigos.length;
    console.log(`O tamanho da lista é ${tamanhoDaLista}.`);

    //Estrutura if cria condicionantes para caso o botão de sorteio seja acionado com 1 ou menos nomes.
    if (tamanhoDaLista > 1) {
        let endResultado = document.getElementById('resultado');
        let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
        console.log(`Numero sorteado: ${amigoSorteado}.`);
        let resultadoSorteio = listaAmigos[amigoSorteado];
        endResultado.innerHTML = `O seu amigo secreto é "${resultadoSorteio}".`;
        console.log(resultadoSorteio);
        listaAmigos = [];
        limparHtml('listaAmigos');

        for (let i = 10; i >= 0; i--) {
            setTimeout(() => {
              if (i > 0) {
                console.log(i + " segundos restantes");
              } else {
                console.log("Tempo esgotado! O resultado foi limpo para que o sorteio possa ser reiniciado.");
                limparHtml('resultado');
              }
            }, (10 - i) * 1000); // Multiplica para criar o atraso certo
        }

    } else {
        if (tamanhoDaLista == 1) {
            alert('Por favor, insira mais nomes.');
        } else {
            alert('Por favor, insira um nome.');
        }
    }
}