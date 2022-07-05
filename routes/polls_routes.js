const express = require('express');
const dbParams = require('../lib/db');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {

    res.render('index');
    });

  router.post('/', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;
    const description1 = req.body.description1;
    const description2 = req.body.description2;
    const description3 = req.body.description3;
    const description4 = req.body.description4

    // Route for creation of poll on home page
    db.query(`INSERT INTO polls (name, email)
    Values ($1, $2) RETURNING *;`, [name, email])
      .then((polls) => {
        const pollId = polls.rows[0].id;
        console.log('pollId:', pollId);
        db.query(`INSERT INTO choices (poll_id, name, description)
        VALUES (${pollId}, $1, $5),
        (${pollId}, $2, $6),
        (${pollId}, $3, $7),
        (${pollId}, $4, $8) RETURNING *;`, [option1, option2, option3, option4, description1, description2, description3, description4])
        .then((choices) => {
          console.log('new data:', choices.rows);
          res.redirect(`/polls/${pollId}`);
        });
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });

  // Route redirects to creation page with links to share after poll is created
  router.get('/:id', (req, res) => {
    console.log('req.params:', req.params);
    //url(req.params)
    res.render('created');
  });

  return router;
};

