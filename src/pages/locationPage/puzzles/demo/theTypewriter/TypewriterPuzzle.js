import React, {useState, useEffect} from 'react'
import {AudioPlayerProvider} from 'react-use-audio-player'

import smallScreenTypewriterImg from '../../../../../images/puzzles/office/typewriter/typewriter.png'

import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import Keyboard from '../../../../../components/Keyboard'
import answerData from '../../answerData'

function TheTypewriter({setPuzzleSolved, seek, play, stop}) {
    const [answer] = useState(answerData.typewriter)
    const [playerInput, setPlayerInput] = useState('')
    const [smallScreenInput, setSmallScreenInput] = useState('')
    const [codeSubmitted, setCodeSubmitted] = useState(false)
    const {wrongAnswer, setWrongAnswer, flashIndicator} = useAnswerIndicators(answer)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const keyboardStyleChanges = {
        position: 'absolute',
        bottom: '6%',
        left: '49.5%',
        transform: 'translateX(-50%)',
        width: '90%',
    }
    
    function handleChange(event) {
        const {value} = event.target
        setSmallScreenInput(value)
    }
    
    function handleSmallScreenSubmit(event) {
        event.preventDefault()
        setPlayerInput(smallScreenInput) 
        smallScreenInput.length !== answer.length && setWrongAnswer(true)
    }
    
    window.onresize = () => setWindowWidth(window.innerWidth)
    
   useEffect(() => {
        if (playerInput.length >= answer.length && !codeSubmitted) {
            setCodeSubmitted(true)
            if (playerInput.toLowerCase() === answer) {
                setTimeout(() => {
                    setPuzzleSolved(true)
                }, 1000) 
            } else {
                setWrongAnswer(true)
            }
        }
       
    }, [playerInput, codeSubmitted, setWrongAnswer, setPuzzleSolved, answer])
   
   useEffect(() => {
       let timer
       if (codeSubmitted) {
           timer = setTimeout(() => {
                setPlayerInput('')
                setSmallScreenInput('')
                setCodeSubmitted(false) 
            }, 1200)

       }
       
       return () => clearTimeout(timer)
   }, [wrongAnswer, codeSubmitted])
    
    
    return (
        <div className="puzzleContainer puzzleContainer-typewriter">
                <div className="typeWriterInputDisplay">
                    {answer.split('').map((letter, index) => {
                        return (
                            <input 
                                key={index}
                                className="typeWriterInputDisplay_input"
                                readOnly
                                value={playerInput[index] ? playerInput[index] : ''}
                                size="1"
                                style={{color: flashIndicator ? 'firebrick' : 'black'}}
                            />
                        )
                    })}
                </div>
                
                { windowWidth >= 850 &&
                    <AudioPlayerProvider>
                        <Keyboard
                            playerInput={playerInput}
                            setPlayerInput={setPlayerInput}
                            answer={answer}
                            keyboardStyleChanges={keyboardStyleChanges}
                        />
                    </AudioPlayerProvider>
                }
        
                <img
                    className='puzzlePopUp_img typeWriterSmallScreen'
                    src={smallScreenTypewriterImg} alt='a typewriter'
                />
            
                <form className='typeWriterSmallScreen'>
                    <input 
                        className="typeWriterSmallScreen_input" 
                        placeholder="password"
                        value={smallScreenInput}
                        onChange={handleChange}
                        style={{color: flashIndicator ? 'firebrick' : 'black'}}
                    />
                    <button 
                        className="typeWriterSmallScreen_btn"
                        onClick={handleSmallScreenSubmit}
                    >
                        Submit
                    </button>
                </form>
            
                <p 
                    className='puzzlePopUp_text typeWriterSmallScreen' 
                    
                >
                    To type. Or not to type. That is the question.
                </p>
        </div>
    )
}

export default TheTypewriter