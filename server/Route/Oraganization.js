var express=require('express');
var schema=require('../DataBase/Model');
var {Organization}=require('../DataBase/Opreation')
var Org=new Organization(schema.OrganizationDetail)
var route=express.Router();

route.post("/auth/organization",function(req,res){
    console.log(req.body)
    var {Name,organisationUniqueName,Address,LogoPic,coverPic,Organisation,ETD_Date,FounderDetails}=req.body;
        Org.insertNewOrganization(Name,organisationUniqueName,Address,LogoPic,coverPic,Organisation,ETD_Date,FounderDetails)
        .then((data)=>{
          res.send(data)
        })
        .catch((err)=>{
           res.send(err);
        })
})
route.post("/auth/member/addmember",function(req,res){
     var {org_id,uid}=req.body;
     Org.insertNewMember(org_id,uid)
     .then((data)=>{
         res.send(data)
     })
     .catch((err)=>{
         res.send(err)
     })
})
route.post("/auth/member/addstaff",function(req,res){
    var {org_id,uid}=req.body;
    Org.insertNewStaff(org_id,uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})
module.exports=route;