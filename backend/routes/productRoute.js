const router = require('express').Router();
const { getSingleProduct, updateProduct , createProduct, getAllProducts, deleteProduct } = require('../controllers/productController');
const {isAuthenticated, isSalesMan, isManager} = require('../middleware/auth');


router.route('/:id').get(isAuthenticated,getSingleProduct)
                    .put(isAuthenticated , isSalesMan , updateProduct )
                    .delete(isAuthenticated , isManager , deleteProduct );

router.route('/').get(isAuthenticated,getAllProducts)
                 .post(isAuthenticated , isManager , createProduct);



module.exports = router;