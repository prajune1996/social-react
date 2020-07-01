import {Postshow} from '../../services/PostingService';


export const loadPosts = () =>
{
    return(dispatch) => 
    {
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});

        Postshow().then((res)=>
        {
            if(res.hasOwnProperty('success') && res.success===true)
            {
                setTimeout(() => {
                dispatch({type:'POST_LOADING_SUCCESS',res})
                dispatch({type:'LOGIN_SUCCESS',res})
                }, 500);
                
            }
            else if(res.hasOwnProperty('success') && res.success===false)
            {
                dispatch({type:'POST_LOADING_ERROR',res})
            }
        },
        error=>
        {
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
}
