var session = require('express-session');
var express = require('express')
var mysql = require('mysql');
const router = express.Router()
const db = require('../Config/connection');


//  let bodyParser= require('body-parser')
//  router.use(bodyParser.json())
 
  router.post('/imageRe',(req, res) =>{
    
       let message = '';
       // let sfc_name = req.body.sfc_name;
        //let last_name = req.body.last_name;
      // let sfc_position = req.body.sfc_position;
      // let sfc_id = req.body.sfc_id;
        //let number = req.body.number;
        //let sfc_name = req.body.sfc_name;
       // let fac_id= req.body.fac_id;
        //sfc_changed
        let  sfc_id= req.body.sfc_id;
        let fac_id=req.body.fac_id;
        let sfc_name=req.body.sfc_name;
        let sfc_position=req.body.sfc_position;

        //let uploadedFile = req.files.image;
        //let image_name = uploadedFile.sfc_name;
       // let fileExtension = uploadedFile.mimetype.split('/')[1];
        //image_name = uploadedFile;
        let uploadedFile = req.files.sfc_img;
        let image_name = uploadedFile.sfc_id;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = sfc_id + '.' + fileExtension;

        let usernameQuery = "SELECT * FROM `image` WHERE image_id = '" + image_name+ "'";

        /*db.query(usernameQuery, (err, result) => {
            if (err) {
             //   return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Username already exists';
                res.render( {
                    message,
                    title: 'Welcome to  image | Add a new candidate'
                });
           // } else {
                // check the filetype before uploading it
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv('public/assets/img/'+ image_name, (err ) => {
                        if (err) {
                               return res.status(500).send(err);
                        }*/
                        // send the player's details to the database
                       // let query = "INSERT INTO image image VALUES ('" + image_name  + "')";
                       uploadedFile.mv('public/assets/img/'+ image_name);
                        //let query = "INSERT INTO `sfc` (sfc_img) VALUES ('" +image_name  + "','"+sfc_id+"')";
                        let query =("INSERT INTO sfc (sfc_id, fac_id, sfc_name, sfc_position, sfc_img) VALUES ('"+sfc_id+"', '"+fac_id+"', '"+sfc_name+"', '"+sfc_position+"', '"+image_name+"')")

                        
                        db.query(query, (err, result) => {
                            if (err) {
                              //  return res.status(500).send(err);
                              res.send({
                                data :err,
                                status:400,
                                message:"error ocurred"
                              })
                                
                            }
                            else{
                                res.send({
                                 data :result,
                                    status:200,
                                    message:"Registered Sucessfully"
                                       });
                            }
                           // res.redirect('/');
                        });
                    //});
               /* } else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render( {
                        message,
                        title: 'Welcome to image | Add a new candidate'
                    });
                }*/
            //}
        });
    //})
     

  //})
      
 let path = require('path')
 router.use((req, res, next)  => {
     console.log(`${new Date().toString()} => ${req.originalUrl}`)
     next()
 })


 module.exports = router;