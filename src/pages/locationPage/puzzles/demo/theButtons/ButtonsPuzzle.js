import React, {useState, useEffect} from 'react'

import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import answerData from '../../answerData'

function ButtonsPuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.buttons)
    const [playerInput, setPlayerInput] = useState('')
    const {setWrongAnswer, flashIndicator, indicatorFilled, updateIndicatorFilled} = useAnswerIndicators(answer)
    
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
                setPlayerInput('')
            }
        }
    }, [playerInput, setPuzzleSolved, setWrongAnswer, answer])
    
    useEffect(() => console.log(playerInput), [playerInput])
        
    return (
        <>
            <div className='buttonsBox'>
                    <button className='buttons-btn' onClick={() => handleClick('w')}>
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className='buttons-btn' onClick={() => handleClick('o')}>
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className='buttons-btn' onClick={() => handleClick('n')}>
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className='buttons-btn' onClick={() => handleClick('d')}>
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className='buttons-btn'onClick={() => handleClick('e')}>
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className='buttons-btn' onClick={() => handleClick('r')}>
                        <i className="fas fa-expand"></i>
                    </button>
                </div>

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

                <p className="puzzlePopUp_text">
                    Human nature requires us to press buttons we know we should not.
                </p>
        </>
    )
}

export default ButtonsPuzzle