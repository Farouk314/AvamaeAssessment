import React from 'react';
import SignInPicture from './SignInPicture/SignInPicture';
import SignInForm from './SignInForm/SignInForm'
import './signInSection.css'

const SignInSection = (props) => {
    return (
        <React.Fragment>
            <SignInPicture />
            <SignInForm />
        </React.Fragment>
    )
}

export default SignInSection;