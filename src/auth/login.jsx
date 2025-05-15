import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


export default function login()
{
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) =>
    {
        e.preventDefault();
        const storeUser = JSON.parse(localStorage.getItem("user"));

        if(storeUser && storeUser.email == email && storeUser.password == password )
        {
            localStorage.setItem("Loggedin", true);
            navigate("/dashboard");
        }
        else{
            alert("Invalid cradential");
        }
    };
    return(
        <form onSubmit={handleLogin}>
            <h2>Login Page</h2>
            <label htmlFor="email">Email </label>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /> <br />
            <label htmlFor="email">Email </label>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /> <br /><br />
            <button type="submit">Login</button>
            <a href="">Login as Operator</a> 
            <a href="">Login as Manager</a>
        </form>
    )
}