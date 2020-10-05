var dados = {
    nome: '',
    sobrenome: '',
    cpf: '',
    data: '',
    hora: ''
}

// var nomeArray = []
// var sobrenomeArray = []
// var cpfArray = []
// var dataArray = []
// var horaArray = []

var indice = -1

function agendar() {
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var cpf = document.getElementById('cpf').value
    var data = document.getElementById('data').value
    var hora = document.getElementById('hora').value
    
    // let values = [nome, sobrenome, cpf, data, hora]
    // dados.push(values)

    dados.nome = nome
    dados.sobrenome = sobrenome
    dados.cpf = cpf
    dados.data = data
    dados.hora = hora
    console.log(dados)
    // let key = dados.length

    indice++

    // nomeArray.push(nome)
    // sobrenomeArray.push(sobrenome)
    // cpfArray.push(cpf)
    // dataArray.push(data)
    // horaArray.push(hora)

    // console.log(nomeArray, sobrenomeArray, cpfArray, dataArray, horaArray)

    saveToStorage(dados, indice)

    document.getElementById('nome').value = ''
    document.getElementById('sobrenome').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('data').value = ''
    document.getElementById('hora').value = ''
}

function saveToStorage(dados, indice) {
    localStorage.setItem(indice, JSON.stringify(dados))
    // localStorage.setItem(1, JSON.stringify(sobrenomeArray))
    // localStorage.setItem(2, JSON.stringify(cpfArray))
    // localStorage.setItem(3, JSON.stringify(dataArray))
    // localStorage.setItem(4, JSON.stringify(horaArray))
}