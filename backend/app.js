const express = require('express')
const path = require("path");
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 3001;

// set root folder for views
app.set("views", path.join(__dirname, "views"));

// Statics
app.use(express.static(path.join(__dirname, "static")));

app.use(cors())
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Encode body
app.use(bodyParser.urlencoded({ extended: false }));

const roomRouter = require("./routes/room");

app.use(roomRouter.router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  