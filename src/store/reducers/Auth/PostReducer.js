const initState = {
    userPosts:"",
}

const PostReducer = (state=initState, action)=>
{
      switch(action.type)
      {
          case 'LOADING':      
                return {
                    ...state,
                    userPosts:'loading...'
                }
          case 'POST_LOADING_SUCCESS':
              return {
                  ...state,
                  userPosts:action.res
              }
          case 'POST_LOADING_ERROR':
                return {
                    ...state,
                    userPosts:action.res
                }
          case 'CODE_ERROR':
                    return {
                        ...state,
                        userPosts:'Something went wrong. Please refresh your browser'
                    }
          default: return state;
      }
}

export default PostReducer;