// import controller
const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api', AuthorController.index)
}