import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {loadUserProfileActions} from '../store/actions/ProfileActions';

export default function Profileview() {
    const dispatch = useDispatch();
    
    const profileResponse = useSelector(state=>state.userProfile.userProfile);

    useEffect(()=>{
        dispatch(loadUserProfileActions());
    }, [])
    return (
        <div>
            {profileResponse!="" && profileResponse!=null && profileResponse.success==true?
            <div className="wrapper" style={{marginTop:1+'em'}}>
                <div className="home" >
            <div className="feed" > 
                <div className="feedhead">
                    <div className="details w-100">
                        <div className="username text-left">{profileResponse.data.name}</div>
                        <div className="posted text-left">{profileResponse.data.email}</div>
                        <div className="posted text-left">User since {profileResponse.data.created_at}</div>
                    </div>
                </div>
                <div className="feedtext"></div>
            </div>  
            </div>
            </div> 
            :
            <div className="feeds" >
            <SkeletonTheme color="#bcbcbc" highlightColor="#989898">
            <p>
            <Skeleton count={1} height={150}  />
            </p>
            </SkeletonTheme>    
            <SkeletonTheme color="#bcbcbc" highlightColor="#989898">
            <p>
            <Skeleton count={1} height={150}  />
            </p>
            </SkeletonTheme>
            <SkeletonTheme color="#bcbcbc" highlightColor="#989898">
            <p>
            <Skeleton count={1} height={150}  />
            </p>
            </SkeletonTheme>
            </div> 
            }
        </div>
    )
}

