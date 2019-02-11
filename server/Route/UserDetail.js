var express=require('express');
var schema=require('../DataBase/Model');
var {userDetail}=require('../DataBase/Opreation');
var route=express.Router();
var UserSchema=new userDetail(schema.userDetail);
route.post("/login",function(req,res){
    UserSchema.userLogin(req.body.uid,req.body.pass)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
      res.send(err);
    })
})
route.post("/signUp",function(req,res){
    UserSchema.insertUserDetail(req.body.name,
                                req.body.username,
                                req.body.email,
                                req.body.pass,
                                req.body.profilePic,
                                req.body.coverPic,
                                req.body.DOB,
                                req.body.gender
                                )
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports=route;