const { loginUser, logoutUser, registerUser, deleteUser , updatePassword 
    , getEmployeePassword , updateEmployeeInformation,
updateRoleHr,getAllUsers , getSingleuser
 } = require('../controllers/userController');
const { isAuthenticated, isAdmin , isHr} = require('../middleware/auth');

const router = require('express').Router();

// router.route('/login').post(loginUser);



// router.route('/register')

// authenticated routes

// router.route('/logout').post(isAuthenticated, logoutUser);

// router.route('/password').put(isAuthenticated, updatePassword);

// Hr things
router.route('/:id').get(isAuthenticated, isHr, getSingleuser)
                    .put( isAuthenticated, isHr , updateRoleHr)
                    .delete(isAuthenticated, isHr, deleteUser);

router.route('/').get( isAuthenticated, isHr , getAllUsers).post(registerUser);;



//manage employees
// router.route('/admin/:id').get(isAuthenticated, isAdmin, getEmployeePassword)
//                         .put(isAuthenticated , isAdmin, updateEmployeeInformation)
//                         .delete(isAuthenticated , isAdmin , deleteUser);


// router.route('/password/:id').get( isAuthenticated , isAdmin , getEmployeePassword);



module.exports = router;