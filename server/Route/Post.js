var express=require('express');
var schema=require('../DataBase/Model');
var {Post}=require('../DataBase/Opreation');
var route=express.Router();
var PostData=new Post(schema.Post);
route.post("/auth/Post",function(req,res){
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

route.get("/auth/Post",function(req,res){
    const uid = req.headers.uid
     PostData.getPostsOfUser(uid)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
      res.send(err);
    })
})

route.post("/auth/Post/like",function(req,res){
     PostData.likePost(req.body.postId, req.body.likedBy)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
      res.send(err);
    })
})

route.post("/auth/Post/dislike",function(req,res){
    PostData.dislikePost(req.body.postId, req.body.dislikedBy)
   .then((data)=>{
       res.send(data);
   })
   .catch((err)=>{
     res.send(err);
   })
})

module.exports=route;