import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false
        }

        this.handleUsername=this.handleUsername.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.login=this.login.bind(this)
    }
    
    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    login() {
        axios
        .post('/auth/login', {username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true}))
        .catch(() => {alert('login Unsuccessful')})
    }

    render() {

        if(this.state.redirect){
            alert('Login successful. Time to Shop!')
            return <Redirect to='/dashboard' />
        }
        return (
            <div className='login'>
                <h3>Login</h3>
                <div>
                    Username
                    <input onChange={this.handleUsername} placeholder="Username"/>
                    Password
                    <input onChange={this.handlePassword} placeholder="Password"/>
                </div>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login