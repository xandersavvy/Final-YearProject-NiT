const { getAllDealers, createDealer, deleteDealer, getSingleDealer  } = require('../controllers/dealerController');
const { isAuthenticated, isManager } = require('../middleware/auth');

const router = require('express').Router();




router.route('/:id').get(isAuthenticated,isManager,getSingleDealer).delete(isAuthenticated,isManager,deleteDealer)
                    .put(isAuthenticated,isManager,createDealer)






router.route('/').get(isAuthenticated,getAllDealers)
                .post(isAuthenticated,isManager,createDealer);




module.exports = router;