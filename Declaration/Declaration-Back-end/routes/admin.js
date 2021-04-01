
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/admins', function(req,res){

    var userN = req.body.adminUsername;
    var userP = req.body.adminPassword;

    if(!userN || !userP){
        
        return res.send({message: 'Please Enter All The Fields'});
    }

    if(userP.length < 4){
        
        return res.send({message: 'User password must be a minimum of 4 characters'});
    }

    let post=({adminUsername:req.body.adminUsername, adminPassword:req.body.adminPassword,
             adminName:req.body.adminName, adminID:req.body.adminID}); 
        
            myConnection.query("INSERT INTO admin SET ?" , [post],function(error,results,fields){

                if(error) throw error; 
                return res.send({ data: results, message:'Successfully posted data' });
            });       

});


Router.delete('/removeAdmin', function(req,res){

    var adminstr = req.params.adminID;

    myConnection.query('DELETE * FROM admin WHERE userID = ?' ,adminstr,function(error,results,fields){

        if(error) throw error;

        return res.send({data: results ,message: "Successfully Deleted User" });
    });

});

Router.put('/updates',function(req,res){

    let ups = ({adminUsername:req.body.adminUsername, adminPassword:req.body.adminPassword,
        adminName:req.body.adminName}); 

    let adminID=req.body.adminID;

    myConnection.query('UPDATE admin SET ?  WHERE a_id = ?', [ups,adminID], function(error,results, fields){

        if(error) throw error;

        return res.send({data: results, message:'Successfully Updated'});

    });

});

module.exports = Router;
