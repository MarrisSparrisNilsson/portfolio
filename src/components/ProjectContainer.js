import React, { createRef } from 'react'

const ProjectContainer = () => {

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
        <div className="project-container" >
            <div className="project-item" onMouseOver={enterProjectItem} onMouseOut={leaveProjectItem}>
                <div className="project-img" ref={projectImg}></div>
                <div className="project-text" ref={projectText}>Modern Fashion</div>
            </div>
            <div className="project-item">2</div>
            <div className="project-item">3</div>
            <div className="project-item">4</div>
            <div className="project-item">5</div>
        </div>
    )
}

export default ProjectContainer
