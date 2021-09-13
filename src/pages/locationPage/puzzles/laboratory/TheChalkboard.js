import React from 'react'

import chalkboardImg from '../../../../images/puzzles/laboratory/chalkboard.png'

function TheChalkboard() {    
    return (
        <div className='puzzleContainer'>
            <img className='puzzlePopUp_img' src={chalkboardImg} alt= '' />
            <p className='puzzlePopUp_text'>A full chalkboard is a sign of hard work.</p>
        </div>
             
    )
}

export default TheChalkboard