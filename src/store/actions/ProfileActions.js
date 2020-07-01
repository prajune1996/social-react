import {LoadProfile} from '../../services/ProfileService'

export const loadUserProfileActions = () =>
{
    return(dispatch) => 
    {
        dispatch({type:'LOADING'});

        LoadProfile().then((res)=>
        {
            
            if(res.hasOwnProperty('success') && res.success==true)
            {
                setTimeout(() => {
                    dispatch({type:'LOAD_PROFILE_SUCCESS',res})
                }, 1000);
            }
            else if(res.hasOwnProperty('success') && res.success==false)
            {
                dispatch({type:'LOAD_PROFILE_ERROR',res})
            }
        },
        error=>
        {
            dispatch({type:'CODE_ERROR',error});
        }
        )
    }
}