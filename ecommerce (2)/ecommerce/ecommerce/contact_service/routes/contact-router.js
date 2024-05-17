const express = require('express');
const contactCtrl = require('../controllers/contact-ctrl');
const router = express.Router();

router.get('/', contactCtrl.checkServiceRunning)
router.post('/sendcontact',contactCtrl.Addcontact)

module.exports = router