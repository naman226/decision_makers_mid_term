module.exports = (db) => {

  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM choices;`)
      .then(data => {
        res.render('/(results.ejs)');
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
}


