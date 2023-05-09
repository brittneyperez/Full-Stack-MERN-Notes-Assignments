const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8000;

require('./routes/person.routes')(app);
/* The two lines below are the long-hand notation of the code above. They better show what' going on:
    * const personRoutes = require("./routes/person.routes"); <-- assign the exported function to a const
    * personRoutes(app); <-- invoke the function and pass in the express "app" server
*/

app.listen(port, () => console.log(`Listening on port ${port}`));