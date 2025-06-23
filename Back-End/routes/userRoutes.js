const express = require('express');
const { getMe, getAllUsers, updateUserRole } = require('../controllers/userController');
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

const router = express.Router();

router.get('/me', auth, getMe);
router.get('/all', auth, roleAuth('admin'), getAllUsers);
router.put('/role', auth, roleAuth('admin'), updateUserRole);

module.exports = router;