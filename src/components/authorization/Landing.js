import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {
    constructor(){
        super()
        this.state = {

        }

        this.logout=this.logout.bind(this)
    }

    logout(){
        axios
        .post('/auth/logout')
        .then(res => console.log(res.data))
    }

    render() {
        return (
            <div className='landing'>
                <Link to='/login'>
                    <button>Login</button></Link>
                <Link to='/register'>
                    <button>Create Account</button></Link>
                <Link>
                <button onClick={this.logout}>Log Out</button></Link>
            </div>
        )
    }
}

export default Landing