const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;

require('./config/mongoose.config');
require('./routes/product.routes')(app);
/* Code above is same as writing:
    const ProductRoutes = require("./routes/product.routes");
    productRoutes(app);
*/

app.listen(port, () => console.log(`Listening on port: ${port}`));