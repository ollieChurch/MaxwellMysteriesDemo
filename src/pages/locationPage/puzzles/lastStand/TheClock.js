import React from 'react'

import clockImg from '../../../../images/puzzles/lastStand/letterClock.png'

function TheClock() {
    const style = {
        filter: 'sepia()'
    }
    
    return (
        <div className='puzzleContainer'>
            <img 
                className='puzzlePopUp_img'
                src={clockImg}
                alt='clock with letters instead of numbers'
                style={style}
            />
            <p className='puzzlePopUp_text'>
                Tick tock goes the clock.
            </p>
        </div>    
    )
}

export default TheClock