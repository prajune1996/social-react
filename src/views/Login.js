import React from 'react'
import styled from 'styled-components';

export default function Login (props) {
    const Wrapper = styled.div`
    margin-top:5em;
    `
    const AuthHeader = styled.h3`
    font-family: CircularBook;
    font-size:30px;
    font-weight:100;
    margin-bottom:0px;
    `
    const Below = styled.p`
    font-family: CircularBook;
    font-size:18px;
    font-weight:100;
    margin-top: 10px;
    `
    const LoginForm = styled.form`
    margin-top:5em;
    `
    const InputGroup = styled.div`
    width: 20em;
    margin:auto;
    `
    const Inputhead = styled.p`
    font-family: CircularBook;
    text-align:left;
    margin-left:0.5em;
    margin-bottom:10px;
    `
    const Input = styled.input`
    width:300px;
    height:30px;
    border-radius:6px;
    outline:none;
    border:1px solid #bcbcbc;
    padding:5px 5px;
    font-size:20px;
    `
    const Submit = styled.button`
    cursor:pointer;
    border:none;
    outline:none;
    background:#1fae49;
    color:#fff;
    font-family: CircularBook;
    width:100px;
    border-radius:6px;
    height:40px;
    font-size:18px;
    margin-top:15px;
    margin-bottom:10px;
    `
    const Route = styled.a`
    font-family: CircularBook;
    cursor:pointer;
    text-decoration:none;
    color:#1fae49;
    `
    return (
        <Wrapper>
            <AuthHeader>Sign in</AuthHeader>
            <Below>Login now and start your work!</Below>
            <LoginForm>
            <InputGroup>
            <Inputhead>Email Address</Inputhead>
            <Input placeholder="Enter your email"></Input>
            </InputGroup>
            <InputGroup>
            <Inputhead>Password</Inputhead>
            <Input placeholder="******************"></Input>
            </InputGroup>
            <InputGroup>
            <Submit>Login</Submit>
            </InputGroup>
            <Route href="/register">or create an account today?</Route>
            <br />
            <Route href="/home">or check feeds as guest</Route>
            </LoginForm>
        </Wrapper>
    )
}