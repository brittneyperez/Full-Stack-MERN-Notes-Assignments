const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    // TEST: app.get('/api', ProductController.index);
    
    // CREATE
    app.post('/api/products', ProductController.createProduct);
    // READ
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    // UPDATE
    app.patch('/api/products/:id', ProductController.updateProduct);
    // DELETE
    app.delete('/api/products/:id', ProductController.deleteProduct)
}