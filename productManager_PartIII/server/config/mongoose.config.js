const mongoose = require('mongoose'); // creates a DB named "person" if one doesn't exist already

mongoose.connect("mongodb://127.0.0.1:27017/person", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));