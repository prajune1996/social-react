import React from 'react';
import {useFormFields} from '../helpers/hooksFormInput';
import '../styles/register.css';
import {useDispatch, useSelector} from 'react-redux';
import {displayErrorMessages} from '../helpers/displayErr';
import {signUpAction} from '../store/actions/AuthActions';


export default function Register (props) {

    const dispatch = useDispatch();
    const authResponse = useSelector(state=>state.userAuth.userAuthResponse)

    const [fields,handleFieldChange] = useFormFields({
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    });

    const UserRegister = (e) => {
        e.preventDefault();
        clearAuthDiv();
        const passwordMatch = checkPasswordMatch(fields.password,fields.password_confirmation);
        if(fields.name==='')
        {
            alert('Name is missing')
            return;
        }
        else if(fields.email==='')
        {
            alert('Email is missing')
            return;
        }
        else if(fields.password==='')
        {
            alert('Password is missing')
            return;
        }
        else if(fields.password_confirmation==='')
        {
            alert('Please confirm password')
            return;
        }
        else if(passwordMatch===true)
        {
            alert('Password do not match. Please check again')
            return;
        }
        dispatch(signUpAction(fields,props.props));
    } 

    const checkPasswordMatch = (password,password_confirmation)=>
    {
    return password!==password_confirmation?true:false;
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

    return (
        <div className="wrapper">
        <h3 className="authheader">Register</h3>
        <p className="below">Create an account with us today!</p>
        <div id="authErr"></div>
        <div id="authResponse">
                         {
                             authResponse !=="" && authResponse.success ===true?
                             successMessage(authResponse.message)
                             :
                             authResponse.success ===false?
                             displayErrorMessages(authResponse.error,document.querySelector('#authErr'))
                             :
                             authResponse
                         }
        </div>
        <form className="loginform" onSubmit={UserRegister}>
        <div className="inputgroup">
            <p className="inputhead">Name</p>
            <input className="input" type="text" placeholder="Enter your name" id="name" value={fields.name} onChange={handleFieldChange} />
        </div>
        <div className="inputgroup">
            <p className="inputhead">Email Address</p>
            <input className="input" type="email" placeholder="Enter your email" id="email" value={fields.email} onChange={handleFieldChange} />
        </div>
        <div className="inputgroup">
            <p className="inputhead">Password</p>
            <input className="input" type="password" placeholder="Enter password" id="password" value={fields.password} onChange={handleFieldChange} />
        </div>
        <div className="inputgroup">
            <p className="inputhead">Confirm Password</p>
            <input className="input" type="password" placeholder="Confirm your password" id="password_confirmation" value={fields.password_confirmation} onChange={handleFieldChange} />
        </div>
        <div className="inputgroup">
            <button className="submit">Register</button>
        </div>
        <a className="route" href="/login">Already Having account?</a>
        <p style={{marginTop:'0px',marginBottom:'0px'}}>OR</p>
        <a className="routeblack" href="/home">check feeds as guest</a>
        </form>
        </div>
    )
}