import React from 'react'

import signImg from '../../../../images/puzzles/library/sign.png'

function TheSign() {
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={signImg} alt='' />
            <p className="puzzlePopUp_text">Someone has carved into this sign</p>   
        </div>
    )
}

export default TheSign