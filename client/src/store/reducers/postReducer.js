import  {POST_POST, GET_POSTS, LIKE_POST, DISLIKE_POST} from '../actions/types';

const initialState = {
  posts: [],
}

export function postReducer (state=initialState, {type, payload}) {
  console.log(payload)
  const userData = JSON.parse(localStorage.getItem('userData'));    
  switch(type){
    case POST_POST:
      payload.isLiked = payload.likedBy.indexOf(userData.Username) !== -1 ? true : false;
      return {
        ...state,
        posts: [...state.posts, payload],
      }
    case GET_POSTS:
      let payloadX = [];
      if(payload){
        payloadX = payload.map(post=> {
          post.isLiked = post.likedBy.indexOf(userData.Username) !== -1 ? true : false;
          return post;
        })
      }
      return {
        ...state,
        posts: [...state.posts, ...payloadX],
      }
    case LIKE_POST: 
      console.log(state.posts)
      let posts = state.posts.map(post => {
        console.log(post)
        if(post._id===payload) {
          post.like = post.like+1;
          post.isLiked = true;
        }
        return post;
      })
      return {
        ...state,
        posts: posts,
      }
    case DISLIKE_POST: 
      posts = state.posts.map(post => {
        console.log(post)
        if(post._id===payload) {
          post.like = post.like-1;
          post.isLiked = false;
        }
        return post;
      })
      console.log('ll', posts)
      return {
        ...state,
        posts: posts,
      }
    default: 
      return state;
  }
}

