import React, { createRef } from 'react'
import modernFashion from '../images/project_images/modern_fashion_img.png'
import taskManager from '../images/project_images/task-manager_startup_img.png'

const ProjectItem = () => {
    const projectImg = createRef()
    const projectText = createRef()

    const enterProjectItem = () => {        
        projectText.current.style.marginTop = "-150px";
        projectImg.current.style.filter = "blur(3px)";
    }

    const leaveProjectItem = () => {
        projectText.current.style.marginTop = "0px";
        projectImg.current.style.filter = "blur(0px)";
    }

    return (
        <div className="project-item" onMouseOver={enterProjectItem} onMouseOut={leaveProjectItem}>
            <div className="project-img" ref={projectImg}></div>
            <div className="project-text" ref={projectText}>Modern Fashion</div>
        </div>
    )
}

export default ProjectItem
