const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // allows JSON obejcts to be posted
app.use(express.urlencoded({ extended: true })); // allows JSON objects with strings and arrays

const port = 8000;

require('./config/mongoose.config');
require('./routes/person.routes')(app);
/* The two lines below are the long-hand notation of the code above. They better show what' going on:
    * const personRoutes = require("./routes/person.routes"); <-- assign the exported function to a const
    * personRoutes(app); <-- invoke the function and pass in the express "app" server
*/

app.listen(port, () => console.log(`Listening on port ${port}`));