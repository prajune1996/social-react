import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {loadPosts} from '../store/actions/PostingActions';
import Img from '../assets/images/avatar.png';
import Mounts from '../assets/images/mounts.jpg';
import Navbar from './Navbar';
import {ReactComponent as GalleryIcon} from '../assets/icons/gallery.svg';
import {ReactComponent as SendIcon} from '../assets/icons/send.svg';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import '../styles/home.css';
import {loadUserProfileActions} from '../store/actions/ProfileActions';
import moment from 'moment'

export default function Home () {
    const dispatch = useDispatch();

    // const authResponse = useSelector(state=>state.userAuth.userAuthResponse);
    const postingResponse = useSelector(state=>state.userPosts.userPosts);
    const profileResponse = useSelector(state=>state.userProfile.userProfile);

    useEffect(()=>{
        dispatch(loadPosts());
        dispatch(loadUserProfileActions());
    }, [])
    return (
        <div>
            <Navbar />
        <div className="wrapper" style={{marginTop:1+'em'}}>
            {postingResponse!=="" && postingResponse!==null && postingResponse.success===true?
            <div className="home">

             {profileResponse !== "loading"? 
             <div>
             <h3 className="postheader">Create a post</h3>
             <textarea className="postbox" style={{resize: 'none',fontFamily:'CircularBook'}} placeholder="Write Something..."></textarea> 
             <div className="inputpost text-right ml-auto">
             <button className="imagebtn icon-button" type="submit" ><GalleryIcon />&nbsp;Image</button>
             <button className="submit icon-button" type="submit"><SendIcon />&nbsp;Post</button>
             </div>
             </div>
             : ''}
            <h3 className="postheader">All Feeds</h3>
            <div className="buttongroup">
                <button className="leftbtn " type="submit">Latest Feed</button>
                <button className="rightbtn " type="submit">Most Popular</button>
            </div>
             {postingResponse && postingResponse.data.map((post,index) => {
                return( 
                <div className="feed" key={index}> 
                    <div className="feedhead">
                        <img className="userimage" src={Img} alt="userimage" />
                        <div className="details">
                            <div className="username">{post.profilename}</div>
                            <div className="posted">{moment(post.posted).startOf().fromNow()}</div>
                        </div>
                    </div>
                    <div className="feedtext">{post.description}</div>
                    <img src={Mounts} className="feedimage" alt="post" />
                </div>         
                )})}
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
        
        </div>
    )
}

