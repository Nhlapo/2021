const express = require("express");
//const mysql = require("mysql");
const bodyparser = require('body-parser');
const AdminRoutes = require("./routes/admin");
const categoryRoutes = require("./routes/category");
const AnonymousRoutes = require("./routes/anonymous");
const RecognizedRoutes = require("./routes/recognized");
const LoginRoutes = require("./routes/login");
const feedbackRoutes = require("./routes/feedback");
const mysqlConnection = require("./connection");
const cors = require('cors')
// const app = require();

var app = express();
app.use(bodyparser.json());

/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
*/
app.use(cors())
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  })

app.use("/admin", AdminRoutes);
app.use("/category", categoryRoutes);
app.use("/anonymous/GetAll", AnonymousRoutes);
app.use("/recognized/GetAll", RecognizedRoutes);
app.use("/login", LoginRoutes);
app.use("/feedback", feedbackRoutes);
//app.use("/feedback/GetAll", feedbackRoutes);

///
app.use("/recognized/compliment", RecognizedRoutes);
app.use("/recognized/complain", RecognizedRoutes);
app.use("/recognized/suggestion", RecognizedRoutes);

app.use("/recognized/count", RecognizedRoutes);
app.use("/anonymous/count", RecognizedRoutes);

/*
app.use("/feedback/complain", feedbackRoutes);
app.use("/feedback/suggestion", feedbackRoutes);
app.use("/feedback/compliment", feedbackRoutes);*/

app.use('/',require('./routes/category'));
app.use('/', require('./routes/recognized'));
app.use('/', require('./routes/anonymous'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/feedback'));
app.use('/', require('./routes/feedback'));


app.listen(8080);