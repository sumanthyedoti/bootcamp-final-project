function random(){
    //var inp=document.getElementById("");
    var inp="7"
    var cinp=parseInt(inp);
    var str="";
    for(i=0;i<cinp;i++){
        var randomnumber=parseInt(Math.random()*100);
        var num;
        if(randomnumber>122){
          num=122;
        }
        else if(randomnumber>=91 && randomnumber<=96){
            num=90;
        }
        else if(randomnumber>=58 && randomnumber<=64){
            num=65
        }
        else if(randomnumber<=47){
            num=48;
        }
        else{
            num=randomnumber;
        }
        str=str+String.fromCharCode(num);

    }
    console.log(str);
}
random();