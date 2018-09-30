// Controller for all /genres routes

module.exports = {
  getAllGenres(req, res) {
    return res.render('music', { data: 'reached /genres index route!' });
  },
};