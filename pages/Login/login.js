function entrar() {
  let usuario = document.getElementById('usuario').value
  let senha = document.getElementById('senha').value
  
  if(usuario == 'tnis' && senha == 1234) {
    document.getElementById('form').action = 'pages/Principal/principal.html'
  } else {
    alert('Dados incorretos!')
  }
}