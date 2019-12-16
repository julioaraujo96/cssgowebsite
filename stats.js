const personalBtn = document.getElementById('personalBtn');
const teamBtn = document.getElementById('teamBtn');
const personalStats = document.getElementById('personal-stats');
const teamStats = document.getElementById('team-stats');

teamBtn.addEventListener('click', showTeamStats);

function showTeamStats() {
  personalBtn.classList.remove('active');
  teamBtn.classList.add('active');
  personalStats.style.display = 'none';
  teamStats.style.display = 'flex';
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

  const total_kills = data.playerstats.stats[0].value
    ? data.playerstats.stats[0].value
    : 'Sem Resultados';
  const total_deaths = data.playerstats.stats[1].value
    ? data.playerstats.stats[1].value
    : 'Sem Resultados';
  const time = data.playerstats.stats[2].value
    ? data.playerstats.stats[2].value
    : 'Sem Resultados';
  const planted = data.playerstats.stats[3].value
    ? data.playerstats.stats[3].value
    : 'Sem Resultados';
  const defused = data.playerstats.stats[4].value
    ? data.playerstats.stats[4].value
    : 'Sem Resultados';
  const hs_rate = data.playerstats.stats[5].value
    ? data.playerstats.stats[5].value
    : 'Sem Resultados';
  const wins = data.playerstats.stats[6].value
    ? data.playerstats.stats[6].value
    : 'Sem Resultados';
  const defeats = data.playerstats.stats[7].value
    ? data.playerstats.stats[7].value
    : 'Sem Resultados';
  const result = wins + defeats;
  const games = result ? result : 'Sem Resultados';
  const winper = Math.round((wins / games) * 100);
  const winrate = winper || 'Sem Resultados';

  span_kills.textContent = total_kills;
  span_deaths.textContent = total_deaths;
  span_time.textContent = time;
  span_planted.textContent = planted;
  span_defused.textContent = defused;
  span_hs.textContent = `${hs_rate}%`;
  winrate === 'Sem Resultados'
    ? (span_winrate.textContent = 'Sem Resultados')
    : (span_winrate.textContent = `${winrate}%`);
}

/* *************************************************************************************************** */
const teamname = document.getElementById('teamname');
const teamlogo = document.getElementById('logo');
const span_maps = document.getElementById('maps');
const span_teamwins = document.getElementById('teamwins');
const span_teamlosses = document.getElementById('teamlosses');
const span_teamkills = document.getElementById('teamkills');
const span_teamdeaths = document.getElementById('teamdeaths');
getTeamData();

async function getTeamData() {
  const response = await fetch('stats.json');
  const data = await response.json();

  const name = data.teams.stats.name
    ? data.teams.stats.name
    : 'Erro ao obter nome da equipa';
  const logo = data.teams.stats.logo
    ? data.teams.stats.logo
    : 'Erro ao carregar imagem';
  const maps = data.teams.stats.maps_played
    ? data.teams.stats.maps_played
    : 'Sem resultados';
  const teamwins = data.teams.stats.wins
    ? data.teams.stats.wins
    : 'Sem resultados';
  const teamlosses = data.teams.stats.losses
    ? data.teams.stats.losses
    : 'Sem resultados';
  const teamkills = data.teams.stats.total_kills
    ? data.teams.stats.total_kills
    : 'Sem resultados';
  const teamdeaths = data.teams.stats.total_deaths
    ? data.teams.stats.total_deaths
    : 'Sem resultados';

  console.log(data.teams.stats.total_deaths);
  teamname.textContent = name;
  teamlogo.src = logo;
  span_maps.textContent = maps;
  span_teamwins.textContent = teamwins;
  span_teamlosses.textContent = teamlosses;
  span_teamkills.textContent = teamkills;
  span_teamdeaths.textContent = teamdeaths;
}
