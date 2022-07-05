/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT choices.name, choices.description, sum(choices.result_count) as preference
    FROM choices
    WHERE poll_id = 1 GROUP BY choices.name, choices.description
    ORDER BY preference;`;
    console.log(query);
    db.query(query)
      .then(data => {
        console.log(data.rows);
        const templateVars = {choices: data.rows};
  // res.render('', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
