const express = require('express');
const bodyparser = require('body-parser');
const myConnection = require('./connection');
const AdminRoute = require('./routes/admin');
const cors = require('cors')

var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.get('/', function(req,res,next){
    //handle get routes
})

app.use('/',require('./routes/student'));
app.use('/',require('./routes/item'));
app.use('/',require('./routes/admin'));
app.use('/',require('./routes/itemCart'));
app.use('/',require('./routes/studentDeclare'));
app.use('/',require('./routes/register'));
app.use('/',require('./routes/login'));



app.listen(8080);

