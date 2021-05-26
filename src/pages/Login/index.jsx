import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../utils/firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
        // bair gak ke refresh browww

        if (auth) {

            auth.signInWithEmailAndPassword(email, password).then((auth) => {
                history.push("/");
            }).catch(error => alert(error.message));
        }

    }


    return (
        <div className="login">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="login__logo" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the Amazon Fake Clone Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <div className="login__registerInfo">
                    <p>Don't have an account?</p>
                </div>

                <Link to="/register">
                    <button className="login__registerButton">Create your Amazon account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
