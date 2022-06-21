import React from "react";
import { Link } from 'react-router-dom';
import * as DemoUser from "./demo_user_login"

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
        };
        this.pwFieldType = "password";
    }

    handleInput = type => {
        return e => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = Object.assign( {}, this.state );
        this.props.processForm(user); 
    }

    handleDemoUser = e => {
        e.preventDefault();
        const user = DemoUser.setUser();
        this.animateField = DemoUser.animateField.bind(this);
        this.animateField("email", user.email);
        this.animateField("password", user.password);
    }

    handleToggleEye = () => {
        console.log("click click")
        if(this.pwFieldType === "password") {
            this.pwFieldType = "text"
        } else {
            this.pwFieldType = "password"
        }   
        this.setState(this.state);
    }

    render() {
        const otherFormType = (this.props.formType === "Sign In") ? ("Register") : ("Sign In");
        const otherFormLink = (this.props.formType === "Sign In") ? ("register") : ("signin");
        
        const name = (
            <>
                <label className="fname-label">First Name
                    <input 
                        className="fname-input"
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleInput("fname")}
                    />
                </label>

                <label className="lname-label">Last Name
                    <input
                        className="lname-input" 
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleInput("lname")}
                    />
                </label>
            </>
        )   

        const demoLogin = (
            <button
                className="session-demo-button"
                onClick={this.handleDemoUser}>
                    Sign In As Demo User
            </button>
        )

        return (
            <div className="session-form-container">
                <h1 className="session-form-header">{this.props.formType}</h1>

                <form className="session-form">
                    <label className="email-label">Email
                        <input
                            className="email-input"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        />
                    </label>

                    { (this.props.formType === "Register") && name }

                    <label className="password-label">Password
                        <span className="password-field">
                            <input 
                                className="password-input"
                                type={this.pwFieldType}
                                value={this.state.password}
                                onChange={this.handleInput("password")}
                            />
                            <img className="password-toggle-eye"
                                src="https://d1xyolhen8fnqh.cloudfront.net/media/ecs/global/icons/password-eye-off.svg"
                                onClick={this.handleToggleEye}
                            />
                        </span>
                    </label>

                    <button 
                        className="session-form-button"
                        onClick={this.handleSubmit}>
                            {this.props.formType}
                    </button>

                    { (this.props.formType === "Sign In") && demoLogin }
                </form>
            </div>
        )
    }
}