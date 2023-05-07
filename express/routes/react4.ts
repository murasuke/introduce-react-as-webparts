import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('react4');
});

module.exports = router;
export default router;
