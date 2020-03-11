import React, { createRef } from 'react'

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

    // let setImage = 1
    // setInterval(() => {
    //     if (setImage === 1) {
    //         projectImg.style.backgroundImage = ""
    //         setImage = 2
    //     } else {
    //         projectImg.style.backgroundImage = ""
    //         setImage = 1
    //     }
    // }, 7000);

    return (
        <div className="project-item" onMouseOver={enterProjectItem} onMouseOut={leaveProjectItem}>
            <div className="project-img" ref={projectImg}></div>
            <div className="project-text" ref={projectText}>Modern Fashion</div>
        </div>
    )
}

export default ProjectItem
