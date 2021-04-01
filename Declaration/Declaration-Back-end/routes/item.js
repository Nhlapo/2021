
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/itemss', function (req, res) {

    // Checks if serial number exists         
    var checkSerial = req.body.serialNum;

    var myQuery = "SELECT * FROM items WHERE serialNum = '" + checkSerial + "'";

    myConnection.query(myQuery, checkSerial, function (error, results, fields) {

        if (results.length > 0) {

            res.send({ data: error, message: "Serial Number already exists" });
        }

        else {
            let post = ({
                serialNum:req.body.serialNum, userID: req.body.userID, itemDescription: req.body.itemDescription,
                itemType: req.body.itemType, itemBrand: req.body.itemBrand, dateDeclared: req.body.dateDeclared
            });
            myConnection.query("INSERT INTO items SET ?", [post], function (error, results, fields) {

                if (error) throw error;

                return res.send({ data: results, message: "Successfully entered items" });

            });
        }
    });


});

Router.put('/add', function(req,res){

    let updates = ({serialNum:req.body.serialNum, itemDescription:req.body.itemDescription,
        itemType:req.body.itemType, itemBrand:req.body.itemBrand, dateDeclared:req.body.dateDeclared});

    var userID = req.body.userID;

    myConnection.query('UPDATE items SET ? WHERE userID = ?', [updates, userID], function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Update successful"});
    });
});

Router.delete('/removeItem', function(req,res){
  
    var itemType = req.body.itemType;
    var userID = req.body.userID ;
   

    myConnection.query('DELETE FROM items WHERE userID = ? AND itemType = ?', [userID, itemType ], function(error,results, fields){

        if(error) throw error;

        return res.send({data: results, message:"Successfully deleted the item"});

    } );
});

Router.get('/show', function(req,res){

    var search = req.params.userID;

    myConnection.query('SELECT * FROM items WHERE userID = ?', search, function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Search Successful"});
    })
});

module.exports = Router;

