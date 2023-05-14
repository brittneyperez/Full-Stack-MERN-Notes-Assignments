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

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products);
            response.json(products);
        })
        .catch(err => {
            console.log(err);
            response.json(err);
        });
}

module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}