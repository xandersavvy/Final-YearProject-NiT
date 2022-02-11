const { loginUser, logoutUser, registerUser } = require('../controllers/userController');

const router = require('express').Router();

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.post('/register', registerUser);


module.exports = router;