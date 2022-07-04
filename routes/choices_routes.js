const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM choices QUERY;`)
      .then(data => {
        const templateVars = data.rows;
        res.render('choices', templateVars);
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });

  router.post('/:id', (req, res) => {
    db.query(`UPDATE choices count QUERY`)
      .then(() => {
        res.redirect('results');
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
};
