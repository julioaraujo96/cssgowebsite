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
  personalStats.style.display = 'flex';
}

/* *************************************************************************************************** */
const span_kills = document.getElementById('kills');
const span_deaths = document.getElementById('deaths');
const span_time = document.getElementById('playtime');
const span_planted = document.getElementById('bombsplanted');
const span_defused = document.getElementById('bombsdefused');
const span_hs = document.getElementById('hs');
const span_winrate = document.getElementById('victory');

getPersonalData();

async function getPersonalData() {
  const response = await fetch('stats.json');
  const data = await response.json();
  console.log(data);

  const total_kills = data.playerstats.stats[0].value;
  const total_deaths = data.playerstats.stats[1].value;
  const time = data.playerstats.stats[2].value;
  const planted = data.playerstats.stats[3].value;
  const defused = data.playerstats.stats[4].value;
  const hs_rate = data.playerstats.stats[5].value;
  const wins = data.playerstats.stats[6].value;
  const defeats = data.playerstats.stats[7].value;
  const games = wins + defeats;
  const winrate = Math.round((wins / games) * 100);

  span_kills.textContent = total_kills;
  span_deaths.textContent = total_deaths;
  span_time.textContent = time;
  span_planted.textContent = planted;
  span_defused.textContent = defused;
  span_hs.textContent = `${hs_rate}%`;
  span_winrate.textContent = `${winrate}%`;
}
/* *************************************************************************************************** */
