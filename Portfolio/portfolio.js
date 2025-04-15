const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mensagem de boas-vindas no console
console.log("Olá! Seja bem-vindo ao meu portfólio. Sinta-se à vontade para explorar meus projetos e entrar em contato. ☕");