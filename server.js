// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');


const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
const pollsRouter = require("./routes/polls_routes.js");
const choicesRouter = require("./routes/choices_routes.js");
const resultsRouter = require("./routes/results_routes.js");


// Mount all resource routes
app.use('/polls', pollsRouter(db));
app.use('/choices', choicesRouter(db));
app.use('/results', resultsRouter(db));

// Home page
app.get("/", (req, res) => {
  res.redirect("/polls");
});

app.listen(PORT, () => {
  console.log(`Decison Maker is listening on port ${PORT}`);
});
