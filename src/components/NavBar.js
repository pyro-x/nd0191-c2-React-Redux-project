import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation ,useNavigate} from 'react-router-dom'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


const NavBar = (props) => {
    console.log ("navbar props", props);
    const location = useLocation();
    const navigate = useNavigate();
    const {authedUser} = props;

    const handleLogout = () => {

        //props.dispatch({type: "LOGOUT"});
        props.dispatch(setAuthedUser(null));
        navigate("/login");
        
    }

    console.log ("location", location);
    return (
        <nav className='flex justify-between px-4 pt-4  pb-2 border-b-2 mt-2 shadow'>
            <ul className="flex space-x-2">

                <li className={location.pathname === "/" ? "border-b-4":""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={location.pathname === "/leaderboard" ? "border-b-4":""}>
                    <Link to="/leaderboard">Leader board</Link>
                </li>
                <li className={location.pathname === "/add" ? "border-b-4":""}>
                    <Link to="/add">New</Link>
                </li>
            </ul>
            
               {
                authedUser !== null ? (  
                    <ul className="flex space-x-2 justify-items-end">

                        <li> 
                        </li>
                        <li>
                            <div className="flex">
                                <img src={authedUser.avatarURL} className='w-8 h-8 rounded-full mr-2' alt={authedUser.name}/>
                                {authedUser.name}
                            </div>
                        </li>
                        <li>
                            <div onClick={handleLogout}>Logout</div>
                        </li>
                    </ul>
                    ) : (
                        <ul className="flex space-x-2 justify-items-end">
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    )
                }
        </nav>
    );
}
const mapStateToProps = ({ users, authedUser }) => {
    return {
       authedUser: authedUser!== null ? users[authedUser] : null
    }
}

export default connect(mapStateToProps)(NavBar);