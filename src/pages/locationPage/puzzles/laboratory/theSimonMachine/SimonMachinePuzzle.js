import React, {useState, useRef, useEffect, useContext} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'

import beepSFX from '../../../../../audio/audioFiles/sfx/beep.mp3'

import {UnmountContext} from '../../../../../context/UnmountContext'
import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import BrassPanel from '../../../../../components/BrassPanel'

function SimonMachinePuzzle({setPuzzleSolved, text}) {
    const revolveRef = useRef()
    const lightRef0 = useRef()
    const lightRef1 = useRef()
    const lightRef2 = useRef()
    const lightRef3 = useRef()
    const lightRef4 = useRef()
    const lightRef5 = useRef()
    const lightRef6 = useRef()
    const lightRef7 = useRef()
    const lightRef8 = useRef()
    const {unmount, updateUnmount} = useContext(UnmountContext)
    const [level, setLevel] = useState(0)
    const [currentDeg, setCurrentDeg] = useState(0)
    const [answer, setAnswer] = useState(['0'])
    const [playerInput, setPlayerInput] = useState([])
    const [lightRefs] = useState([lightRef0, lightRef1, lightRef2, lightRef3, lightRef4, lightRef5, lightRef6, lightRef7, lightRef8])
    const [lit] = useState('darkgreen')
    const [dark] = useState('rgba(171, 156, 123, .75)')
    
    const {setWrongAnswer, flashIndicator, indicatorFilled, updateIndicatorFilled} = useAnswerIndicators('123')
    
    const {play, playing} = useAudioPlayer({
        src: beepSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    
    useEffect(() => {
        if (playing && unmount.safe) {
            updateUnmount({name: 'safe', state: false})
        }
    },[playing, unmount, updateUnmount])
    
    function handleClick(event) {
        const {value} = event.target        
        if (value === answer[playerInput.length]) {
            if (level === 0) {
                lightRefs[0].current.style.background = dark
                setAnswer([])
            } else {
                play()
                setPlayerInput(prevInput => {
                    return [
                        ...prevInput,
                        value
                    ]
                })
                const newRotation = currentDeg + ((Math.floor(Math.random() * 3) + 1) * 90)
                setCurrentDeg(newRotation)
                revolveRef.current.style.transform = `rotate(${newRotation}deg)`
            } 
        } else {
            setWrongAnswer(true)
            lightRefs.forEach(light => light.current.style.background = dark)
            setPlayerInput([])
            setAnswer(['0'])
            setLevel(0)
            setCurrentDeg(0)
            revolveRef.current.style.transform = `rotate(0deg)`
        }
    }
    

    
    useEffect(() => {
        const idleLight = lightRefs[0].current
        const idleFlash = setInterval(() => {
            if (level === 0) {
                if (idleLight.style.background === lit) {
                   idleLight.style.background = dark
               } else {
                   idleLight.style.background = lit
               }
            } else {
                clearInterval(idleFlash)
            }
        }, 1000)
        
        return () => clearInterval(idleFlash)
    }, [lightRefs, lit, dark, level])
    
    useEffect(() => {
        const timers = []
        if (level > 0) {
            for (let i=0; i < answer.length; i++) {
                const instructionFlash = setTimeout(() => {
                    lightRefs[answer[i]].current.style.background = lit
                    play()
                    const lightOff = setTimeout(() => {
                        lightRefs[answer[i]].current.style.background = dark
                    }, 1000)
                    timers.push(lightOff)
                }, (1000 + (1500*i)))
                
                timers.push(instructionFlash)
            }  
        }
        
        return () => timers.forEach(timer => clearTimeout(timer))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answer, level, lightRefs, lit, dark])
    
    useEffect(() => {
        if (playerInput.length === answer.length) {
            const newLevel = level + 1
            const indicatorsFilled = []
            for (let i=0; i < level - 1; i++) {indicatorsFilled.push(i)}
            level > 0 && updateIndicatorFilled(indicatorsFilled) 
            setPlayerInput('')
            
            if (newLevel < 4) {
                const newAnswer = [...answer]
                setLevel(newLevel)

                for (let i=0; i < 2; i++ ) {
                    const randomNum = (Math.floor(Math.random() * 8))
                    newAnswer.push(randomNum === 4 ? '5' : randomNum.toString())
                }

                setAnswer(newAnswer)
            } else {
                setPuzzleSolved(true)
            }
            
        }
    }, [playerInput, setPlayerInput, answer, setLevel, setAnswer, level, updateIndicatorFilled, setPuzzleSolved])
    
    return (
        <>
            <BrassPanel extraClasses='simonContainer'>
                <div className='simon_mainPuzzle'>
                    <div className='simon_revolve simon_revolve-invisible'>
                        <div className='simon_instruction'>
                            {lightRefs.map((light, index) => {
                                return (
                                    <div
                                        key={`light_${index}`}
                                        className={`
                                            simon_instruction_light
                                            ${index===4 && 'placeholder'}
                                        `}
                                        ref={light}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='simon_revolve' ref={revolveRef}>
                        <div className='simon_input'>
                            {lightRefs.map((button, index) => {
                                return (
                                    <button 
                                        key={`button_${index}`}
                                        className={`
                                            simon_input_btn
                                            ${index===4 && 'placeholder'}
                                        `}
                                        onClick={handleClick}
                                        value={index.toString()}
                                    ></button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='simon_indicatorBox'>
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
            </BrassPanel>
            <p className='puzzlePopUp_text'>
                {text ? 
                    text : 
                    'Who the hell is Simon?! And why should I do as he says?'
                }
            </p>
        </>
    )
}

export default SimonMachinePuzzle