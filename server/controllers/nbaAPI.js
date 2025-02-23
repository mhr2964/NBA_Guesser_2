const NBA = require('nba');

const { players } = NBA;

const findPlayer = (str) => {
  strLower = str.toLowerCase();
  return players.find((p) => p.fullName.toLowerCase().includes(str_lower));
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
  param = { PlayerID: req.query.id };
  NBA.stats.playerProfile(param).then((obj) => res.json(obj));
};

const getPlayerInfo = (req, res) => {
  console.log(req.query);
  (NBA.stats.playerInfo({ PlayerID: '1627759' })).then(console.log);
  console.log();
  param = { PlayerID: req.query.id };
  NBA.stats.playerInfo(param).then((obj) => res.json(obj));
};

const getPlayerStats = (req, res) => {
  param = { PlayerID: req.query.id };
  NBA.stats.playerStats(param).then((obj) => res.json(obj));
};

const getPlayerSplits = (req, res) => {
  param = { PlayerID: req.query.id };
  NBA.stats.playerSplits(param).then((l) => res.json(l));
};

const getPlayerShooting = (req, res) => {
  param = { PlayerID: req.query.id };
  NBA.stats.playerShooting(param).then((obj) => res.json(obj));
};

const getPlayerClutch = (req, res) => {
  param = { PlayerID: req.query.id };
  NBA.stats.playerClutch(param).then((obj) => res.json(obj));
};

const getPlayerId = (req, res) => {
  param = { name: req.query.name };
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
