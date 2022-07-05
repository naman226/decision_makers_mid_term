const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // Route to choices page where voters make their rankings of the choices in a poll
  router.get("/", (req, res) => {
    db.query(
    `SELECT polls.name as poll_name, choices.name, choices.description
    FROM choices
    JOIN polls ON poll_id = polls.id
    WHERE poll_id = 1
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
    db.query(`UPDATE choices count QUERY`)
      .then(() => {
        res.redirect("results");
      })
      .catch((err) => {
        res.status(404).send(err.message);
      });
  });
  return router;
};
