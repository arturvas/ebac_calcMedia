const form = document.getElementById('form-atividade');//remover o comportamento de ser submetido de atualizar a tela
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';

let linhas = ''; //começar com uma string vazia

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const iNomeAtiv = document.getElementById('nome-atividade');
    const iNotaAtiv = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${iNomeAtiv.value}</td>`;
    linha += `<td>${iNotaAtiv.value}</td>`;
    linha += `<td>${iNotaAtiv.value >= 7 ? imgAprovado : imgReprovado}</td>`; //if = '?' / else = ':'
    linha += '</tr>';

    linhas += linha;

    const corpoTab = document.querySelector('tbody');
    corpoTab.innerHTML = linhas; //para inserir um conteudo dentro de uma tag

    //limpar o campo depois de adicionar o conteudo
    iNomeAtiv.value = '';
    iNotaAtiv.value = '';
}) 