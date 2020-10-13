var dados = {
    nome: [],
    sobrenome: [],
    cpf: [],
    data: [],
    hora: []
}

function agendar() {
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var cpf = document.getElementById('cpf').value
    var data = document.getElementById('data').value
    var hora = document.getElementById('hora').value

    dados.nome.push(nome)
    dados.sobrenome.push(sobrenome)
    dados.cpf.push(cpf)
    dados.data.push(data)
    dados.hora.push(hora)

    saveToStorage(dados)

    document.getElementById('nome').value = ''
    document.getElementById('sobrenome').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('data').value = ''
    document.getElementById('hora').value = ''
}

function saveToStorage(dados) {
    localStorage.setItem(0, JSON.stringify(dados))
}

function deletar() {
    if(window.confirm('Tem certeza que deseja excluir?')) {
        localStorage.removeItem(0);

        document.getElementsByClassName('mainDados')[0].style.display = 'none'
    }
}