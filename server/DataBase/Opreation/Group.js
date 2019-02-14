class Group{
    constructor(org){
        this.data=org;
    }
    insertNewGroup(name,organisationId,gid,orgName,about){
        var obj=[{
            name:name,
            organisationId:organisationId,
            gid:gid,
            orgName:orgName,
            about:about
        }]
        //console.log(obj);
        var {Group}=this.data;
        var promise=new Promise((resolve,reject)=>{
            Group.insertMany(obj)
            .then((data)=>{
               resolve({"success":data[0]});
            })
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise;
 
    }
    insertNewStaff(gId,uid){
        var {Group}=this.data;
        var promise=new Promise((resolve,reject)=>{
            Group.findById(gId)
            .then((data)=>{
                var obj=[];
                obj=data.member.filter((d)=>{
                     return (d["_id"]===uid)
                })
                if(obj.length==1){
                    reject({"error":"staff already inserted"})
                }
                else{
                    Group.update({_id:gId},{ $addToSet: { "member": { _id: uid,memberType:"staff",join:false} } })
                    .then((data)=>{
                        console.log(data);
                        if (data.nModified > 0)
                       resolve({"success":"staff added successfuly"});
                        else
                         reject({"error":"staff already added"});
                    })
                    .catch((err)=>{
                        reject({"error":err});
                    })
                }
               
            })
            .catch((err)=>{
              reject({"error":err});
            })

        })
        return promise;
    }
    insertNewMember(gId,uid,msg){
        var {Group}=this.data;
        var userDetail=this.data.userDetail;
        console.log(gId+" dd "+uid);
        var promise=new Promise((resolve,reject)=>{
            Group.findById(gId)
            .then((data)=>{
                var obj=[];
               
                obj=data.member.filter((d)=>{
                     return d.Username===uid.Username
                })
                if(obj.length>0){
                    reject({"error":"member already inserted"})
                }
                else{
                    console.log(data.member.length);
                    Group.update({_id:gId},{ $addToSet: { "member":uid } })
                    .then(async(data)=>{
                        console.log(data);
                        if (data.nModified > 0){
                            var notification={
                                msg:msg,
                                link:'',
                                crreateDate:new Date(),
                                read:false
                            };
                          try{  
                          await userDetail.update({Username:uid.Username},{$addToSet:{"notification":notification}})
                          await userDetail.update({Username:uid.Username},{$addToSet:{"organization":{_id:gId}}})
                             resolve({"success":"member added successfuly"});
                          }
                          catch(err){
                            reject({"error":err});
                          }
                       
                        }
                        else
                         reject({"error":"member already added"});
                    })
                    .catch((err)=>{
                        reject({"error":err});
                    })
                }
               
            })
            .catch((err)=>{
              reject({"error":err});
            })

        })
        return promise;
    }
    deleteMember(gId,uid){
        var {Group}=this.data;
        var promise=new Promise((resolve,reject)=>{
            Group.update({_id:gId},{$pull:{"member":{"Username":uid}}})
            .then((data)=>{
                console.log(data)
                if (data.nModified > 0)
                resolve({"success":"member deleted successfuly"});
                 else
                  reject({"error":"member is not added"});
            })
            .catch((err)=>{
                reject({"error":err});
            })
        });
        return promise;
    }
    getMemberByGroupId(gid){
        var Group=this.data.Group;
        var promise=new Promise((resolve,reject)=>{
           Group.findById(gid)
           .then((usersId)=>{
            // /console.log(usersId);
               var objDta=usersId.member;
               resolve(objDta);
           })
           .catch((err)=>{
               reject({"error":err})
           })
        })
        return promise;  
    }
 
}
module.exports=Group;