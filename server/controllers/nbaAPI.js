const NBA = require('nba');

const { players } = NBA;

const findPlayer = (str) => {
  let strLower = str.toLowerCase();
  return players.find((p) => p.fullName.toLowerCase().includes(strLower));
};

const playerIdFromName = (name) => {
  const p = findPlayer(name);
  return p ? p.playerId : null;
};

const getRandomPlayer = (req, res) => {
  const index = Math.floor(Math.random() * players.length);
  res.json(players[index]);
};

const getPlayerProfile = (req, res) => {
  let param = { PlayerID: req.query.id };
  NBA.stats.playerProfile(param).then((obj) => res.json(obj));
};

const getPlayerInfo = (req, res) => {
  console.log(req.query);
  let param = { "PlayerID": req.query.id };
  NBA.stats.playerInfo(param).then((obj) => {console.log(obj); res.json(obj);});
};

const getPlayerStats = (req, res) => {
  let param = { PlayerID: req.query.id };
  NBA.stats.playerStats(param).then((obj) => res.json(obj));
};

const getPlayerSplits = (req, res) => {
  let param = { PlayerID: req.query.id, LastNGames: "10", Season:"2024-25" };
  NBA.stats.playerSplits(param).then((obj) => res.json(obj));
};

const getPlayerShooting = (req, res) => {
  let param = { PlayerID: req.query.id };
  NBA.stats.playerShooting(param).then((obj) => res.json(obj));
};

const getPlayerClutch = (req, res) => {
  let param = { PlayerID: req.query.id };
  NBA.stats.playerClutch(param).then((obj) => res.json(obj));
};

const getPlayerId = (req, res) => {
  let param = { name: req.query.name };
  res.json({ id: playerIdFromName(req.query.name) });
};

module.exports = {
  getRandomPlayer,
  getPlayerProfile,
  getPlayerInfo,
  getPlayerId,
  getPlayerStats,
  getPlayerSplits,
  getPlayerShooting,
  getPlayerClutch,
};
