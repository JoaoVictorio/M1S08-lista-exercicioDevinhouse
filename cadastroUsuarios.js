const usuarios = require('dados');

function cadastroUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuarioExistente = usuarios.find(usuario => usuario.email === email);

  if (usuarioExistente) {
    alert('Esse email já está sendo utilizado. Por favor, tente outro.');
  } else {
    usuarios.push({
      nome: nome,
      email: email,
      senha: senha
    });

    alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login.');

    window.location.href = 'index.html';
  }
}

