document.getElementById('formDoacao').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const endereco = document.getElementById('endereco').value;
  const data = document.getElementById('data').value;
  const descricao = document.getElementById('descricao').value;
  const msg = document.getElementById('mensagem');

  if (!nome || !email || !endereco || !data || !descricao) {
    msg.textContent = "Por favor, preencha todos os campos.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `Obrigado, ${nome}! Sua doação foi agendada para ${data}. Entraremos em contato em breve.`;
  msg.style.color = "green";

  // Aqui você poderia integrar com um backend (Node.js, Firebase, etc.)
  // ou um serviço de e-mail para enviar os dados.
  this.reset();
});
