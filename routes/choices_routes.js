const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.render('/(votingpage.ejs)');
});

router.post('/:id', (req, res) => {
  res.redirect('/results');
})

module.exports = router;
