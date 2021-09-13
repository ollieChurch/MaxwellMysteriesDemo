import React, {useState, useEffect} from 'react'
import '../../../../../css/puzzles/lastStand/TheSwitches.css'

import BrassPanel from '../../../../../components/BrassPanel'
import answerData from '../../answerData'

function TheSwitches({setPuzzleSolved}) {
    const [answer] = useState(answerData.powerSwitches)
    const [playerInput, setPlayerInput] = useState(['0', '0', '0', '0', '0', '0', '0', '0', '0'])
    
    function handleChange(event) {
        const {name, value} = event.target
        const newArr = [...playerInput]
        newArr[name] = value
        setPlayerInput(newArr)
    }
    
    useEffect(() => {
        if (playerInput.join('') === answer.join('')) {
            const timer = setTimeout(() => setPuzzleSolved(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [playerInput, setPuzzleSolved, answer])
    
    return (
        <div className='puzzleContainer'>
            <BrassPanel extraClasses='switchPanel'>
                <p>0</p>
                <div className='switchPanel_switchesContainer'>
                    {playerInput.map((input, index) => {
                        return (
                            <input
                                key={index}
                                type='range'
                                className='switchPanel_switch'
                                min='0'
                                max='1'
                                name={index}
                                value={playerInput[index]}
                                onChange={handleChange}
                            />
                        )
                    })}
                </div>
                <p>1</p>
            </BrassPanel>
            <p className='puzzlePopUp_text'>Danger! Danger! High voltage!</p>
        </div>
    )
}

export default TheSwitches