class Organization{
    constructor(org){
        this.data=org;
    }
    insertNewOrganization(Name,organisationUniqueName,Address,LogoPic,coverPic,Organisation,ETD_Date,FounderDetails){
        var obj={
            Name:Name,
            organisationUniqueName:organisationUniqueName,
            Address:Address,
            LogoPic:LogoPic,
            coverPic:coverPic,
            Organisation:Organisation,
            ETD_Date:ETD_Date,
            FounderDetails:FounderDetails
        }
        var organization=this.data;
        var promise=new Promise((resolve,reject)=>{
            organization.insertMany(obj)
            .then((data)=>{
               resolve({"success":data[0]});
            })
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise;
 
    }
    insertNewStaff(org_id,uid){
        var organization=this.data;
        var promise=new Promise((resolve,reject)=>{
            organization.update({_id:org_id},{ $addToSet: { "staff": { _id: uid } } })
            .then((data)=>{
                if (data.nModified > 0)
               resolve({"success":"staff added successfuly"});
                else
                 reject({"error":"staff already added"});
            })
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise;
    }
    insertNewMember(org_id,uid){
        var organization=this.data;
        var promise=new Promise((resolve,reject)=>{
            organization.update({_id:org_id},{ $addToSet: { "member": { _id: uid } } })
            .then((data)=>{
                if (data.nModified > 0)
               resolve({"success":"member added successfuly"});
                else
                 reject({"error":"member already added"});
            })
            .catch((err)=>{
                reject({"error":err});
            })
        })
        return promise;
    }
}
module.exports=Organization;