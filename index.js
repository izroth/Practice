//create a express sever
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
require('./db.js');

//set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

