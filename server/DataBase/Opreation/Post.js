class Post{
    constructor(post){
        this.data=post;
    }
    
    InsertNewPost(PostBy,PostType,Title,TextData,Images,Video){
       var Post=this.data;
       var obj=[{
        PostBy:PostBy,
        likedBy:[],
        comments:[],
        PostType:PostType,
        Share:[],
        Title:Title,
        TextData:TextData,
        Images:Images,
        Video:Video,
       }];
       var promise=new Promise((resolve,reject)=>{
           Post.insertMany(obj)
           .then((result)=>{
              resolve({"success":result});
           })
           .catch((err)=>{
              reject({"error":err});   
           })
       })
       return promise;
    }
    getPostsOfUser(uid){
        var Post=this.data;
        var promise=new Promise((resolve,reject)=>{
            Post.find({"PostBy._id": uid}) 
            .then((result)=>{
                resolve({"success":result});
            })
            .catch((err)=>{
                reject({"error":err});   
            })
        })
        return promise;
    }

    likePost(pid, likedBy) {
        var Post=this.data;
        var promise=new Promise((resolve,reject)=>{
            Post.updateOne({"_id": pid}, {$inc: {like: 1}, $addToSet: {likedBy: likedBy}})
            .then((result)=>{
                resolve({"success":result});
            })
            .catch((err)=>{
                reject({"error":err});   
            })
        })
        return promise;
    }

    dislikePost(pid, dislikedBy) {
        var Post=this.data;
        var promise=new Promise((resolve,reject)=>{
            Post.updateOne({"_id": pid}, {$inc: {like: -1}, $pull: {likedBy: dislikedBy}})
            .then((result)=>{
                resolve({"success":result});
            })
            .catch((err)=>{
                reject({"error":err});   
            })
        })
        return promise;
    }
}
module.exports=Post;