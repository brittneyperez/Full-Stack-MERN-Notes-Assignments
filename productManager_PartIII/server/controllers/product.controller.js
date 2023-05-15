const Product = require("../models/product.model");

// TEST
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Test, test... Hello World!"
//     });
// }

module.exports = {
    // CREATE
    createProduct: (request, response) => {
        Product.create(request.body)
            .then(newProduct => response.json(newProduct))
            .catch(err => response.json(err));
    },
    // READ
    getAllProducts: (request, response) => {
        Product.find({})
            .then(allProducts => {
                console.log(allProducts);
                response.json(allProducts);
            })
            .catch(err => {
                console.log(err);
                response.json(err);
            });
    },
    getOneProduct: (request, response) => {
        Product.findOne({_id:request.params.id})
            .then(oneProduct => response.json(oneProduct))
            .catch(err => response.json(err));
    },
    // UPDATE
    updateProduct: (request, response) => {
        Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
            .then(updatedProduct => response.json(updatedProduct))
            .catch(err => response.json(err));
    },
    // DELETE
    deleteProduct: (request, response) => {
        Product.deleteOne({_id: request.params.id}) // note: "id" here MUST match id in corresponding route
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
}

/*
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, //By default, update fill not return a new document. This is necessary to ensure we respond with the newly updated document.
            runValidators: true, //This ensures validators work on a PUT request.
        })
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => console.log(err));
    },
*/