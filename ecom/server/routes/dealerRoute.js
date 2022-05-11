const { getAllDealers, createDealer, deleteDealer, getSingleDealer  } = require('./dealerController');
const { isAuth  } = require('../utils/util');

const router = require('express').Router();




router.route('/:id').get(getSingleDealer).delete(deleteDealer).put(createDealer)






router.route('/').get(getAllDealers).post(createDealer);




module.exports = router;