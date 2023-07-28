const usuarios = require('dados');

function validarLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);

  if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
    localStorage.setItem('dados_usuario', JSON.stringify({
      nome: usuarioEncontrado.nome,
      email: usuarioEncontrado.email
    }));

    window.location.href = 'pagina_inicial.html';
  } else {
    alert('Login ou senha incorretos. Por favor, tente novamente.');
  }
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validarLogin);
