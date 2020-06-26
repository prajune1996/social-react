import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {loadPosts} from '../store/actions/PostingActions';
import Img from '../assets/images/avatar.png';
import Mounts from '../assets/images/mounts.jpg';
import Navbar from './Navbar';
export default function Home (props) {
    const dispatch = useDispatch();

    const authResponse = useSelector(state=>state.userAuth.userAuthResponse);
    const postingResponse = useSelector(state=>state.userPosts.userPosts);


    useEffect(()=>{
        dispatch(loadPosts());
    }, [])
    return (
        <div>
            <Navbar />
        <div className="wrapper">
            {postingResponse!=="" && postingResponse!==null && postingResponse.success===true?
            <div className="home">
             {authResponse === "isLoggedIn"? <textarea className="postbox"></textarea> : ''}
             {postingResponse && postingResponse.data.map((post,index) => {
                return( 
                <div className="feed" key={index}> 
                    <div className="feedhead">
                        <img className="userimage" src={Img} alt="userimage" />
                        <div className="details">
                            <div className="username">{post.profilename}</div>
                            <div className="posted">{post.posted}</div>
                        </div>
                    </div>
                    <div className="feedtext">{post.description}</div>
                    <img src={Mounts} className="feedimage" alt="post" />
                </div>         
                )})}
            </div>
            : 'LOADING'}
        </div>
        </div>
    )
}

