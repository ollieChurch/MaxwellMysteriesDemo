import React, {useState, useEffect} from 'react'

import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'

import BrassPanel from '../../../../../components/BrassPanel'
import answerData from '../../answerData'

function DirectionalPadPuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.directionalPad)
    const [playerInput, setPlayerInput] = useState('')
    const {setWrongAnswer,
           flashIndicator,
           indicatorFilled,
           updateIndicatorFilled
          } = useAnswerIndicators(answer)
    
    function handleClick(value) {
        updateIndicatorFilled(playerInput) 
        setPlayerInput(prevInput => prevInput + value)
    }
    
    useEffect(() => {
        if (playerInput.length >= answer.length) {
            if (playerInput === answer) {
                setPuzzleSolved(true)
            } else {
                setWrongAnswer(true)
                setTimeout(() => setPlayerInput(''), 1250)
            }
        }
    }, [playerInput, setPuzzleSolved, setWrongAnswer, answer])
    
    return (
        <div className='puzzleContainer'>
            <BrassPanel extraClasses='directionalContainer'>
                <button className='directional_btn' onClick={() => handleClick('u')}>
                    <i className="fas fa-hand-point-up"></i>
                </button>
                <div className='directional_middleRowContainer'>
                    <button className='directional_btn' onClick={() => handleClick('l')}>
                        <i className="fas fa-hand-point-left"></i>
                    </button>
                    <p className='directional_icon'>
                        <i className="fas fa-dice-d6"></i>
                    </p>
                    <button className='directional_btn' onClick={() => handleClick('r')}>
                        <i className="fas fa-hand-point-right"></i>
                    </button>
                </div>
                <button className='directional_btn' onClick={() => handleClick('d')}>
                    <i className="fas fa-hand-point-down"></i>
                </button>
            </BrassPanel>
            
            <div className='indicatorBox'>
                {indicatorFilled.map((indicator, index) => {
                    return (
                        <div
                        key={index}
                        className={`
                            indicator 
                            ${indicator && 'indicator-filled'}
                            ${flashIndicator && 'indicator-wrong'}
                        `}
                        ></div> 
                    )
                })}
            </div>
        </div>
    )
}

export default DirectionalPadPuzzle