const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 8000;

require('./routes/product.routes')(app);
/* Above code is same as writing:
    const ProductRoutes = require("./routes/product.routes");
    productRoutes(app);
*/

app.listen(port, () => console.log(`Listening on port: ${port}`));