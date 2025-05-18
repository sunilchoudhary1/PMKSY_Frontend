import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function loginOperator()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        const storeUser = JSON.parse(localStorage.getItem("user"));
        if(storeUser && storeUser.email === email && storeUser.password === password){
            console.log("Login Success");
            
            navigate("/operatorDashboard");
        }
        else{
            console.log("Invalid Credentials");
        }
    };
    const navigate = useNavigate();
    return (
        <>
        <form action="">
            <h2>Login as Operator</h2>
            <label htmlFor="email">Email </label>
            <input type="Email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /> <br />
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /> <br /><br />
            <button type="submit">Login</button><br />
        </form>
        <Link to="/login">Login as User</Link>
        </>
    )
}