/* Seleciona o elemento da Navbar */
const nav = document.querySelector('nav');

/* Seleciona o botão do menu hamburguer */
const hamburger = document.querySelector('.hamburger');

/* Seleciona a lista de itens do menu da Navbar */
const menu = document.querySelector('ul');

/* Adiciona o evento de clique no botão do menu hamburguer */
hamburger.addEventListener('click', () => {
  /* Adiciona ou remove a classe "active" para abrir ou fechar o menu */
  menu.classList.toggle('active');

  /* Adiciona ou remove a classe "change" para mudar a aparência do botão */
  hamburger.classList.toggle('change');
});

/* Seleciona as duas imagens da página */
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

/* Adiciona o evento de clique nas imagens */
img1.addEventListener('click', () => {
  /* Alterna a imagem 1 para a imagem 2 */
  img1.src = 'imagem2.jpg';
});

img2.addEventListener('click', () => {
  /* Alterna a imagem 2 para a imagem 1 */
  img2.src = 'imagem1.jpg';
});
