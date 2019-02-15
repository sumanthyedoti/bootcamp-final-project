
class Detail{

    constructor(data){
     this.data=data;
    }
    insertUserDetail(name,Username,email,password,profilePic,Coverpic,DOB,gender){
        var obj = [{
            Name: name,
            Username: Username,
            email: email,
            password: password,
            profilePic: profilePic,
            Coverpic: Coverpic,
            DOB: DOB,
            gender:gender,
            organization: []
        }]
        var userDetail=this.data.userDetail;
        var promise=new Promise((resolve,reject)=>{
            userDetail.insertMany(obj) 
            .then((data)=>{
              resolve({"success":data[0]})
             }) 
            .catch((err)=>{ 
              reject({"error":err})
            })
        })
        return promise;

    }
    userLogin(uid,pass){
        var userDetail=this.data.userDetail;
        var promise=new Promise((resolve,reject)=>{
            userDetail.find({$or:[{email:uid,password:pass},{Username:uid,password:pass}]})
            .then((data)=>{
                if(data.length===1)
                resolve({"success":data})
                else
                reject({"error":"Wrong id or password"})
            })
            .catch((err)=>{
             reject({"error":err})
            })
        })
        return promise;
    }
    searchMemberOrganization(orgId,searchText){
        var userDetail=this.data.userDetail;
        var organization=this.data.OrganizationDetail;
        var promise=new Promise(async(resolve,reject)=>{
            try{
             var orgData=await organization.findById(orgId)
             var orgMembers;
                  if(orgData.memberIds.length>0)
                     orgMembers=[...orgData.memberIds];
                  else
                     orgMembers=[{Username:'@33232'}]
             console.log(orgMembers);
             var userList= await userDetail.find({
                $or: [
                    { name: { $regex: searchText, $options: 'i' } },
                    { email: { $regex: searchText, $options: 'i' } },
                    { Username: { $regex: searchText, $options: 'i' } }
                  ],
                  $nor:orgMembers
            })
                resolve({"success":userList});
            }
            catch(err){
                resolve({"error":err});
            }
            // userDetail.find({
            //     $or: [
            //         { name: { $regex: searchText, $options: 'i' } },
            //         { email: { $regex: searchText, $options: 'i' } },
            //         { Username: { $regex: searchText, $options: 'i' } }
            //       ],
            //       $nor:[{Username:'ramsahu'},{Username:'ramukaka69'}]
            // })
            // .then((data)=>{
            //     resolve({"success":data})
            // })
            // .catch((err)=>{
            //  reject({"error":err})
            // })
        })
        return promise;
    }
    searchMemberGroup(gId,searchText){
        var userDetail=this.data.userDetail;
        var {Group}=this.data;
      //  var organization=this.data.OrganizationDetail;
        var promise=new Promise(async(resolve,reject)=>{
            try{
             var orgData=await Group.findById(gId,{"member.Username":1})
             var orgMembers;
             console.log(orgData);
                  if(orgData.member.length>0)
                     orgMembers=[...orgData.member];
                  else
                     orgMembers=[{Username:'@33232'}]
             console.log(orgMembers);
             var userList= await userDetail.find({
                $or: [
                    { name: { $regex: searchText, $options: 'i' } },
                    { email: { $regex: searchText, $options: 'i' } },
                    { Username: { $regex: searchText, $options: 'i' } }
                  ],
                  $nor:orgMembers
            })
                resolve({"success":userList});
            }
            catch(err){
                reject({"error":err});
            }
            // userDetail.find({
            //     $or: [
            //         { name: { $regex: searchText, $options: 'i' } },
            //         { email: { $regex: searchText, $options: 'i' } },
            //         { Username: { $regex: searchText, $options: 'i' } }
            //       ],
            //       $nor:[{Username:'ramsahu'},{Username:'ramukaka69'}]
            // })
            // .then((data)=>{
            //     resolve({"success":data})
            // })
            // .catch((err)=>{
            //  reject({"error":err})
            // })
        })
        return promise;
    }
    getNotification(uid){
        var userDetail=this.data.userDetail;
        var promise=new Promise((resolve,reject)=>{
            userDetail.find({Username:uid})
            .then((result)=>{
                resolve({"success":result})
            }) 
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise;
    }
    getTask(uid){
        var Task=this.data.Task;
        var userDetail=this.data.userDetail;
        var promise=new Promise((resolve,reject)=>{
            userDetail.find({Username:uid})
            .then(async(result)=>{
                var task=await Task.find({_id:result[0].taskList})
                resolve({"success":task});
            }) 
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise;
    }
    getEvent(uid){
        var Event=this.data.Event;
        var userDetail=this.data.userDetail;
        var promise=new Promise((resolve,reject)=>{
            userDetail.find({Username:uid})
            .then(async(result)=>{
                console.log(result);
                var task=await Event.find({_id:result[0].eventList})
                resolve({"success":task});
            }) 
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise; 
    }
}

module.exports=Detail;

