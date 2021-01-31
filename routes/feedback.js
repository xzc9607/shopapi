var express = require('express');
var router = express.Router();
var feedback = require('../controllers/feedbackController');

router.get('/getFeedbackListByUid',feedback.getFeedbackListByUid);

module.exports = router;
