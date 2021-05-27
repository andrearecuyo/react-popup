import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup animate__animated animate__slideInDown">
            <div className="popup-inner">
                <h3>Curious?</h3>
                <h4>
                Glassmorphism is a unified name for the popular Frosted Glass aesthetic. It has many names depending on the company using it, so we wanted to create a common ground for designers and developers to find related resources easier and faster.
                <br></br>
                <br></br>
                The effect is based on background blur with transparency, and uses stacked layers to show the depth and context of the interface.
                </h4>
                <br></br>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;