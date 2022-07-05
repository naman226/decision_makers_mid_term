const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // Route to results page => will work for updated and final results
  router.get('/', (req, res) => {
    db.query(`SELECT choices.name, choices.description, sum(choices.result_count) as preference
    FROM choices
    WHERE poll_id = 1
    GROUP BY choices.name, choices.description
    ORDER BY preference;`)
      .then((pollResults) => {
        const templateVars = {choices: pollResults.rows};
        res.render('results', templateVars);
      })
      .catch(err => {
        res.status(404).send(err.message);
      });
  });
  return router;
}


