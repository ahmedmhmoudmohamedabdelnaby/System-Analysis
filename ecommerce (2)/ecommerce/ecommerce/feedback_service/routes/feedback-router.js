const express = require('express');
const feedbackCtrl = require('../controllers/feedback-ctrl');
const router = express.Router();

// router.get('/feedback', feedbackCtrl.getFeedBack);
router.get('/', feedbackCtrl.checkServiceRunning)
router.post('/sendfeedback',feedbackCtrl.Addfeedback)

module.exports = router