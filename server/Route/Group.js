var express=require('express');
var schema=require('../DataBase/Model');
var {Group}=require('../DataBase/Opreation')
var {Task}=require('../DataBase/Opreation')

var group=new Group(schema)
var groupTask=new Task(schema)
var route=express.Router();
route.post("/auth/group",function(req,res){
    console.log(req.body)
    var {name,gid,orgId,orgName,about}=req.body;
        group.insertNewGroup(name,gid,orgId,orgName,about)
        .then((data)=>{
          res.send(data)
        })
        .catch((err)=>{
           res.send(err);
        })
})
route.post("/auth/member/group/addmember",function(req,res){
    var {gId,Username,email,name,memberType,msg}=req.body;
    var uid={
         Username:Username,
         email:email,
         name:name,
         memberType:memberType,
         addDate:new Date()
     };
     console.log(uid);
     group.insertNewMember(gId,uid,msg)
     .then((data)=>{
         res.send(data)
     })
     .catch((err)=>{
         res.send(err)
     })
})
route.post("/auth/member/group/addstaff",function(req,res){
    var {gId,uid}=req.body;
    group.insertNewStaff(gId,uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})
route.post("/auth/member/group/addAdmin",function(req,res){

    group.insertNewStaff(gId,uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})
route.post("/auth/member/group/remove",function(req,res){
    var {gId,uid}=req.body;
    group.deleteMember(gId,uid)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/auth/member/group/:gid",function(req,res){
     group.getMemberByGroupId(req.params.gid)
     .then((result)=>{
        res.send(result)
     })
     .catch((err)=>{
        res.send(err);
     })
})
route.post("/auth/task",function(req,res){
   var {title,topics,task,dueDate,gId,uid,member,msg}=req.body;
   console.log(req.data);
   groupTask.insertNewTask(title,topics,task,dueDate,gId,uid,member,msg)
   .then((data)=>{
    res.send(data)
   })
   .catch((err)=>{
     res.send(err);
   })
})
route.get("/taskmember/:taskId",function(req,res){
    var taskId=req.params.taskId;
    var access=req.query.access;
    console.log(taskId+" "+access)
    groupTask.searchTaskMember(taskId,access)
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
     res.send(err);
    })
})
route.post("/auth/taskmember/complete",function(req,res){
    var {taskId,uid,msg}=req.body;

    console.log(req.body);
    groupTask.makeCompleteTask(taskId,uid,msg)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/groups/:orgId",function(req,res){
    group.getOrgGroups(req.params.orgId)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err);
    })
})

route.post("/auth/event/",function(req,res){
    var {title,about,startDate,endDate,orgId,msg,groups}=req.body;
    console.log(req.body);
    groupTask.createNewEvent(title,about,startDate,endDate,orgId,msg,groups)
    .then((data)=>{
      res.send(data)
    })
    .catch((err)=>{
      res.send(err);
    })
})

route.get("/groups/user/:userId",function(req,res){
    group.getUserGroups(req.params.userId)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err);
    })
})


module.exports=route;