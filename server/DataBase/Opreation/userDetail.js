
class Detail{

    constructor(data){
     this.data=data;
    }
    insertUserDetail(name,Username,email,password,profilePic,Coverpic,DOB){
        var obj = [{
            Name: name,
            Username: Username,
            email: email,
            password: password,
            profilePic: profilePic,
            Coverpic: Coverpic,
            DOB: DOB,
            organization: []
        }]
        var userDetail=this.data;
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
        var userDetail=this.data;
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
}

module.exports=Detail;

