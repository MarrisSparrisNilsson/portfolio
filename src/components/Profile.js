import React from 'react'
import userIcon from '../images/icons/user-icon-solid.svg'

const Profile = () => {
    return (
        <div className="profile-info-container">
            <img src={userIcon} className="userPic" alt="UserIcon"/>
            <div className="profile-text">Martin Nilsson</div>
        </div>
    )
}

export default Profile
