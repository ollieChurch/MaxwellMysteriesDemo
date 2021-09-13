import React from 'react'

import chairImg from '../../../../images/puzzles/library/chair.png'

function TheChair() {
    return (
        <div className="puzzleContainer">
            <img
                className="puzzlePopUp_img"
                src={chairImg}
                alt='a note in a pentagon: left4 down1 right4 down2 left23 up7 right5 up1'
                style={{filter: 'sepia(.65)'}}
            />
            <p className="puzzlePopUp_text">Here's some paper stuck to the bottom of the chair.</p>   
        </div>
    )
}

export default TheChair