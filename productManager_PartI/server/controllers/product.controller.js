const Product = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Test, test... Hello World!"
    });
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}