import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); //this stops the page to refresh
        //login logic here
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //this stops the page to refresh
        //register logic here
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //created and user and logged in, redirect to homepage
            })
            .catch((e) => alert(e.message));
    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} className="login_signinButton">Sign In</button>
                </form>
                <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
