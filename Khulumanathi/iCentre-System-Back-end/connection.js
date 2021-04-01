
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'centerdb',
    multipleStatements: true,
    dateStrings: 'date'
   });
   
    mysqlConnection.connect(function(error){
       if(!!error){
           console.log('Error connecting to mySql database');
       } else{
           console.log('connected to mySql database');
       }
   });
    
 module.exports = mysqlConnection;  