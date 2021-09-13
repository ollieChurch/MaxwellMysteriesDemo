import React from 'react'

import cratesImg from '../../../../images/puzzles/lastStand/crates.png'

function TheCrates() {
    return (
        <div className='puzzleContainer'>
            <img className='puzzlePopUp_img' src={cratesImg} alt='a collection of crates with symbols' />
            <p className='puzzlePopUp_text'>This cargo is all addressed to the Professor!</p>
        </div>
    )
}

export default TheCrates