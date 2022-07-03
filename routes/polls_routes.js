const express = require('express');
const dbParams = require('../lib/db');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('/(homepage.ejs)');
});


router.get('/:id', (req, res) => {
  dbParams.query
  res.render('/(thank you for creating the poll.ejs)');
})



router.post('/', (req, res) => {
  res.redirect('/polls/:id');
})

module.exports = router;
