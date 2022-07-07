const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Route to choices page where voters make their rankings of the choices in a poll
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT polls.name as poll_name, choices.name, choices.description, polls.name_required
    FROM choices
    JOIN polls ON poll_id = polls.id
    WHERE poll_id = ${req.params.id}
    GROUP BY polls.name, choices.name, choices.description, polls.name_required
    ORDER BY choices.name;`
    )
      // pass each choices and its description, the question as poll_name and the poll id to the front end to render the page and url correctly
    .then((data) => {
        const templateVars = {
          choices: data.rows,
          poll_name: data.rows[0].poll_name,
          poll_id: req.params.id,
          name_required: data.rows[0].name_required
        };
        res.render("choices", templateVars);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  // Route to submit the rankings of the choices in the poll => redirects to the results page
  router.post("/:id", (req, res) => {

    const poll_id = req.params.id;
    // Object.entries creates an array of objects to allow us to loop over them
    const parsed = Object.entries(req.body);
    // create array to catch promises
    const promises = []

    for (const element of parsed) {
      const choice = element[0];
      const vote = element[1];
      promises.push(db.query(
        `UPDATE choices
        SET result_count = result_count + $1
        WHERE choices.name = $2 AND poll_id = $3 RETURNING *;`,
        [vote, choice, poll_id]
      ).then((choicesRanked) => choicesRanked.rows))
    }

    // using Promise.All to execute all the promises outside of the loop as they are async and the loop is sync
    Promise.all(promises)

      .catch((err) => {
          res.status(404).send(err.message);
        });
      res.redirect(`/results/${req.params.id}`);
  });
  return router;
};
