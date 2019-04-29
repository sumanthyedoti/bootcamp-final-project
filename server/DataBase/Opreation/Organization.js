
class Organization{
    constructor(org){
        this.data=org;
    }
    insertNewOrganization(Name,orgId,Address,LogoPic,coverPic,Organisation,etdDate,FounderDetails,about){
        var obj=[{
            name:Name,
            orgId:orgId,
            address:Address,
            logoPic:LogoPic,
            coverPic:coverPic,
            organisation:Organisation,
            etdDate:etdDate,
            founderDetails:FounderDetails,
            about:about
        }];
        console.log("obj")
        console.log(obj);
        var organization=this.data.OrganizationDetail;
        console.log(organization);
        var promise=new Promise((resolve,reject)=>{
            organization.insertMany(obj)
            .then((data)=>{
               resolve({"success":data[0]});
            })
            .catch((err)=>{
                console.log(err);
                reject({"error":err});
            })
            // try{
            //     var data=organization.
            // }
        })
        return promise;
 
    }
    insertNewStaff(orgId,uid){
        var organization=this.data.OrganizationDetail;
        var promise=new Promise((resolve,reject)=>{
            organization.findById(orgId)
            .then((data)=>{
                var obj=[];
                obj=data.member.filter((d)=>{
                     return (d["_id"]===uid)
                })
                if(obj.length==1){
                    reject({"error":"staff already inserted"})
                }
                else{
                    organization.update({_id:orgId},{ $addToSet: { "member": { _id: uid,memberType:"staff",join:false} } })
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
    insertNewMember(orgId,uid,memberType,msg){
        var organization=this.data.OrganizationDetail;
        var userDetail=this.data.userDetail;
        var promise=new Promise(async(resolve,reject)=>{
            try{
                var users={Username:uid};
                var usersDetail=await userDetail.find(users,{Name:1,_id:1,Username:1,email:1});
                var udata=JSON.parse(JSON.stringify(usersDetail[0]));
                udata["join"]=false;
                udata["memberType"]=memberType;
               // udate["addDate"]=new Date();
               console.log(udata);
                if(usersDetail.length>0){
                      var data=await organization.update({_id:orgId},{$addToSet:{"memberIds":users}})
                      console.log(data);
                      if(data.nModified>0){
                        var data1=await organization.update({_id:orgId},{$addToSet:{"members":udata}})
                          if(data1.nModified>0){ 
                              var notification={
                                  msg:msg,
                                  link:'',
                                  crreateDate:new Date(),
                                  read:false
                              };
                            await userDetail.update({Username:uid},{$addToSet:{"notification":notification}})
                            resolve({"success":"member added successfuly"})
                          }
                           else{ 
                          await organization.update({_id:orgId},{$pull:{"memberIds":users}})
                          reject({"error":"failed due to server not responce"});  
                           }

                      }
                      else{
                      reject({"error":"member already exist"});
                      }
                }
                else{
                    reject({"error":"username is not correct"})
                }
                resolve({"success":userData})
            }
            catch(err){
                reject({"error":err})
            }
        })
        return promise;
    }
    deleteMember(orgId,uid){
        var organization=this.data.OrganizationDetail;
        var promise=new Promise(async(resolve,reject)=>{
            try{
               var dmodifi=  await organization.update({_id:orgId},{$pull:{"memberIds":{Username:uid}}})
               if(dmodifi.nModified>0){
                 var dmodifi1= await organization.update({_id:orgId},{$pull:{"members":{Username:uid}}})
                   if(dmodifi1.nModified>0){
                       resolve({"success":"member deleted success"})
                   }
                   else{
                       reject({"error":"error1"})
                   }
               }
               else{
                reject({"error":"error2"})
               }
            }
            catch(err){
              reject({"error":err})
            }
            // .then((data)=>{
            //     if (data.nModified > 0)
            //     resolve({"success":"member deleted successfuly"});
            //      else
            //       reject({"error":"member is not added"});
            // })
            // .catch((err)=>{
            //     reject({"error":err});
            // })

        });
        return promise;
    }
    getAllMember(orgId){
        console.log("ram");
        var organization=this.data.OrganizationDetail;
        var promise=new Promise((resolve,reject)=>{
           organization.findById(orgId)
           .then((usersId)=>{
            // /console.log(usersId);
               var objDta=usersId.members;
               resolve(objDta);
           })
           .catch((err)=>{
               reject({"error":err})
           })
        })
        return promise;

    }
    joinLinkConformation(orgId,uid){
        var organization=this.data.OrganizationDetail;
        var promise=new Promise(async(resolve,reject)=>{
            try{
                 var odata=await organization.findById(orgId);
                 var mdata=odata.members.filter(d=>d["_id"]=uid);
                 if(!mdata[0].join){
                     console.log(mdata[0]);
                        var udata=await organization.update({_id:orgId},{$pull:{"members":{Username:mdata[0].Username}}});
                        mdata[0].join=true;
                            if(udata.nModified>0){
                                 var mdata=await organization.update({_id:orgId},{$addToSet:{"members":mdata[0]}});
                                 if(mdata.nModified>0){
                                     resolve({"success":"join to organization"})
                                 }
                                 else{
                                    reject({"error":"server error1"})
                               }
                                 
                            }
                            else{
                                 reject({"error":"server error2"})
                            }
                            
                  }
                  else{
                    reject({"error":"server error3"})
                  }

                 }

            catch(err){
                reject({"error":err})
            }
        })
        return promise;
    }
    getOraganisation(orgId){
        var organization=this.data.OrganizationDetail;
        var promise=new Promise((resolve,reject)=>{
           organization.findById(orgId)
           .then((org)=>{
               resolve(org);
           })
           .catch((err)=>{
               reject({"error":err})
           })
        })
        return promise;

    }
  
 
}
module.exports=Organization;