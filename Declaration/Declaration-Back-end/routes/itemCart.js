const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/itemsCart', function(req,res){

    let posts = ({itemType:req.body.itemType, itemName:req.body.itemName});

    myConnection.query('INSERT INTO item_cat SET', [posts], function(error,results,fields){

        if(error) throw error;

        return res.send({data:results, message:'Successfully inserted items'});
    });

});

Router.delete('/cartRemove', function(req,res){

    var itema = req.body.itemType;

    myConnection.query('DELETE * FROM item_cat WHERE itemType = ? ' , itema , function(error,results,fields){

        if(error) throw error;

        return res.send({data:results, message:'Successfully deleted item'});
    });
});

module.exports = Router;