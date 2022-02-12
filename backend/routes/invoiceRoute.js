const router = require('express').Router();
const { getAllInvoices, createInvoice ,getSingleInvoice,deleteInvoice,updateInvoice } = require('../controllers/invoiceController');
const {isAuthenticated, isSalesMan, isManager} = require('../middleware/auth');


router.route('/').get(isAuthenticated , getAllInvoices)
                    .post(isAuthenticated,isSalesMan,createInvoice);

router.route('/:id').get(isAuthenticated, getSingleInvoice)
                    .delete(isAuthenticated, isManager, deleteInvoice)
                    .put(isAuthenticated, isManager, updateInvoice);



module.exports = router;