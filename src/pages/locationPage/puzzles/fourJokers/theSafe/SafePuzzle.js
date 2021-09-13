import React, {useState, useRef, useEffect} from 'react'

import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import answerData from '../../answerData'

function SafePuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.safe)
    const [numberZones] = useState(setUpNumberZones())
    const [rangeValue, setRangeValue] = useState(0)
    const [playerInput, setPlayerInput] = useState([])
    const [selectedNumber, setSelectedNumber] = useState(0)
    const safeInput = useRef()
    const {setWrongAnswer, flashIndicator, indicatorFilled, updateIndicatorFilled} = useAnswerIndicators(answer)
    
    function setUpNumberZones() {
        const numberZoneArr = []
        
        for (let i=0; i < 7; i++) {
            const lowerCalc = i > 0 ? (i + i + 1) : (i + 1)
            const lowerBracket = (lowerCalc * 22.5) + 0.1
            const upperBracket = (lowerCalc + 2) * 22.5
            numberZoneArr.push([lowerBracket, upperBracket])
        }
        
        return [[337.6, 360], [0, 22.5], ...numberZoneArr]
    }

    function handleChange(event) {
        const {value} = event.target
        setRangeValue(value)
    }
    
    function submitNumber() {
        const newArr = [...playerInput, selectedNumber]
        setPlayerInput(newArr)
        updateIndicatorFilled(playerInput)
    }
    
    useEffect(() => {
        safeInput.current.style.transform = `rotate(-${rangeValue}deg)`
        numberZones.forEach((zone, index) => {
            if (rangeValue >= zone[0] && rangeValue <= zone[1]) {
                const number = index > 0 ? index : 1
                setSelectedNumber(number)
            } 
        })
    }, [rangeValue, numberZones])
    
    useEffect(() => {
        if (playerInput.length === answer.length) {
            if (playerInput.join('') === answer) {
                setPuzzleSolved(true)
            } else {
                setWrongAnswer(true)
                setTimeout(() => setPlayerInput([]), 1200)
            }
        }
    }, [playerInput, setWrongAnswer, setPuzzleSolved, answer])
    
    return (
        <div className='puzzleContainer'>
            <div className='safeAndControl'>
                <div className='safeContainer'>
                    <div className='safe_doorOutline'></div>
                    <div className='safe_inputArrow'></div>
                    <div className='safe_input' ref={safeInput}>
                        <hr className='safe_line-0' />
                        <div className='safe_numberContainer safe_numberContainer-0'>
                            <p>1</p>
                            <p className='safe_bottomNumber'>5</p>
                        </div>
                        <hr className='safe_line-1' />
                        <div className='safe_numberContainer safe_numberContainer-1'>
                            <p>2</p>
                            <p className='safe_bottomNumber'>6</p>
                        </div>
                        <hr className='safe_line-2' />
                        <div className='safe_numberContainer safe_numberContainer-2'>
                            <p>3</p>
                            <p className='safe_bottomNumber'>7</p>
                        </div>
                        <hr className='safe_line-3' />
                        <div className='safe_numberContainer safe_numberContainer-3'>
                            <p>4</p>
                            <p className='safe_bottomNumber'>8</p>
                        </div>
                    </div>
                </div>

                <div className='safeControls'>
                    <input
                        className='safeControl_slider'
                        type="range"
                        min="0"
                        max="360"
                        value={rangeValue}
                        onChange={handleChange}
                        onMouseUp={submitNumber}
                    />
                </div>
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
                        >{playerInput[index] ? playerInput[index] : ''}</div> 
                    )
                })}
            </div>
        </div>
    )
}

export default SafePuzzle