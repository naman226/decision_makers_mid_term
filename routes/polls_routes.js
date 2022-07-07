require("dotenv").config();
const express = require('express');
const dbParams = require('../lib/db');
const router = express.Router();
const mailgun = require('mailgun-js');

const api_key = process.env.api_key;
const domain = process.env.domain;
const mg = mailgun({apiKey: api_key, domain: domain});

module.exports = (db) => {

  router.get('/', (req, res) => {

    res.render('index');
    });

  router.post('/', (req, res) => {
    // capture the required contents from the body and assign them to individual variables
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
    const name_required =req.body.name_required;
    // Route for creation of poll on home page
    db.query(`INSERT INTO polls (name, email, name_required)
    Values ($1, $2, $3) RETURNING *;`, [name, email, name_required])
      .then((polls) => {

        const pollId = polls.rows[0].id;
        db.query(`INSERT INTO choices (poll_id, name, description)
        VALUES (${pollId}, $1, $5),
        (${pollId}, $2, $6),
        (${pollId}, $3, $7),
        (${pollId}, $4, $8) RETURNING *;`, [option1, option2, option3, option4, description1, description2, description3, description4])

        .then(() => {

          const emailLinks = `Here are the links to your most recently created poll.

          Submission link to share with your friends: http://localhost/choices/${pollId}

          Result link to view your most up-to-date results: http://localhost/results/${pollId}`

          const data = {
            from: 'Poller, <info@poller.com>',
            to: `${email}`,
            subject: 'Your Poll Links',
            text: `${emailLinks}`
          };
          mg.messages().send(data, function (error, body) {
            console.log(body);
          });

          res.redirect(`/polls/${pollId}`);

        });
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });

  // Route redirects to creation page with links to share after poll is created
  router.get('/:id', (req, res) => {
    const poll_id = req.params.id;
    const templateVars = {poll_id}
    res.render('created', templateVars);
  });

  return router;
};

