const Athlete = require('../models/athlete.model');

module.exports = {
    // READ
    findAllAthletes: (request, response) => {
        Athlete.find({})
            .then((athletes) => {
                // console.log({ athletes: athletes })
                response.status(200).json(athletes) // returns a JSON list of all athletes
            })
            .catch((err) => {
                response.status(400).json(err)
            })
    },
    // CREATE
    createAthlete: (request, response) => {
        const { firstName, lastName, sport, team } = request.body // ? athlete data is retrieved from the request.body
        
        //            (request.body) could've been passed in alternatively
        Athlete.create({ firstName, lastName, sport, team }) // ? parameters needed to Create an Athlete
            .then((athlete) => {
                response.status(200).json(athlete)
            })
            .catch((err) => {
                response.status(400).json(err)
            })
    },
    // READ ONE
    findOneAthlete: (request, response) => {
        Athlete.findOne({ _id: request.params.id })
            .then((athlete) => {
                console.log({athlete})
                response.status(200).json(athlete)
            })
            .catch((err) => {
                response.status(400).json(err)
            })
    },
    // UPDATE
    updateAthlete: (request, response) => {
        /* Can also be written as:
            * const { id } = request.params;
            * const { firstName, lastName, sport, team } = request.body;
            
            * Athlete.findOneAndUpdate({_id:id}, {firstName, lastName, sport, team}, {new:true, useFindAndModify:true} )
        */
        Athlete.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
            .then((athlete) => {
                response.status(200).json(athlete)
            })
            .catch((err) => {
                response.status(400).json(err)
            })
    },
    // DELETE
    deleteAthlete: (request, response) => {
        Athlete.deleteOne({_id: request.params.id})
        .then((deleteConfirmation) => {
            response.status(200).json(deleteConfirmation)
        })
        .catch((err) => {
            response.status(400).json(err)
        });
    }
}