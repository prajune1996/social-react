import React from 'react';

const initState = {
    userAuthResponse:""
}

const UserAuthReducer = (state=initState, action) =>
{
    switch(action.type)
    {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                userAuthResponse:""
            }
        case 'LOADING':      
            return {
                ...state,
                userAuthResponse:
                <div dangerouslySetInnerHTML={{__html:'<div class="alert alert-primary add-padding">'+'Loading'+'</div>'}}></div>
            }
        case 'SIGNUP_SUCCESS':
          return {
              ...state,
              userAuthResponse:action.res
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                userAuthResponse:action.res
            }
        case 'LOGIN_SUCCESS':
                return {
                    ...state,
                    userAuthResponse:
                    <div dangerouslySetInnerHTML={{__html:'<div class="alert alert-success add-padding">'+'Redirecting'+'</div>'}}></div>
                }
        case 'LOGIN_ERROR':
                  return {
                      ...state,
                      userAuthResponse:action.res
                  }
        case 'TOO_MANY_REQUESTS':
                  return {
                      ...state,
                      userAuthResponse:'Please try after 5 minutes'
                  }
        case 'CODE_ERROR':
                return {
                    ...state,
                    userAuthResponse:'Something went wrong. Please refresh your browser'
            }
      default: return state;
    }
}
export default UserAuthReducer;
