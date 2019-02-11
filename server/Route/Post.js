var express=require('express');
var schema=require('../DataBase/Model');
var {Post}=require('../DataBase/Opreation');
var route=express.Router();
var PostData=new Post(schema.Post);
route.post("/Post",function(req,res){
    console.log(req.body);
    var postBy={_id:req.body.uid,name:req.body.name}; 
     PostData.InsertNewPost(
         postBy, 
         req.body.postType,
         req.body.title,
         req.body.textData,
         [],
         []
         )
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
      res.send(err);
    })
})

module.exports=route;