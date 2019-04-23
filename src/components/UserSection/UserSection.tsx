import React from 'react';
import PictureText from './PictureText/PictureText';
import UserDetailsForm from './UserDetailsForm/UserDetailsForm'
import './userSection.css'

const UserSection = () => {
    return (
        <div className="user-container">
            <PictureText />
            <UserDetailsForm />
        </div>
    )
}

export default UserSection;