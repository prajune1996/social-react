import React,{useEffect} from 'react';
import {useFormFields} from '../helpers/hooksFormInput';
import '../styles/register.css';
import {displayErrorMessages} from '../helpers/displayErr';
import {UserLoginAction,clearAuthState} from '../store/actions/AuthActions';
import {useDispatch, useSelector} from 'react-redux';

export default function Login (props) {
    const dispatch = useDispatch();
    const authResponse = useSelector(state=>state.userAuth.userAuthResponse)

    const [fields,handleFieldChange] = useFormFields({
        email:'',
        password:'',
    });

    const UserLogin = (e) => {
        e.preventDefault();
        clearAuthDiv();
        if(fields.email==='')
        {
            alert('Email is missing')
            return;
        }
        else if(fields.password==='')
        {
            alert('Password is missing')
            return;
        }
        dispatch(UserLoginAction(fields,props.props))
    } 

    const clearAuthDiv = () =>
    {
        let authErr = document.querySelector("#authErr");
        authErr.innerHTML = "";
    }

    const successMessage = (successMessage) =>
    {
        return <div dangerouslySetInnerHTML={{__html:'<div class="alert alert-success add-padding">'+successMessage+'</div>'}}></div>
    }

    useEffect(() => {
        dispatch(clearAuthState());
        
}, )

    return (
        <div className="wrapper">
        <h3 className="authheader">Sign in</h3>
        <p className="below">Login now and start your work!</p>
        <div id="authErr"></div>
        <div id="authResponse">
                        {
                             authResponse !=="" && authResponse.success===true?
                             successMessage(authResponse.message)
                             :
                             authResponse.success===false?
                             displayErrorMessages(authResponse.error,document.querySelector('#authErr'))
                             :
                             authResponse
                         }
        </div>
        <form className="loginform" onSubmit={UserLogin}>
        <div className="inputgroup">
            <p className="inputhead">Email Address</p>
            <input className="input" type="email" placeholder="Enter your email" id="email" value={fields.email} onChange={handleFieldChange} />
        </div>
        <div className="inputgroup">
            <p className="inputhead">Password</p>
            <input className="input" type="password" placeholder="Enter password" id="password" value={fields.password} onChange={handleFieldChange} />
        </div>
        <div className="inputgroup">
            <button className="submit" >Login</button>
        </div>
        <a className="route" href="/register">create an account today?</a>
        <p style={{marginTop:'0px',marginBottom:'0px'}}>OR</p>
        <a className="routeblack" href="/home">check feeds as guest</a>
        </form>
        </div>
  
    )
}