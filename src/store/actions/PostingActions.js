import {Postshow} from '../../services/PostingService';


export const loadPosts = () =>
{
    return(dispatch) => 
    {
        dispatch({type:'LOADING'});

        Postshow().then((res)=>
        {
            if(res.hasOwnProperty('success') && res.success===true)
            {
                dispatch({type:'POST_LOADING_SUCCESS',res})
                
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
