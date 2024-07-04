// Script para validação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validação básica dos campos (pode ser expandida conforme necessário)
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simulação de envio de formulário (substituir com código real para enviar dados)
    alert('Formulário enviado com sucesso!');
    document.getElementById('contactForm').reset();
});
