import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('react1');
});

router.get('/umd', function (req, res, next) {
  res.render('react1_umd');
});

module.exports = router;
export default router;
