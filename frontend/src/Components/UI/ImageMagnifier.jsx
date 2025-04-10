import React, { useState } from 'react'

import './ImageMagnifier.css'

export default function ImageMagnifier({imageURL}) {

    const [position, setPosition] = useState({x: 10, y: 10});
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({x: 10, y: 10});

    //Function to handle mouse hover on the image
    const handleMouseHover = (e) => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientReact();   
        
        //calculate the position (x, y) as a percentage based on cursor location
        const x =   ((e.PageX - left) / width) * 100;
        const y =   ((e.PageY - top) / height) * 100;
        setPosition({x, y});
    
        //update cursorPosition to strore the current mouse cursor coordinates relative to the image
        setCursorPosition({x: e.PageX - left, y: e.PageY - top});
    };

  return (
    <div className="img-magnifier-container"  
        onMouseEnter={() => {
            setShowMagnifier(true)
        }}
        
        onMouseLeave={() => {
            setShowMagnifier(false)
        }}

        onMouseMove={handleMouseHover}
        >
        {/*Display the main image*/}
        <img className="magnifier-img" src={imageURL} alt="" />

        {showMagnifier && <div
            style={{
                position: 'absolute',
                //position the magnifier near the cursor
                left: `${cursorPosition.x - 100}px`,
                top: `${cursorPosition.y - 100}px`,
                
                //make sure the magnifier doesnt interfere with other mouse events
                //pointerEvents: "none",
            }}
        >
            <div className="magnifier-image" style={{
                backgroundImage: `url(${imageURL})`,
                //Adjust the bg image based on cursor loc
                backgroundPosition: `${position.x}% ${position.y}%`,
            }}
            />
        </div>}
    </div>
  )
}
