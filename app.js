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
    let amigos = document.querySelector('input').value;//Armazena o valor recebido no HTML na variável "amigos".
    listaAmigos.push(amigos);//Joga o valor armazenado na variável "amigos" para dentro do Array.
    console.log(listaAmigos);
    
    if (document.querySelector('input').value == "") {
        alert('Por favor, insira um nome.');
    } else {
        let listaFinal = "";
        for ( let i = 0; i < listaAmigos.length; i++ ) {
            listaFinal += listaAmigos[i] 
            listaFinal += i < listaAmigos.length - 1 ? ", " : "."; 
        }
        exibirAmigos('ul', listaFinal);
        limparCampo();
    }
}

//funcção para Limpar campo.
function limparCampo() {
    let retornoVazio = document.querySelector('input');
    retornoVazio.value = '';
}