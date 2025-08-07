import React from "react";
import SideNav from './SideNav';
import Header from './Header';
import Dashboard from './Dashboard';
import '../styles/Authenticate.modules.css';

class Authenticate extends React.Component{
    constructor(props){
        super(props);
        this.isSignedIn = this.isSignedIn.bind(this);
        this.toggleForm = this.toggleForm.bind(this);

        this.state = {
            shouldSignIn: true,
            isSignedIn: true,
            userName: '',
            password: '',

        }
    }
    isSignedIn() {
        this.setState(() => ({isSignedIn: true}))
    }
    toggleForm(){
        const nextState = !this.state.shouldSignIn;
        this.setState(() => ({shouldSignIn: nextState}))
    }
    render(){
        return(
            <div className="authenticate">
                
                {
                    this.state.shouldSignIn 
                    ? 
                    <form className='formStyle'>
                        <h1 className='headingStyle'>Sign In</h1>
                        <div>
                            <label className="labelStyle">Email: </label>
                            <input 
                                type="text"
                                name="userName"
                                placeholder="Email"
                                required
                                // value={email}
                                className='inputStyle'
                            />
                        </div>
                        <div>
                            <label className="labelStyle">Password: </label>
                            <input 
                                type="password"
                                name="password"
                                placeholder="password"
                                required
                                // value={password}
                                className='inputStyle'
                            />
                        </div>
                        <button className="buttonStyle">Sign In</button>
                    </form> 
                    : 
                    <form className='formStyle'>
                        <h1 className='headingStyle'>Sign Up</h1>
                        <div>
                            <label className="labelStyle">Name: </label>
                            <input 
                                type="text"
                                name="userName"
                                placeholder="Name"
                                required
                                // value={email}
                                className='inputStyle'
                            />
                        </div>
                        <div>
                            <label className="labelStyle">Email: </label>
                            <input 
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                // value={email}
                                className='inputStyle'
                            />
                        </div>
                        <div>
                            <label className="labelStyle">Password: </label>
                            <input 
                                type="password"
                                name="password"
                                placeholder="password"
                                required
                                // value={password}
                                className='inputStyle'
                            />
                        </div>
                        <div>
                            <label className="labelStyle">Password: </label>
                            <input 
                                type="password"
                                name="password"
                                placeholder="confirm password"
                                required
                                // value={password}
                                className='inputStyle'
                            />
                        </div>
                        <button className="buttonStyle">Sign In</button>
                    </form>
                }
                
                <div className="center">
                    {
                        !this.state.shouldSignIn && 
                        <>
                            <p>Already have an account? </p>
                            <button onClick={this.toggleForm}>Sign In</button>
                        </>
                    }
                    {
                        this.state.shouldSignIn && 
                        <>
                            <p>Do not have an account? </p>
                            <button onClick={this.toggleForm}>Sign Up</button>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default Authenticate;