let express     = require('express');
let bodyParser  = require('body-parser');
let routes      = require('./routes/routes.js');
let app      = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);
const server = app.listen(3333, () =>{
    console.log(`server running on port: `, server.address().port);
})