const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');


//poll display
router.get('/isrc', function(req,res){


    db.query('SELECT c.isrc_id, c.isrc_name, c.isrc_img , COUNT(v.isrc_id) results FROM iscrc c, votes v WHERE v.isrc_id = c.isrc_id GROUP BY v.isrc_id ORDER BY COUNT(v.isrc_id) DESC',function(err,rows,fields){
        if (err) {
            console.log('Cannot get ', err);
            res.send({
                data: err,
                code: 400,
                message: "error"
            });
            
        } else {
            count = 0;
            if(rows.length > 0){
                for (let x = 0; x < rows.length; x++) {
                    count = count + rows[x].results;
                }
                count = "Total Votes = " + count;
            }else{
                count = "No one voted yet!";
            }
            return res.send({
                data: rows,
                count: count
            });
        }
        
    });
});


module.exports = router;