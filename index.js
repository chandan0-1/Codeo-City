const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 8001;
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

//using EJS as middleware to render pages 
app.use(expressEjsLayouts);

app.post("https://codexweb.netlify.app/.netlify/functions/enforceCode", );

app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./assets"));

app.use('/', require('./routes'));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function(err){
  if (err){
    console.log(`error in running the server on the port: ${port}`);}

  console.log(`Server is running on port: ${port}`);
})