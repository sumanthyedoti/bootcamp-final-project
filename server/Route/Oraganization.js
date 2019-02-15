var express=require('express');
var schema=require('../DataBase/Model');
var {Organization}=require('../DataBase/Opreation')
var Org=new Organization(schema)
var route=express.Router();

route.post("/auth/organization",function(req,res){
    console.log(req.body)
    var {name,orgId,address,logoPic,coverPic,organisation,etdDate,founderDetails,about}=req.body;
        Org.insertNewOrganization(name,orgId,address,logoPic,coverPic,organisation,etdDate,founderDetails,about)
        .then((data)=>{
          res.send(data)
        })
        .catch((err)=>{
           res.send(err);
        })
})
route.post("/auth/member/addmember",function(req,res){
     var {orgId,uid,memberType,msg}=req.body;
     console.log(orgId,uid);
     Org.insertNewMember(orgId,uid,memberType,msg)
     .then((data)=>{
         res.send(data)
     })
     .catch((err)=>{
         res.send(err)
     })
})
route.post("/auth/member/addstaff",function(req,res){
    var {orgId,uid}=req.body;
    Org.insertNewStaff(orgId,uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})
route.post("/auth/member/remove",function(req,res){
    var {orgId,uid}=req.body;
    Org.deleteMember(orgId,uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/auth/organization/join/:orgId/:uid",function(req,res){
    //var {orgId,uid}=req.body;
    Org.joinLinkConformation(req.params.orgId,req.params.uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/organization/members/:id",function(req,res){
    console.log(req.params.id);
  Org.getAllMember(req.params.id)
  .then((data)=>{
      res.send(data)
  })
  .catch((err)=>{
      res.send(err);
  })
})
route.post("/task/group",function(req,res){
    console.log(req.body)
   res.send(req.body);
})
route.post("/task/member",function(req,res){
    console.log(req.body)
   res.send(req.body);
})
module.exports=route;