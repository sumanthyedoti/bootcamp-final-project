import { CREATE_NEW } from "../actions/types";

export const newOrgAction = (textArea,orgName,orgAddress,orgUniqueName,selectedDate) => {
  // console.log("hiii");
  var orgDetails = {
    name: orgName,
    orgId: orgUniqueName,
    address: orgAddress,
    logoPic: "",
    coverPic: "",
    organisation: "",
    etdDate: '2017-9-23',
    founderDetails: "",
    about:textArea
  };


  return function(dispatch) {
    return new Promise((resolve, reject) => {
      // debugger
      fetch("http://localhost:4000/auth/organization/", {
        method: "POST",
         mode: "cors",  
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(orgDetails)
      })
        .then((res) => 
        
        {debugger;
          return res.json();
        })
        .then(json => {
             debugger;
                 if(!json.error){
                   console.log(json.success)
                  //  localStorage.setItem('user', user)
                   dispatch({
                       type:CREATE_NEW,
                       payload: json.success
                   })
                   resolve(json);
                 }else reject(new Error(json.error.message))
        });
      //       .then(json=>{
      //           if(!json.error){
      //           console.log(json)
      //           const user = {
      //               username: json.success[0].Username,
      //               email: json.success[0].email
      //           }
      //           console.log(user)
                // localStorage.setItem('user', user)
                // dispatch({
                //     type:SIGNIN,
                //     payload: json.success[0]
                // })
                // resolve(json);
      //         }
      //         else{
      //               reject(new Error(json.error))
      //         }
      //       })
    });
  };
};
