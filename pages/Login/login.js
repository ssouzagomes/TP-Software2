function entrar() {
  let usuario = document.getElementById('usuario').value
  let senha = document.getElementById('senha').value
  console.log(usuario, senha)

  if(usuario == 'Suricato' && senha == 1234) {
    document.getElementById('form').action = 'pages/Principal/principal.html'
  } else {
    alert('Dados incorretos!')
  }
}