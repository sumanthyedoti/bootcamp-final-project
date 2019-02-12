import { POST_POST ,SIGNIN,SIGNUP} from "./types";
// import {  } from "./types";
// export function postPostAction(username) {
//   return (dispatch)=>({
//     type: POST_POST,
//     payload: {}
//   })
// }

export const signinAction = (email, pwd) => {
  const userBody = {
    "uid":email,
    "pass":pwd
  };
  return function (dispatch) {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:4000/login/", {
            method: "POST",
            mode:"cors",
            headers: {
              "Content-Type": "application/json"
            },
            
            body: JSON.stringify(userBody)
          })
          .then((res)=>{
             return res.json()
          })
          .then(json=>{
              if(!json.error){
              console.log(json)
              const user = {
                  username: json.success[0].Username,
                  email: json.success[0].email
              }
              console.log(user)
              localStorage.setItem('user', user)
              dispatch({
                  type:SIGNIN,
                  payload: json.success[0]
              })
              resolve(json);
            }
            else{
                  reject(new Error(json.error))
            } 
          })
      });
    }
}

export const signupAction=(Name,Username,Email,Password,Gender,BirthDate)=>{
    console.log('hiiii')
    let userbody = {
        "name":Name,
        "username":Username,
        "profilePic":"",
        "email":Email,
        "pass":Password,
        "coverPic":"",
        "gender":Gender,
        "DOB":BirthDate
        
    }
    return function(dispatch) {
        //  debugger;
        console.log(JSON.stringify(userbody))
        return new Promise((resolve, reject) => {
            fetch("http://localhost:4000/signUp/", {
                method: "POST",
                mode:"cors",
                headers: {
                  "Content-Type": "application/json"
                },
                
                body: JSON.stringify(userbody)
              })
              .then((res)=>{
                 return res.json()
              })
              .then(json=>{
                  console.log(json)
                if(!json.error){
                    dispatch({
                        type:SIGNUP,
                        payload: json.success
                    })
                      resolve(json);
                }else reject(new Error(json.error))
              })
          });
        }
}



 //   .then(json=>{
            //       if(!json.error){
            //       console.log(json)
            //       const user = {
            //           username: json.success[0].Username,
            //           email: json.success[0].email
            //       }
            //       console.log(user)
            //       localStorage.setItem('user', user)
                //   dispatch({
                //       type:"SIGNIN",
                //       payload: json.success[0]
                //   })
            //       resolve(json);
            //     }
            //     else{
            //           reject(new Error(json.error))
            //     } 
            //   })