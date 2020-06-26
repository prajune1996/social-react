import React,{useState} from 'react'
import {ReactComponent as BellIcon} from '../assets/icons/bell.svg';
import {ReactComponent as MessengerIcon} from '../assets/icons/messenger.svg';
import {ReactComponent as CaretIcon} from '../assets/icons/caret.svg';
import {ReactComponent as PlusIcon} from '../assets/icons/plus.svg';
import {ReactComponent as CogIcon} from '../assets/icons/cog.svg';
import {ReactComponent as ChevronIcon} from '../assets/icons/chevron.svg';
import {ReactComponent as ArrowIcon} from '../assets/icons/arrow.svg';
import {ReactComponent as BoltIcon} from '../assets/icons/bolt.svg';
import {useSelector} from 'react-redux';



function App() {
    const authResponse = useSelector(state=>state.userAuth.userAuthResponse);
    return (
        <Navbar>
         {/* <Navitem icon={ <PlusIcon /> } /> */}
         {authResponse === "isLoggedIn"? 
        <Navitem icon={<CaretIcon/>} >
            <DropdownMenu />
        </Navitem>
             : 
       <NavLink icon={ <PlusIcon /> } />
             }
        </Navbar>
    )
}

function DropdownMenu(){
    function DropdownItem(props){
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className="dropdown">
            <DropdownItem leftIcon={<CogIcon />}>My Profile</DropdownItem>
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
            <a href="/login" className="icon-button" >
            {props.icon}
            </a>
        </li>
    )
}
export default App;