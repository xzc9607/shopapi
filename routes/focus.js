var express = require('express');
var router = express.Router();
var focus = require('../controllers/focusController');

router.get('/getFocusListByUid',focus.getFocusListByUid);
router.post('/addfocus',focus.AddFocus);

module.exports = router;
