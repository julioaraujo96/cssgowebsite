const personalBtn = document.getElementById('personalBtn');
const teamBtn = document.getElementById('teamBtn');
const personalStats = document.getElementById('personal-stats');
const teamStats = document.getElementById('team-stats');

teamBtn.addEventListener('click', showTeamStats);

function showTeamStats() {
  personalBtn.classList.remove('active');
  teamBtn.classList.add('active');
  personalStats.style.display = 'none';
  teamStats.style.display = 'block';
}

personalBtn.addEventListener('click', showPersonalStats);

function showPersonalStats() {
  teamBtn.classList.remove('active');
  personalBtn.classList.add('active');
  teamStats.style.display = 'none';
  personalStats.style.display = 'block';
}
