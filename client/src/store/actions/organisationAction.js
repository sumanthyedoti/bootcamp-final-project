import { CREATE_NEW } from "../actions/types";

export const newOrgAction = (textArea,orgName,orgAddress,selectedDate) => {
  // console.log("hiii");
  const orgDetails = {
    Name: "firstOrg",
    organisationUniqueName: orgName,
    Address: orgAddress,
    LogoPic: "",
    coverPic: "",
    Organisation: "",
    ETD_Date: selectedDate,
    FounderDetails: {},
    about:textArea
  };
  // debugger;
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:4000/auth/organization/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(orgDetails)
      })
        .then(res => {
          return res.json();
        })
        .then(json => {
                 if(!json.error){
                   console.log(json.success)
                  //  localStorage.setItem('user', user)
                   dispatch({
                       type:CREATE_NEW,
                       payload: json.success
                   })
                   resolve(json);
                 }else reject(new Error(json.error))
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
