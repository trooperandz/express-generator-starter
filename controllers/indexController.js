// Controller for all root / routes

module.exports = {
  getIndexData(req, res) {
    return res.render('index', { title: 'Express' });
  },
};