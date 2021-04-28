import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.componet'
import './sign-in.styles.scss'

import {signInWithGoogle} from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email' 
                        required/>
                    {/* <label>Email</label> */}
                    <FormInput 
                        name='password' 
                        type='passowrd' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password' 
                        required/>
                    {/* <label>Password</label> */}

                    <CustomButton type='submit'>Submit Form</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {' '}
                        Sign In with Google
                        {' '}
                    </CustomButton>
                    {/* <input type='submit' value='Submit Form'/> */}
                </form>
            </div>
        )
    }
}
