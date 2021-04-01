
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/declare', function(req,res){

   let post = ({declareID:req.body.declareID, official_ID:req.body.official_ID, student_ID:req.body.student_ID,itemID:req.body.itemID ,dateDeclared:req.body.dateDeclared});

        myConnection.query("INSERT INTO student_declare SET ?", [post],function(error,results,fields){

            if (error) throw error;

            return res.send({data: results, message: "Successfully entered items"});


        });
});

Router.put('/enter', function(req,res){

    let declareID = req.body.declareID;
    let official_ID= req.body.officialID; 
    let studentID = req.body.studentID;
    let itemID = req.body.ietmID;
    let dateDeclared =req.body.dateDeclared;


    if (!declareID)
    {
        return res.status(400).send({message: "Please enter information"});
    }

    myConnection.query('UPDATE student_declare SET official_ID=?, studentID=?, itemID=?,dateDeclared=? WHERE declareID =?', [official_ID, studentID,itemID, dateDeclared,declareID], function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Update successful"});
    });
});

Router.delete('/remove', function(req,res){
  
    var deleta = req.body.declareID;

    myConnection.query('DELETE FROM student_declare WHERE declareID  = ?', deleta, function(error,data, fields){
        data1 = data;
        if(error) throw error;

        return res.send({status:200,
            data: [data,data1],
            data: data,
             message:"Successfully deleted the item"});

    } );
});

Router.get('/list', function(req,res){

    myConnection.query('SELECT * FROM student_declare ',function(error,data,fields){
        data1 = data;
        if (error) throw error;

        return res.send({status:200,
            data: [data,data1],
            data: data, message:"Search Successful"});
    })
});

module.exports = Router;

