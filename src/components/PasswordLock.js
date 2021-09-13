import React, {useState, useEffect} from 'react'
import '../css/components/PasswordLock.css'

import useAnswerIndicators from '../hooks/useAnswerIndicators'

import Keyboard from './Keyboard'
import BrassPanel from './BrassPanel'

function PasswordLock({answer, setPuzzleSolved}) {
    const [playerInput, setPlayerInput] = useState('')
    const [codeSubmitted, setCodeSubmitted] = useState(false)
    const {wrongAnswer, setWrongAnswer, flashIndicator} = useAnswerIndicators(answer)
    
    function handleSubmit() {
        setCodeSubmitted(true)
        playerInput.toLowerCase() === answer ? 
            setTimeout(() => setPuzzleSolved(true), 510) : setWrongAnswer(true)
    }
    
    useEffect(() => {
       let timer
       if (codeSubmitted) {
           timer = setTimeout(() => {
                setPlayerInput('')
                setCodeSubmitted(false) 
            }, 1200)
       }
       
       return () => clearTimeout(timer)
   }, [wrongAnswer, codeSubmitted])
    
    return (
        <BrassPanel extraClasses='passwordLock'>
            <input
                className='passwordLock_display'
                type='text'
                value={playerInput}
                style={{color: flashIndicator ? 'firebrick' : 'black'}}
                readOnly
            /> 
            <Keyboard
                playerInput={playerInput}
                setPlayerInput={setPlayerInput}
                answer={answer}
            /> 
            <button className='passwordLock_submit' onClick={handleSubmit}>
                Submit
            </button>
        </BrassPanel>
    )
}

export default PasswordLock