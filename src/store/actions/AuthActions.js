import {SignUpService,LoginUser} from '../../services/AuthService'

export const signUpAction = (credentials,props) =>
{
    return(dispatch) =>
    {
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});
        
        SignUpService(credentials).then((res)=>
        {
            if(res.hasOwnProperty('success') && res.success===true)
            {
                dispatch({type:'SIGNUP_SUCCESS',res})
                setTimeout(() => {
                    props.history.push('/login');
                }, 1000);
            }
            else if(res.hasOwnProperty('success') && res.success===false)
            {
                dispatch({type:'SIGNUP_ERROR',res})
            }
        },
        error=>
        {
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
}

export const UserLoginAction = (credentials,props) =>
{
    return (dispatch) =>
    {
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});
        
    LoginUser(credentials).then((res) => 
    {
        if(res.hasOwnProperty('success') && res.success===true)
        {
            localStorage.setItem('user-token',res.token)
            dispatch({type:'LOGIN_SUCCESS'});
            setTimeout(() => {
                props.history.push('/home');
            }, 1000);

        }
        else if(res.hasOwnProperty('success') && res.success===false)
        {
            dispatch({type:'LOGIN_ERROR',res})
        }
        else if(res.status === 429)
        {
            dispatch({type:'TOO_MANY_REQUESTS',res})
        }
    })
    }
}

export const clearAuthState = () => {
    return (dispatch) =>
    {
        dispatch({type:'RESTART_AUTH_RESPONSE'})
    }
}