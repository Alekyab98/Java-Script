var express = require('express');
var router = express.Router();
const bag_controlers= require('../controllers/bag');

/* GET home page. */
router.get('/', bag_controlers.bag_view_all_Page );
/* GET detail bag page */
router.get('/detail', bag_controlers.bag_view_one_Page);
/* GET create bag page */
router.get('/create', bag_controlers.bag_create_Page);
/* GET create update page */
router.get('/update', bag_controlers.bag_update_Page);
/* GET create bag page */
router.get('/delete', bag_controlers.bag_delete_Page);



module.exports = router;