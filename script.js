// Botón para cambiar entre modo claro y oscuro
const toggleBtn = document.getElementById('toggleDark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Estilos de modo oscuro
const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    background: #121212;
    color: #eee;
  }
  .dark-mode h1, 
  .dark-mode h2 {
    color: #66aaff;
  }
  .dark-mode ul.chips li {
    background: #003366;
    color: #cce6ff;
  }
  .dark-mode footer button {
    background: #444;
    color: #fff;
  }
`;
document.head.appendChild(style);
