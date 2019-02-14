import {
	POST_POST,
  GET_POSTS,
  LIKE_POST,
  DISLIKE_POST
} from "./types";
const userData = JSON.parse(localStorage.getItem('userData'));

export function postAPostAction(text) {
	return function (dispatch) {
		return new Promise((resolve, reject) => {
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
          console.log(data)
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
						"uid": userData._id,
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


export function likePost(postId) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:4000/auth/Post/like`, {
        method: 'POST',
        mode: "cors", 
        headers: {
            "Content-Type": "application/json",
            "username": localStorage.getItem('username'),
        },
        body: JSON.stringify({
          postId: postId,
          likedBy: userData.Username
        })
      })
        .then((res) =>{
          dispatch({
            type: LIKE_POST,
            payload: postId,
          })
          resolve(res);
        })
        .catch((err) => {
          reject(err)
        });
    })
  }
}

export function dislikePost(postId) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:4000/auth/Post/dislike`, {
        method: 'POST',
        mode: "cors", 
        headers: {
            "Content-Type": "application/json",
            "username": localStorage.getItem('username'),
        },
        body: JSON.stringify({
          postId: postId,
          dislikedBy: userData.Username
        })
      })
        .then((res) =>{
          dispatch({
            type: DISLIKE_POST,
            payload: postId,
          })
          resolve(res);
        })
        .catch((err) => {
          reject(err)
        });
    })
  }
}