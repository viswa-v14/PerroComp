import React from "react";
import './Style.css';

function Login(){
    return(
        <>
            <Form/>
        </>
    )
}

function Form(){
    return(
        <>
        <div>
            <form action="login.php" method="post" className="loginform">
                <h1>Login</h1>
                <label htmlFor="email" id="email">Email : <input type="email" name="email" /></label>
                <label htmlFor="password" id="password">Password : <input type="password" name="password" /></label>
                <button className="btn"><a href="/">Login</a></button>
                <p>If you don't have an account,&nbsp; <a href="/Register">Register</a></p>
            </form>
        </div>
        </>
    )
}

export default Login;