const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
// ? this code allows JSON objects to be posted with strings and arrays

require('./config/mongoose.config'); // calling the mongoose.config and running the connect function
require('./routes/athlete.routes')(app); // "app" is the parameter we're calling to access the routes in the function
/* This is the short-hand notation for the code below:
    const AthleteRouts = require("./routes/athlete.routes");
    AthleteRouts(app)
*/

app.listen(port, () => console.log(`Listening on port: ${port}`));