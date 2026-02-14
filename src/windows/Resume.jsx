import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowNName, windowState, setWindowState }) => {
    return (
        <MacWindow windowNName={windowNName} windowState={windowState} setWindowState={setWindowState} >
            <div className="resume-window">
                <embed src="/resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume