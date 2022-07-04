const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM choices;`)
      .then(data => {
        res.render('/(votingpage.ejs)');
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  });

  router.post('/:id', (req, res) => {
    db.query(`SELECT * FROM results;`)
      .then(data => {
        res.redirect('/results.ejs)');
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  });
  return router;
};
