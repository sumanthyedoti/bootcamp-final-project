import React from 'react'

class OrganizationTask extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    componentDidMount(){
        var userData= [{"Username": "ram2"},{"Username": "ram1"}];
        var bodydata={title:"javascript Question",
                    topics:"javascript",
                    task:"do event listener",
                    dueDate:"2019-02-18",
                    gId:"5c64dfc5ca90d807445d8dd7",
                    uid:"vishal",
                    member:userData,
                    msg:"new Task is assign by group"
        }

        
        fetch("http://localhost:4000/auth/task",{
            "method":"post",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(bodydata)
        })
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            debugger;
            console.log(err)
        });
    }
    render(){
        return(<div>Ram</div>)
    }
}

export default OrganizationTask;