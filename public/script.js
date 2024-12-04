// Função para gerar senha aleatória
function gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirEspeciais) {
  const minusculas = 'abcdefghijklmnopqrstuvwxyz';
  const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const especiais = '!@#$%^&*()_+[]{}|;:,.<>?';

  let caracteres = minusculas;
  if (incluirMaiusculas) caracteres += maiusculas;
  if (incluirNumeros) caracteres += numeros;
  if (incluirEspeciais) caracteres += especiais;

  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  return senha;
}

// Manipulando o formulário
document.getElementById('password-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const tamanho = document.getElementById('password-length').value;
  const incluirMaiusculas = document.getElementById('uppercase').checked;
  const incluirNumeros = document.getElementById('numbers').checked;
  const incluirEspeciais = document.getElementById('special').checked;

  const senhaGerada = gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirEspeciais);

  document.getElementById('generated-password').textContent = `Senha Gerada: ${senhaGerada}`;
});
