import React,{useEffect} from 'react'
import styled from 'styled-components';
import {useSelector} from 'react-redux';

export default function Home (props) {
    const Wrapper = styled.div`
    margin-top:5em;
    `
    const Home = styled.div`
    width:60%;
    margin:auto;
    `
    const PostBox = styled.textarea`
    width:50%;
    height:100px;
    border-radius:4px;
    `

    const authResponse = useSelector(state=>state.userAuth.userAuthResponse);
    // useEffect(()=>
    // console.log(authResponse)
    // )
    return (
        <Wrapper>
            <Home>
                {authResponse === "isLoggedIn"? <PostBox></PostBox> : ''}
            </Home>
        </Wrapper>
    )
}

