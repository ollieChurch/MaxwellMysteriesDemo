import React from 'react'

import openPortraitImg from '../../../../../images/puzzles/library/openPortrait.png'

function TheOpenPortrait({text=false}) {
    const style = {
        filter: 'drop-shadow(1px 1px 2px black) sepia(.25)'
    }
    
    return (
        <div className="puzzleContainer">
            <img
                className="puzzlePopUp_img"
                src={openPortraitImg}
                alt='three symbols'
                style={style}
            />
            <p className="puzzlePopUp_text">{text ? text : 'What could these mean?'}</p>   
        </div>
    )
}

export default TheOpenPortrait