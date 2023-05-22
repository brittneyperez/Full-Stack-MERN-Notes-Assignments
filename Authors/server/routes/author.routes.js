const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.post('/api/authors/create', AuthorController.createAuthor)
    app.get('/api/author/:id', AuthorController.findOneAuthor)
    app.patch('/api/author/edit/:id', AuthorController.updateAuthor)
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
}