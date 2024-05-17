const express = require('express');
const UserCtrl = require('../controllers/user-ctrl');
const router = express.Router();

router.post('/user/auth', UserCtrl.checkUserAuth);
router.post("/user/register", UserCtrl.register);
router.get("/users", UserCtrl.getAllUsers);
router.get('/', UserCtrl.checkServiceRunning);

module.exports = router;