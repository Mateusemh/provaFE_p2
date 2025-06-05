let bancoMensagens = [];
let usuarios = [
  { email: 'admin@admin.com', senha: '1234' }
];

function inserirMensagem(mensagem) {
  bancoMensagens.push(mensagem);
}

function validarUsuario(objLoginSenha) {
  return usuarios.some(user =>
    user.email === objLoginSenha.email && user.senha === objLoginSenha.senha
  );
}

function obterMensagens() {
  return bancoMensagens;
}
