
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/officer', function(req,res){

   let post = ({

        officer_id:req.body.officer_id, 
        officer_name:req.body.officer_name, 
        officer_pass:req.body.officer_pass, 
        officer_email:req.body.officer_email
    });
        

    myConnection.query("INSERT INTO officer SET ?", [post],function(error,results){
        
        if (error) {
            console.log(error)
        }

        console.log(results)
        return res.send({
            data: results,
            message: "Successfully entered details"
        });
    });
});

Router.put('/insert', function(req,res){

    let officer_id = req.body.officer_id;
    let officer_name = req.body.officer_name;
    let officer_pass =req.body.officer_pass;
    let officer_email= req.body.officer_email;

    if (!officer_id || !officer_name)
    {
        return res.status(400).send({message: "Please enter information"});
    }

    myConnection.query('UPDATE officer SET officer_name=?, officer_pass=?, officer_email=? WHERE officer_id = ?', [officer_name,officer_pass,officer_email,officer_id], function(error,results,fields){
        if (error) throw error;
        return res.send({data: results, message:"Update successful"});
    });

});



Router.delete('/del', function(req,res){
  
    var deleta = req.body.officer_id;
   
    myConnection.query('DELETE FROM officer WHERE officer_id  = ?', deleta, function(error,data, fields){
        data1 = data;
        if(error) throw error;
        return res.send({status:200,
            data: [data, data1],
            data: data,
            message:"Successfully deleted the item"});

    } );
});

Router.get('/display', function(req,res){
    
    myConnection.query('SELECT * FROM officer ', function(error,data,fields){
        data1 = data;
        if(error) throw error;
       
        return res.send({status:200,
            data: [data, data1],
            data:data,
            message:"Search Successful"});
    })
});

module.exports = Router;

