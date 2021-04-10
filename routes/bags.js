var express = require('express');
var router = express.Router();
const bag_controlers= require('../controllers/bag');

/* GET home page. */
router.get('/', bag_controlers.bag_view_all_Page );
module.exports = router;