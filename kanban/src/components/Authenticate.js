import React from "react";
// import SideNav from './SideNav';
// import Header from './Header';
// import Dashboard from './Dashboard';
import '../styles/Authenticate.modules.css';

class Authenticate extends React.Component{
    constructor(props){
        super(props);
        this.isSignedIn = this.isSignedIn.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleCreateNewUser = this.handleCreateNewUser.bind(this);

        this.state = {
            shouldSignIn: true,
            isSignedIn: true,
            userName: '',
            password: '',
            userNames: [],
            emails: [],
            passwords: []
        }
    }
    isSignedIn() {
        this.setState(() => ({isSignedIn: true}))
    }
    toggleForm(){
        const nextState = !this.state.shouldSignIn;
        this.setState(() => ({shouldSignIn: nextState}))
    }

    handleCreateNewUser(e){
        e.preventDefault();
    }
    render(){
        return(
            <div className="authenticate">
                <h1>KANBAN</h1>
                
                {
                    this.state.shouldSignIn 
                    ? 
                    <form className='formStyle'>
                        <h1 className='headingStyle'>Sign In</h1>
                        <label className="labelStyle">Email:
                            <input 
                                type="text"
                                name="userName"
                                placeholder="Email"
                                required
                                // value={email}
                                className='inputStyle'
                            />
                        </label>
                        <label className="labelStyle">Password: 
                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                // value={password}
                                className='inputStyle'
                            />
                        </label>
                        <button className="buttonStyle">Sign In</button>
                    </form> 
                    : 
                    <form 
                        className='formStyle'
                        onSubmit={this.handleCreateNewUser}
                    >
                        <h1 className='headingStyle'>Sign Up</h1>
                        <label className="labelStyle">Name: 
                            <input 
                                type="text"
                                name="userName"
                                placeholder="User Name"
                                required
                                // value={email}
                                className='inputStyle'
                            />
                        </label>
                        <label className="labelStyle">Email: 
                            <input 
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                // value={email}
                                className='inputStyle'
                            />
                        </label>
                        <label className="labelStyle">Password: 
                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                // value={password}
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