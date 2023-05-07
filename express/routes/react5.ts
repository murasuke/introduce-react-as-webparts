import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('react5');
});

module.exports = router;
export default router;
