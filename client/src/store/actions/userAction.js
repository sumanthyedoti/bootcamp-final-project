import {
	POST_POST,
	GET_POSTS,
} from "./types";

export function postAPostAction(text) {
	return function (dispatch) {
		return new Promise((resolve, reject) => {
			const userData = JSON.parse(localStorage.getItem('userData'));
			const postObj={
				uid: userData._id,
				name: userData.Name,
				postType:"text",
				title:"",
				textData: text,
				images:"",
				Video:""
			}
			fetch(`http://localhost:4000/auth/post`, {
				method: 'POST',
				mode: "cors", 
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify(postObj)
			})
				.then(res => res.json())
				.then((data) =>{
					dispatch({
						type: POST_POST,
						payload: data.success[0],
					})
					resolve(data.success[0]);
				})
				.catch((err) => {
					reject(err)
				});
		})
	}
}

export function	getUserPostsAction(text) {
	return function (dispatch) {
		return new Promise((resolve, reject) => {
			const userData = JSON.parse(localStorage.getItem('userData'));
			fetch(`http://localhost:4000/auth/post`, {
				method: 'GET',
				mode: "cors",
				headers: {
						"Content-Type": "application/json",
						"uid": "5c6018bb89609f3dddd1b78d",
				},
			})
				.then(res => res.json())
				.then((data) =>{
					dispatch({
						type: GET_POSTS,
						payload: data.success,
					})
					resolve(data.success);
				})
				.catch((err) => {
					reject(err)
				});
		})
	}
}

export const signinAction = (email, pwd) => {
  const userBody = {
    "uid":email,
    "pass":pwd
  };
  return function (dispatch) {
		if(localStorage.getItem('userData')){
			return dispatch({
				type:"SIGNIN",
				payload: JSON.parse(localStorage.getItem('userData'))
			})
		}
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
              const user = {
                  username: json.success[0].Username,
                  email: json.success[0].email
              }
							localStorage.setItem('user', JSON.stringify(user))
							localStorage.setItem('userData', JSON.stringify(json.success[0]));
              dispatch({
                  type:"SIGNIN",
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
						if(!json.error){
							dispatch({
								type:"SIGNUP",
								payload: json.success
							})
								resolve(json);
						}else reject(new Error(json.error))
					})
				});
			}
}

