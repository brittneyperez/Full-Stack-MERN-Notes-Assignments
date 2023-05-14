const PersonController = require('../controllers/person.controller')

module.exports = (app) => {
    app.get('/api', PersonController.index);
    // CREATE
    app.post('/api/people', PersonController.createPerson);
    
    // READ
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
    
    // UPDATE
    app.patch('/api/people/:id', PersonController.updatePerson);
    
    // DELETE
    app.delete('/api/people/:id', PersonController.deletePerson);
}