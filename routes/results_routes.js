const express = ('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('/(results.ejs)');
});

module.exports = router;
