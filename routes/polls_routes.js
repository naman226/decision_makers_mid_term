const express = require('express');
const dbParams = require('../lib/db');
const router = express.Router();


module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM polls;`)
      .then(data => {
        res.render('/(index.ejs)');
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });

  router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM polls;`)
      .then(data => {
        res.render('/(thank your for creating page.ejs)');
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });

  router.post('/', (req, res) => {
    db.query(`SELECT * FROM polls JOIN choices;`)
      .then(data => {
        res.redirect('/polls/:id');
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
};
