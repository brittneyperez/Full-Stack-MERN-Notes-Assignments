const mongoose = require('mongoose')

const AthletesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minLength: [3, 'First Name must be 3 or more characters'],
        maxLength: [255, 'First Name is too long']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minLength: [3, 'Last Name must be 3 or more characters'],
        maxLength: [255, 'Last Name is too long']
    },
    sport:{
        type: String,
        required: [true, 'Sport is required'],
    },
    team:{
        type: String,
        required: [true, 'Team is required'],
    }
}, {timestamps:true})

const Athlete = mongoose.model('Athlete', AthletesSchema)
module.exports = Athlete