import React, {  useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          displayName: username,
        });
      })
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="register__logo"
          alt=""
        />
      </Link>

      <div className="register__container">
        <h1>Create your Account</h1>

        <form action="">
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={register} className="register__button">
            Create your Amazon account
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Fake Clone Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <div className="signIn__info">
          <p>Already have an account?</p>
          <h5>
            <Link to="/login">Sign In</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
