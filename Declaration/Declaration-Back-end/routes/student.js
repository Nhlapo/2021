
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/students', function(req,res){

   let post = ({student_ID:req.body.student_ID, firstName:req.body.firstName,
                lastName:req.body.lastName});

        myConnection.query("INSERT INTO student SET ?", [post],function(error,results,fields){

            if (error) throw error;

            return res.send({data: results, message: "Successfully entered items"});


        });
});

Router.put('/update', function(req,res){

    let student_ID = req.body.student_ID;
    let firstName = req.body.firstName;
    let lastName =req.body.lastName;

    if(!student_ID || !firstName)
    {
        return res.status(400).send({message: "Please provide details"});
    }
    myConnection.query('UPDATE student SET firstName=?, lastName=? WHERE student_ID=?', [firstName,lastName,student_ID], function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Update successful"});
    });
});


Router.delete('/discard', function(req,res){
  
    var deleta = req.body.student_ID;

    myConnection.query('DELETE FROM student WHERE student_ID  = ?', deleta, function(error,data, fields){
        data1 = data;
        if(error) throw error;

        return res.send({status:200,
            data: [data, data1],
            data: data,
             message:"Successfully deleted the item"});

    } );
});

Router.get('/lists', function(req,res){


    myConnection.query('SELECT * FROM student ', function(error,data,fields){
        data1 = data;
        if (error) throw error;

        return res.send({status:200,
            data: [data,data1],
            data: data,
            message:"Search Successful"});
    })
});



module.exports = Router;

