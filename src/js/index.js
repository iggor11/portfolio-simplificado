/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMostrarMenos = document.querySelector('.btn-mostrar-menos');
const projetos = document.querySelectorAll('.projeto');

botaoMostrarProjetos.addEventListener('click', () => {
  // Mostra todos os projetos ocultos
  projetos.forEach((projeto, index) => {
    if (index >= 4) {
      projeto.classList.add('ativo');
    }
  });

  // Esconde o botão de mostrar mais e mostra o de mostrar menos
  botaoMostrarProjetos.style.display = 'none';
  botaoMostrarMenos.style.display = 'block';
});

botaoMostrarMenos.addEventListener('click', () => {
  // Esconde os projetos além dos inicialmente visíveis
  projetos.forEach((projeto, index) => {
    if (index >= 4) {
      projeto.classList.remove('ativo');
    }
  });

  // Esconde o botão de mostrar menos e mostra o de mostrar mais
  botaoMostrarProjetos.style.display = 'block';
  botaoMostrarMenos.style.display = 'none';
});
