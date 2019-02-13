import React from 'react';

class AddMemberOrg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            members:[],
            searchKey:''
        }
    }
    componentDidMount(){
        fetch(`http://localhost:4000/search/${this.props.orgId}?searchKey=${this.state.searchKey}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    render(){
        return(
             <div></div> 
        )
    }
}
AddMemberOrg.defaultProps={
    orgId:'5c641cbe9da6df34ab2baf51',
    name:"ram7star"
}
export default AddMemberOrg;