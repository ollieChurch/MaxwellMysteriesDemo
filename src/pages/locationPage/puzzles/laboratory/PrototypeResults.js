import React from 'react'

import prototypeOneImg from '../../../../images/puzzles/laboratory/prototypePart1.png'
import prototypeTwoImg from '../../../../images/puzzles/laboratory/prototypePart2.png'

function PrototypeResults({option, text=''}) {
    const prototypeImg = option === '1' ? prototypeOneImg : prototypeTwoImg
    
    return (
        <div className='puzzleContainer'>
            <img
                className='puzzlePopUp_img'
                src={prototypeImg}
                alt='a collection of test results'
            />
            <p className='puzzlePopUp_text'>{text ? text : 'a collection of important papers.'}</p>
        </div>
    )
}

export default PrototypeResults