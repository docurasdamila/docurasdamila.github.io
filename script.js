document.querySelector('.hamburguer').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
  });
  
  // eventos para fechar o menu, ele basicamente faz o inverso do script anterior
  //quando vc clicar no elemento .fechaMenu
  
  document.querySelector('.fechaMenu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
  });
