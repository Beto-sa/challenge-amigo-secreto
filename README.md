![Captura de tela 2025-02-05 102530](https://github.com/user-attachments/assets/d81bdbbc-d943-4446-a38e-2644dbda1886)

 Projeto desenvolvido para o desafio Amigo Secreto do curso de Iniciação em Programação, uma iniciativa conjunta da Alura e da Oracle intitulada Oracle Next Education (ONE).
O objetivo deste projeto é avaliar a compreensão da lógica de programação adquirida ao longo do curso.

*O projeto:*

 Foi criado um array para armazenar os nomes dos amigos, sendo esse elemento essencial
para o funcionamento do programa.
 
 Logo após foram criadas as funções que dariam funcionalidades aos elementos do HTML:
  * function exibirAmigos(); Criado para fazer a leitura do endereço HTML e retornar um texto.
    
  * function adicionarAmigo(); Essa função inicialmente limpa o texto presente no id('resultado') e em seguida
    armazena em uma variavel o valor presente no id('input'). Na sequência foi inserido uma estrutura 'if' para verificar a existência de epaços em branco ou strings
    vazias dentro do id('input'), se houver ele exibe um alert() solicitando que seja escrito um nome e caso n haja ele
    adiciona o nome ao array, em seguida adiciona o nome na lista que será visualizada no html.

  * function limparCampo(tag); | function limparHTML(id); Foram criadas para limpar os respectivos endereços no html,
    um pela tag e outro pelo id.

  * function sortearAmigo(); Essa função foi criada para sortear o amigo sereto. Foi criado uma extrutura 'if' no qual o numero de amigos > 1, ele irá
    sortear o amigo secreto e em seguida rodará um timer para reiniciar o amigo secreto. Caso o numero de amigos fou == 1, ele exibirá um alert()
    solicitando a inserção de mais nomes, e caso o numero de amigos seja == 0 ele exibirá um alert() solicitando que seja inserido um nome.

    # Autor

  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/196502878?v=4" width=115><br><sub>Adalberto Almeida</sub>](https://github.com/Beto-sa)


