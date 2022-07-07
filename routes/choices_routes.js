require("dotenv").config();
const express = require("express");
const router = express.Router();
const mailgun = require('mailgun-js');

const api_key = process.env.api_key;
const domain = process.env.domain;
const mg = mailgun({apiKey: api_key, domain: domain});

module.exports = (db) => {
  // Route to choices page where voters make their rankings of the choices in a poll
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT polls.name as poll_name, choices.name, choices.description, polls.email
    FROM choices
    JOIN polls ON poll_id = polls.id
    WHERE poll_id = ${req.params.id}
    GROUP BY polls.name, choices.name, choices.description, polls.email
    ORDER BY choices.name;`
    )
      // pass each choices and its description, the question as poll_name and the poll id to the front end to render the page and url correctly
    .then((data) => {

        const templateVars = {
          choices: data.rows,
          poll_name: data.rows[0].poll_name,
          poll_id: req.params.id
        };
        res.render("choices", templateVars);
      })

      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  // Route to submit the rankings of the choices in the poll => redirects to the results page
  router.post("/:id", (req, res) => {

    const pollId = req.params.id;
    // Object.entries creates an array of objects to allow us to loop over them
    const parsed = Object.entries(req.body);
    // create array to catch promises
    const promises = [];

    for (const element of parsed) {
      const choice = element[0];
      const vote = element[1];
      promises.push(db.query(
        `UPDATE choices
        SET result_count = result_count + $1
        WHERE choices.name = $2 AND poll_id = $3 RETURNING *;`,
        [vote, choice, pollId]
      ).then((choicesRanked) => choicesRanked.rows))
    }

    // using Promise.All to execute all the promises outside of the loop as they are async and the loop is sync
    Promise.all(promises)
    // create a 2nd query to access the email from the polls database
      .then(() => {

        db.query(`
        SELECT polls.email
        FROM polls
        WHERE polls.id = ${pollId}`)
        // use another promise to send a new email to poll creator when a new submission is made on their poll
        .then((pollData) => {

          const pollEmail = pollData.rows;
          const emailLinks = `Another user has submitted their vote on the poll you created. Below is the link to your updated results.

          Result link to view your most up-to-date results: http://localhost/results/${pollId}`;

          const data = {
            from: 'Poller, <info@poller.com>',
            to: `${pollEmail}`,
            subject: 'Your Poll Links',
            text: `${emailLinks}`
          };
          
          mg.messages().send(data, function (error, body) {
            console.log(body);
          });
        })
      })

      .catch((err) => {
          res.status(404).send(err.message);
        });
      res.redirect(`/results/${req.params.id}`);
  });
  return router;
};
