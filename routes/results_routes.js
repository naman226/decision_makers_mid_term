const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // Route to results page => will work for updated and final results
  router.get('/:id', (req, res) => {
    const poll_id = req.params.id;
    db.query(`SELECT polls.name as question, choices.name, choices.description, result_count
      FROM polls
      JOIN choices
      ON polls.id = poll_id
      WHERE poll_id = $1
      GROUP BY polls.name, choices.name, choices.description, result_count
      ORDER BY result_count;`, [poll_id])
      // pass the results and the poll_id to the front end to render the results and provide the correct url
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


