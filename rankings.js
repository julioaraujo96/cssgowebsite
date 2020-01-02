const portugalBtn = document.querySelector('.portugal');
const mundialBtn = document.querySelector('.mundial');
const span = document.getElementById('rank');
const mundiais = document.querySelector('.players-mundiais');
const nacionais = document.querySelector('.players-pt');

portugalBtn.addEventListener('click', function nationalRanking() {
  span.textContent = 'nacionais';
  mundiais.style.display = 'none';
  nacionais.style.display = 'flex';
});
mundialBtn.addEventListener('click', function worldRanking() {
  span.textContent = 'mundiais';
  mundiais.style.display = 'flex';
  nacionais.style.display = 'none';
});
