import { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const { users , dispatch} = props;

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errorMsg, setErrorMsg] = useState('');

    let [avatar, setAvatar] = useState('unknown-avatar.svg');
    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setErrorMsg('Please enter a username and password');
            return;
        }
        const selectedUser = users.filter (user => user.id === username)[0];

        if (selectedUser.password === password) {

            setErrorMsg('');
            dispatch(setAuthedUser(username));
            navigate(-1);

        } else {
            setErrorMsg('Invalid password');
        }
    }

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
        setAvatar(users.filter (user => user.id === e.target.value)[0].avatarURL);
    }

    const handlePaswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='border shadow-md'>
            <form className='flex flex-col space-y-4 m-4' onSubmit={handleSubmit}>
                <img src={avatar} alt={username ? username : 'Mistery Avatar'}  data-testid="user-img" className='w-32 h-32 self-center' />
                <div className='flex justify-between items-baseline'>
                    <div className="pr-2">User</div> 
                    <select className="w-64" name="users" id="users" data-testid="user-select"  value={username} onChange={handleUserNameChange}>
                        <option  value="" defaultValue="a">Please Select a user</option>
                        {
                            users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='flex justify-between items-baseline'>
                    <div className='pr-2'>Password</div> 
                    <input className="w-64" type="password" placeholder="password"  data-testid="password-input" onChange={handlePaswordChange} value={password}/>
                </div>
            { errorMsg !=='' && <div className="text-red-500 text-sm text-right" data-testid="error-msg">{errorMsg}</div>}
                <button   type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-8 disabled:opacity-50" disabled={username === ""} data-testid="submit-button">Login</button>

            </form>
        </div>
    )
}
const mapStateToProps = ({ users }) => {
    return {
        users: Object.values(users).map ((user) => {
            return {
                id: user.id,
                name: user.name,
                password: user.password,
                avatarURL: user.avatarURL
            }
        }),
    }
}

export default connect(mapStateToProps)(Login);