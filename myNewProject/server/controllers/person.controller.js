const Person = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// CREATE
module.exports.createPerson = (request, response) => {
    /* 
        Mongoose's "create" method is run using our Person 
        model to add a new person to our DB's person collection.
        request.body will contain something like...
        { firstName: "카즈하", lastName: "카에데하라" }
    */
    Person.create(request.body) // This will use whatever the body of the client's request sends over
            .then(person => response.json(person))
            .catch(err => response.json(err));
}

// READ ALL
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => {
            console.log(persons); // use console logs for troubleshooting
            response.json(persons);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        });
}
// READ ONE
module.exports.getPerson = (request, response) => {
    Person.findOne({ _id: request.params.id })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

// UPDATE
module.exports.updatePerson = (request, response) => {
    Person.findByIdAndUpdate({ _id: request.params.id }, request.body, {new: true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

// DELETE
module.exports.deletePerson = (request, response) => {
    Person.findByIdAndDelete({ _id: request.params.id }) // note: "id" MUST match to corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}