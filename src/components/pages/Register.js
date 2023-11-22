import React from "react";
import './Style.css';

function Register(){
    return(
        <>
            <Form/>
        </>
    )
}

function Form(){
    return(
        <>
        <div >
            <form className="loginform" >
                <h1>Register</h1>
                <label htmlFor="email" id="email">Email : <input type="email" name="email"/></label>
                <label htmlFor="phone" id="phone">Mobile Number : <input type="tel" name="mobileNumber"/></label>
                <label htmlFor="password" id="password">Enter Password : <input type="password" name="passWord"/></label>
                <label htmlFor="password" id="password">Re Enter Password : <input type="password" name="repassWord"/></label>
                <button className="btn"><a href="/Login">Register</a></button>
                <p>If already registered,&nbsp; <a href="/Login">Login</a></p>
            </form>
        </div>
        </>
    )
}

export default Register;