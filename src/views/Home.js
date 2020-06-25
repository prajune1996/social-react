import React,{useEffect} from 'react'
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import Img from '../assets/images/avatar.png';
import Mounts from '../assets/images/mounts.jpg';
export default function Home (props) {
    const Wrapper = styled.div`
    margin-top:5em;
    `
    const Home = styled.div`
    width:40%;
    margin:auto;
    `
    const PostBox = styled.textarea`
    width:50%;
    height:100px;
    border-radius:4px;
    `
    const Feed = styled.div`
    border-radius:6px;
    box-shadow:0 1px 2px rgba(0,0,0,0.2);
    margin-bottom:10px;
    background:white;
    `
    const FeedHead = styled.div`
    display:flex;
    padding:10px;
    `
    const UserImage = styled.img`
    width:7%;
    height:7%;
    border-radius:50%;
    `
    const Details = styled.div`
    margin-left:1em;
    `
    const UserName = styled.h3`
    margin-top:0px;
    margin-bottom:0px;
    font-size:18px;
    `
    const Posted = styled.p`
    margin-top:0px;
    text-align:left;
    font-size:12px;

    `
    const FeedText = styled.p`
    text-align:left;
    margin-top:0px;
    padding-left:12px;
    padding-right:12px;
    `
    const FeedImage = styled.img`
    width:100%;
    margin-bottom:0px;
    `
    const Like = styled.button`
    width:100%;
    width:50%;
    margin-top:0px;
    `

    const authResponse = useSelector(state=>state.userAuth.userAuthResponse);
    // useEffect(()=>
    // console.log(authResponse)
    // )
    return (
        <Wrapper>
            <Home>
                {authResponse === "isLoggedIn"? <PostBox></PostBox> : ''}
                <Feed>
                    <FeedHead>
                        <UserImage src={Img} />
                        <Details>
                        <UserName>Praveen Gupta</UserName>
                        <Posted>5 mins ago</Posted>
                        </Details>
                    </FeedHead>
                    <FeedText>This is a very beautiful post.This is a very beautiful post.This is a very beautiful post.This is a very beautiful post.</FeedText>
                    <FeedImage src={Mounts}></FeedImage>
                    {/* <Like>Like</Like> */}
                </Feed>


            </Home>
        </Wrapper>
    )
}

