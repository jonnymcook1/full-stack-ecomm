import React, {Component} from 'react'
import axios from 'axios'

class Registration extends Component {
    constructor() {
        super() 
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsername=this.handleUsername.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.registerUser=this.registerUser.bind(this)
    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    registerUser(e) {
        axios
        .post('/auth/register', {username: this.state.username, password: this.state.password})
        .then(res => {console.log(res.data)})
    }

    render() {
        return (
            <div className='register'>
                <h3>Create a New Account!</h3>
                <div>
                    Username
                    <input onChange={this.handleUsername} placeholder='Username' />
                    Password
                    <input onChange={this.handlePassword} placeholder='Password' type='password' />
                </div>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}

export default Registration