var express = require('express');
var router = express.Router();
const bag_controlers= require('../controllers/bag');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET home page. */
router.get('/', bag_controlers.bag_view_all_Page );
/* GET detail bag page */
router.get('/detail', bag_controlers.bag_view_one_Page);
/* GET create bag page */
router.get('/create',secured, bag_controlers.bag_create_Page);
/* GET create update page */
router.get('/update',secured, bag_controlers.bag_update_Page);
/* GET create bag page */
router.get('/delete',secured, bag_controlers.bag_delete_Page);
module.exports = router;