var express =   require("express");
var Router  =   express.Router();
var fs=require('fs');
Router.post('/uploadImage',function(req,res){
    console.log(req.body["Content-Type"])
    let uploadFile = req.body["Content-Type"];
    const fileName = req.body.filename;
    fs.writeFileSync("ram.png",uploadFile,"utf8");
    res.send(req.body);

});

module.exports=Router;
