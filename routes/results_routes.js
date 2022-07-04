module.exports = (db) => {

  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    db.query(`SELECT as preference query;`)
      .then((data) => {
        const templateVars = data.rows;
        res.render('results', templateVars);
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
}


