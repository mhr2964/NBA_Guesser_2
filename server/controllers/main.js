const hostMain = (req, res) => {
  res.render('index', {
    layout: 'index',
  });
};

module.exports = {
  hostMain,
};
