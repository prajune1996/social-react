import React,{useState,useEffect} from 'react'
import {ReactComponent as CaretIcon} from '../assets/icons/caret.svg';
import {ReactComponent as LoginIcon} from '../assets/icons/login.svg';
import {ReactComponent as CogIcon} from '../assets/icons/cog.svg';
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg';
import ReactTooltip from "react-tooltip";
import {loadUserProfileActions} from '../store/actions/ProfileActions';
import {useDispatch,useSelector} from 'react-redux';

export default function App() {
    const dispatch = useDispatch();
    const profileResponse = useSelector(state=>state.userProfile.userProfile);

    useEffect(()=>{
        dispatch(loadUserProfileActions());
    }, [])
    const authResponse = useSelector(state=>state.userAuth.userAuthResponse);
    return (
        <Navbar>
        <NavLink href="/home" icon={ <HomeIcon /> }  />
         {profileResponse !== "loading"? 
        <Navitem icon={<CaretIcon/>} >
            <DropdownMenu />
        </Navitem>
             : 
       <NavLink href="/login" icon={ <LoginIcon /> }  />
             }
        </Navbar>
    )
}

function DropdownMenu(){
    function DropdownItem(props){
        return(
            <a href={props.href} className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className="dropdown">
            <DropdownItem href="/user" leftIcon={<CogIcon />}>My Profile</DropdownItem>
            <DropdownItem href="/logout" leftIcon={<LoginIcon />}>Logout</DropdownItem>
        </div>
    )
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

function Navitem(props){
    const [open,setOpen] = useState(false);
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}


function NavLink(props){
    return(
        <li className="nav-item">
            <ReactTooltip />
            <a href={props.href} className="icon-button" data-tip="Login">
            {props.icon}
            </a>
        </li>
    )
}