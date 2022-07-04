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
    db.query(`INSERT INTO polls (name, email)
    Values ('WHat to eat', 'xzy@gmail.com') RETURNING *;`)
      .then((polls) => {
        const pollId = polls.rows[0].id;
        console.log(pollId);
        db.query(`INSERT INTO choices (poll_id, name, description)
        VALUES (${pollId}, 'lets go kfc', 'fried chicken') RETURNING *;`)
        .then((choices) => {
          console.log(choices.rows);
          res.redirect(`/polls/${pollId}`);
        });
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
};


