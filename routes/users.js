var express = require('express');
var router = express.Router();
var user = require('../controllers/userController');

/* GET home page. */
router.get('/', user.getUser);
router.get('/getUserByname',user.getUserByname);
router.post('/Login',user.Login);
router.post('/sendCode',user.sendCode);
router.post('/Register',user.Register);


module.exports = router;
