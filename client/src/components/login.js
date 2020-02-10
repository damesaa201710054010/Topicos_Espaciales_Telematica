import React, { Component } from 'react';
import './login.css';
import { Link, NavLink } from 'react-router-dom';

export default class login extends Component {
    constructor(props) {
        super();
        var log = false;
        this.state = {
            user: '',
            password: '',
            log
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { user, password } = this.state
    }   

    render() {
        return (
            <div className="App"  >
                <div className="App__Aside">
                </div>
                <div className="App__Form">
                    <div className= "FormCenter"> 
                        <form class="col s12" onSubmit={this.submitForm}>
                            <div class="row">
                                <div class="input-field col s9">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" class="validate" name="user" value={this.state.user} onChange={this.onChange} />
                                    <label for="icon_prefix">Nombre de Usuario</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s9">
                                    <i class="material-icons prefix">lock</i>
                                    <input id="icon_lock" type="password" class="validate" name="password" value={this.state.password} onChange={this.onChange} />
                                    <label for="icon_lock">Password</label>
                                </div>
                            </div>
                            <div align="center">
                                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                            <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
