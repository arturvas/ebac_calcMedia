const form = document.getElementById('form-atividade');//remover o comportamento de ser submetido de atualizar a tela
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt ("Digite a nota mínima:"));

let linhas = ''; //começar com uma string vazia

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

// organizando o codigo por funcoes
function adicionaLinha() {
    const iNomeAtiv = document.getElementById('nome-atividade');
    const iNotaAtiv = document.getElementById('nota-atividade');

    atividades.push(iNomeAtiv.value);
    notas.push(parseFloat(iNotaAtiv.value));

    let linha = '<tr>';
    linha += `<td>${iNomeAtiv.value}</td>`;
    linha += `<td>${iNotaAtiv.value}</td>`;
    linha += `<td>${iNotaAtiv.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; //if = '?' / else = ':'
    linha += '</tr>';

    linhas += linha;

    //limpar o campo depois de adicionar o conteudo
    iNomeAtiv.value = '';
    iNotaAtiv.value = '';
}

function atualizaTabela(){
    const corpoTab = document.querySelector('tbody');
    corpoTab.innerHTML = linhas; //para inserir um conteudo dentro de uma tag
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i=0;i<notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length; //length - retorna ou define o nummero de elementos em uma array
}