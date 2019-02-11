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
}
module.exports=Post;