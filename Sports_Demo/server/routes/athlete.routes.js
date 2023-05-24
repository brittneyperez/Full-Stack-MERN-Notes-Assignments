const AthleteController = require('../controllers/athlete.controller')

module.exports = app => {
    app.get('/api/athletes', AthleteController.findAllAthletes);
    app.post('/api/createAthlete', AthleteController.createAthlete);
    app.get('/api/readAthlete/:id', AthleteController.findOneAthlete);
    app.patch('/api/updateAthlete/:id', AthleteController.updateAthlete);
    app.delete('/api/deleteAthlete/:id', AthleteController.deleteAthlete);
}