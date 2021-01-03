import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    setUsername = (event) => {
        this.setState({username: event.target.value});
    }

    setPassword = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                        <div className="row">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div className="col-lg-12 login-title">
                            ADMIN PANEL 
                            </div>
                            <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input type="text" className="form-control" name="username" onChange={this.setUsername} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control" name="password" onChange={this.setPassword} />
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 col-md-6 login-btm login-text">
                                   
                                    </div>
                                    <div className="col-lg-6 col-md-6 login-btm login-button">
                                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                        </div>
                    </div>
    </div>
        )
    }
}

export default Login;