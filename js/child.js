// document.getElementById('play-container').childNodes;

const newPlayer = document.createElement('li');
newPlayer.innerText = 'Lamani Yamal';

const playerList = document.getElementsByClassName('player-list');

playerList[0].appendChild(newPlayer);

