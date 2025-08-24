import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Authenticate.modules.css';

function Authenticate({ setActiveUser }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [toggleForm, setToggleForm] = useState(true);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Get existing users or create empty array
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username already exists
        const userExists = users.find((u) => u.email === email);
        if (userExists) {
            alert("Account already exists for this email address!");
            return;
        }

        // Doesn't exist? Save new user
        users.push({ email, username, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! Please login.");
        navigate("/");
    };

    const handleSignin = (e) => {
        e.preventDefault();

        // Get stored users
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check credentials
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            setActiveUser(email);
            navigate("/dashboard");
        } else {
            alert("Invalid Credentials!");
        }
    };

    return(
        <div className="authenticate">
            <h1>KANBAN</h1>
            
            {
                toggleForm 
                ? 
                <form 
                    className='formStyle'
                    onSubmit={handleSignin}
                >
                    <h1 className='headingStyle'>Sign In</h1>
                    <label className="labelStyle">Email:
                        <input 
                            type="text"
                            name="userName"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='inputStyle'
                        />
                    </label>
                    <label className="labelStyle">Password: 
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='inputStyle'
                        />
                    </label>
                    <button type="submit" className="buttonStyle">Sign In</button>
                </form> 
                : 
                <form 
                    className='formStyle'
                    onSubmit={handleSignup}
                >
                    <h1 className='headingStyle'>Sign Up</h1>
                    <label className="labelStyle">Name: 
                        <input 
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='inputStyle'
                        />
                    </label>
                    <label className="labelStyle">Email: 
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='inputStyle'
                        />
                    </label>
                    <label className="labelStyle">Password: 
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='inputStyle'
                        />
                    </label>
                    <label className="labelStyle">Confirm Password: 
                        <input 
                            type="password"
                            name="password"
                            placeholder="Confirm Password"
                            required
                            // value={password}
                            className='inputStyle'
                        />
                    </label>
                    <button className="buttonStyle">Sign Up</button>
                </form>
            }
            
            <div className="center">
                {
                    !toggleForm && 
                    <>
                        <p>Already have an account? </p>
                        <button onClick={() => setToggleForm(!toggleForm)}>Sign In</button>
                    </>
                }
                {
                    toggleForm && 
                    <>
                        <p>Do not have an account? </p>
                        <button onClick={() => setToggleForm(!toggleForm)}>Sign Up</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Authenticate;