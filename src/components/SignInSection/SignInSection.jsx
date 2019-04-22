import React from 'react';
import SignInPicture from './SignInPicture/SignInPicture';
import SignInForm from './SignInForm/SignInForm'
import './signInSection.css'

const SignInSection = (props) => {
    return (
        <div className="sign-in-container">
            <SignInPicture />
            <SignInForm />
        </div>
    )
}

export default SignInSection;