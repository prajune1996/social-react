const initState = {
    userProfile:""
}

const ProfileReducer = (state=initState, action) =>
{
    switch(action.type)
    {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                userProfile:""
            }
        case 'LOADING':      
            return {
                ...state,
                userProfile:'loading'
            }
        case 'LOAD_PROFILE_SUCCESS':
                return {
                    ...state,
                    userProfile:action.res
                }
        case 'LOAD_PROFILE_ERROR':
                  return {
                      ...state,
                      userProfile:action.res
                  }
        case 'CODE_ERROR':
                return {
                    ...state,
                userProfile:'Something went wrong. Please refresh your browser'
            }
      default: return state;
    }
}
export default ProfileReducer;
