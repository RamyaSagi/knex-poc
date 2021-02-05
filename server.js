
const express = require('express');
const bodyParser = require('body-parser');
const config =  require('./config');
const PORT = process.env.PORT || config.port;
const app = express();
const http = require('http').Server(app);
const router = (global.router = (express.Router()));
app.use(express.static(__dirname ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var routes = require('./routes')(app);

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Server listening on port: ${PORT}`);
});