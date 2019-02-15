var express=require('express');
var schema=require('../DataBase/Model');
var {userDetail}=require('../DataBase/Opreation');
var route=express.Router();
var UserSchema=new userDetail(schema);
route.post("/login",function(req,res){
    console.log(req.body);
    UserSchema.userLogin(req.body.uid,req.body.pass)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
      res.status(404).send(err);
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
route.get("/searchMemberOrg/:orgId",function(req,res){
    var seachKey=req.query.searchKey;
    var orgId=req.params.orgId;
    UserSchema.searchMemberOrganization(orgId,seachKey)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/searchMemberGroup/:gId",function(req,res){
    var seachKey=req.query.searchKey;
    var gId=req.params.gId;
    UserSchema.searchMemberGroup(gId,seachKey)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/notification/:uid",function(req,res){
    UserSchema.getNotification(req.params.uid)
    .then((result)=>{
       res.send(result)
    })
    .catch((err)=>{
      res.send(err);
    })
})
route.get("/task/:uid",function(req,res){
    UserSchema.getTask(req.params.uid)
    .then((result)=>{
       res.send(result)
    })
    .catch((err)=>{
      res.send(err);
    })
})
route.get("/event/:uid",function(req,res){
    UserSchema.getEvent(req.params.uid)
    .then((result)=>{
       res.send(result)
    })
    .catch((err)=>{
      res.send(err);
    })
})


module.exports=route;