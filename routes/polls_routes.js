const express = require('express');
const dbParams = require('../lib/db');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    res.render('index');
    });


  router.get('/:id', (req, res) => {
    res.render('created');
  });

  router.post('/', (req, res) => {
    db.query(`INSERT INTO QUERY`)
      .then(() => {
        res.redirect('/polls/:id');
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
};
