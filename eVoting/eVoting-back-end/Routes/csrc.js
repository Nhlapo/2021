// const express = require('express');
// const router = express.Router();
// const sql = require('mysql');
// const db = require('../Config/connection');



// //retrieve data from user
// router.get('/csrc', function(req,res){

//     db.query('SELECT csrc_id, csrc_name, csrc_img, total_votes  FROM csrc',function(error,results,fields){
//         if(error) throw error;
     
//             return res.send({data:results});
        
//     });
// });


// router.post('/save', function(req,res) {

<<<<<<< HEAD
//   let post = {csrc_id:req.body.csrc_id, csrc_name: req.body.csrc_name,csrc_img: req.body.csrc_img };
//   if (!post) {
//     return res.status(400).send({ error:true, message: 'provide parties'});
//   }
//   db.query('INSERT INTO csrc SET ?',[post], function (error, results, fields)

//   {
//       if(error) throw error;

//       console.log('insert success');
//       return res.send({data:results});

//   });
// });

=======
>>>>>>> dec166bc9f344ddfdb36f18e88129630392f08cf
//delete
// router.delete('/csrc/:csrc_id',function(req,res){
//     var csrc = req.params.csrc_id;
//     /*if(!id){
//         return res.status(400).send({ error: true, message: 'provide user_id' });
//     }*/

//     db.query('DELETE FROM csrc WHERE csrc_id = '+ csrc, function(error,result){
//         if(error){
//             console.log('error')
//         } else {
//         return res.send('delete success');
//         }
//     })
// });

module.exports = router