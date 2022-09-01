

import express from 'express';
import * as productController from '../controllers/productController.js'
const router = express.Router();


router
  .route('/products')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/products/:id')
  .get(productController.getProductById)
  .put(productController.updateProductById)
  .delete(productController.deleteProductById);


export default router;