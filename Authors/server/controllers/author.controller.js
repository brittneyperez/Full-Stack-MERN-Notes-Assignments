const Author = require('../models/author.model')

module.exports = {
    // CREATE
    createAuthor: (request, response) => {
        Author.create(request.body)
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    },
    // READ
    findAllAuthors: (req, res) => {
        Author.find()
            .then((authors) => {
                console.log({ all_authors: authors })
                res.json({ all_authors: authors })
            })
            .catch((err) => res.status(400).json({ message: 'Something went wrong...', error: err }))
    },
    findOneAuthor: (req, res) => {
        console.log(req.params)
        Author.findOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch((err) => res.status(400).json({ message: 'Something went wrong...', error: err }))
    },
    // UPDATE
    updateAuthor: (req, res) => {
        console.log("UPDATE AUTHOR:",req.body)
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new:true, runValidators:true })
            .then((author) => {
                console.log(author)
                res.status(200).json(author)
            })
            .catch((err) => res.status(400).json({ message: 'Something went wrong...', error: err }))
    },
    // DELETE
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => res.json({ deleteConfirmation }))
            .catch((err) => res.status(400).json({ message: 'Something went wrong...', error: err }))
    }
}