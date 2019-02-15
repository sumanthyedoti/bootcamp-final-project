

class Task{
    constructor(schema){
        this.data=schema;
    }
    insertNewTask(title,topics,task,dueDate,gId,uid,member,msg){
        var userDetail=this.data.userDetail;
        var Task=this.data.Task;
        var obj=[{
            title:title,
            topics:topics,
            task:task,
            dueDate:dueDate,
            gId:gId,
            uid:uid,
            member:member,
            incompeteMember:member
        }];
    var promise=new Promise((resolve,reject)=>{
        Task.insertMany(obj)
        .then(async(result)=>{
                    if(result.length>0){
                            var notification={
                                msg:msg,
                                link:'',
                                crreateDate:new Date(),
                                read:false
                            };
                            var taskdata=result[0];   

                            try{
                                await userDetail.update({$or:member},{$addToSet:{"notification":notification}},{ multi: true })
                                await userDetail.update({$or:member},{$addToSet:{"taskList":taskdata["_id"]}},{ multi: true })
                                resolve({"success":"success"})
                            }
                            catch(err){
                                reject({"error":err})
                            }
                     }
                     else{
                      reject({"error":"some thing wrong"})
                     }

        })
        .catch((err)=>{
            reject({"error":err})
        })
    });
    return promise;
    }
    searchTaskMember(taskId,accessType){
        var userDetail=this.data.userDetail;
        var Task=this.data.Task;
       var promise=new Promise((resolve,reject)=>{
        Task.findById(taskId)
        .then(async(data)=>{
           
            var userdata=data.member;
            console.log(data.member);
            if(accessType==="member"){
               userdata=data.member;
            }
            else if(accessType==="incompeteMember"){
               userdata=data.incompeteMember;
            }
            else if(accessType==="completeMember"){
                userdata=data.completeMember;
            }
            if(userdata.length<=0){
             userdata=[{"Username":"@433434"}] 
            }
            console.log("ram");
            console.log(userdata);
            try{
            var users=await userDetail.find({$or:userdata},{Name:1,Username:1,email:1,gender:1});
            resolve({"success":users});
            }
            catch(err){
             reject({"error":err})
            }
            
        })
        .catch((err)=>{
            console.log("err"+err)
          reject({"error":err});
        })
    })
    return promise;
    }
  makeCompleteTask(taskId,Username,msg){
        var userDetail=this.data.userDetail;
        var Task=this.data.Task;
        var promise=new Promise(async(resolve,reject)=>{
        try{
            var obj1=  await  Task.update({_id:taskId},{$pull:{"incompeteMember":{Username:Username}}});
            var obj2=  await  Task.update({_id:taskId},{$addToSet:{"completeMember":{Username:Username}}});
            var notification={
                msg:msg,
                link:'',
                crreateDate:new Date(),
                read:false
            };
                await userDetail.update({Username:Username},{$addToSet:{"notification":notification}},{ multi: true })
            resolve({"success":"success"})
        
            }
            catch(err){
            reject({"error":err});
            }

            })
        return promise;
    }
    createNewEvent(title,about,startDate,endDate,orgId,msg,groups){
        var userDetail=this.data.userDetail;
        var Event=this.data.Event;
        var Group =this.data.Group;
        var promise=new Promise((resolve,reject)=>{
        Group.findById(groups,{"member.Username":1})
        .then((data)=>{
          console.log(data);
           var obj1=[{
               title:title,
               about:about,
               startDate:startDate,
               endDate:endDate,
               orgId:orgId,
               member: JSON.parse(JSON.stringify(data.member))
           }];
           console.log(obj1);
           Event.insertMany(obj1)
           .then(async(data)=>{
               if(data.length>0){
                    var notification={
                    msg:msg,
                    link:'',
                    crreateDate:new Date(),
                    read:false
                    };
                    var taskdata=data[0];
                    try{
                        console.log("eee")
                        console.log(obj1[0].member)
                        await userDetail.update({$or:obj1[0].member},{$addToSet:{"notification":notification}},{ multi: true })
                        console.log("ggggg");
                        await userDetail.update({$or:obj1[0].member},{$addToSet:{"eventList":taskdata["_id"]}},{ multi: true })
                        resolve({"success":"success"});
                    }
                    catch(err){
                        console.log(err);
                        reject({"error1":err})
                    }
               }
           })
           .catch((err=>{
               reject({"error":err})
           }))

        })
        .catch((err)=>{
          reject({"error2":err})
        })
    })
    return promise;
    }
}

module.exports=Task;