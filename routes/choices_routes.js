const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // Route to choices page where voters make their rankings of the choices in a poll
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT polls.name as poll_name, choices.name, choices.description
    FROM choices
    JOIN polls ON poll_id = polls.id
    WHERE poll_id = ${req.params.id}
    GROUP BY polls.name, choices.name, choices.description
    ORDER BY choices.name;`
    )
      .then((data) => {
        const templateVars = {
          choices: data.rows,
          poll_name: data.rows[0].poll_name,
        };
        res.render("choices", templateVars);
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });

  // Route to submit the rankings of the choices in the poll => redirects to the results page
  router.post("/:id", (req, res) => {
    const parsed = Object.entries(req.body);
    console.log("req.body", parsed);
    for (const element of parsed) {
      const choice = element[0];
      const vote = element[1];
      console.log(element);
      db.query(
        `UPDATE choices  SET result_count = result_count + $1
      WHERE choices.name = $2 AND poll_id = $3 RETURNING *;`,
        [vote, choice, req.params.id]
      )
        .then((data) => {
          res.status(200).send("Thanks for voting");
          console.log(data.rows);
        })
        .catch((err) => {
          res.status(404).send(err.message);
        });
    }
    res.redirect("/results");
  });
  return router;
};
