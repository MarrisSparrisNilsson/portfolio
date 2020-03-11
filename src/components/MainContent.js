import React from 'react'
import Profile from './Profile'
import ProjectContainer from './ProjectContainer'

const MainContent = () => {
    // const img = '../images/user-icon-solid.svg';

    return (
        <div className="mainContent">
            <Profile />
            <ProjectContainer />
        </div>
    )
}

export default MainContent
