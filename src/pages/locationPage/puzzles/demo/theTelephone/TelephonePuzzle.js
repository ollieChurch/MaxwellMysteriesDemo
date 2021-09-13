import React, {useState, useRef, useEffect} from 'react'

import fullPhoneImg from '../../../../../images/puzzles/office/telephone/FullPhone.png'
import blankPhoneImg from '../../../../../images/puzzles/office/telephone/PhoneNoInnerCircle.png'
import phoneMiddle from '../../../../../images/puzzles/office/telephone/PhoneMiddleLines.png'

import answerData from '../../answerData'

function TelephonePuzzle({setPuzzleSolved, play, stop, seek}) {
    const [answer] = useState(answerData.telephone)
    const [codeEntered, setCodeEntered] = useState('')
    const [smallScreenInput, setSmallScreenInput] = useState('')
    const [codeSubmitted, setCodeSubmitted] = useState(false)
    const phoneControlRef = useRef()
    const inputRef = useRef()
    const textRef = useRef()
    const [sfxSprite] = useState({
        dialing: 0,
        error: 2.1,
        forwardRotate: 5,
        returnRotate: 6.5
    })
    
    function handleSmallScreenInput(event) {
        const {value} = event.target
        setSmallScreenInput(value)   
    }
    
    function smallScreenSubmit(event) {
        event.preventDefault()
        if (smallScreenInput.length >= answer.length) {
            setCodeEntered(smallScreenInput)
            inputRef.current.style.display = 'none'
            textRef.current.style.display = 'block'
        }
    }
           
    function handleClick(event) {
        if (!codeSubmitted) {
            const {textContent} = event.target
            const numberPressed = parseInt(textContent)
            const rotation = numberPressed > 0 ? -285 + (numberPressed - 1) * 30 : -30
            const time = numberPressed > 0 ? 2 - (numberPressed - 1) * 0.2 : 0.5
            const timeout = (time * 1000) * 0.75
            
            seek(sfxSprite.forwardRotate)
            play()
            phoneControlRef.current.style.transition = `transform ${time}s`
            phoneControlRef.current.style.transform = `rotate(${rotation}deg)`

            setTimeout(() => {
                seek(sfxSprite.returnRotate)
                phoneControlRef.current.style.transform = 'rotate(0deg)'
                setTimeout(() => {
                    stop()
                    setCodeEntered(prevCode => prevCode + textContent)
                }, timeout)     
            }, timeout)
        }
    }
    
    useEffect(() => {
        if (codeEntered.length >= answer.length && !codeSubmitted) {
            setCodeSubmitted(true)
            if (codeEntered === answer) {
                seek(sfxSprite.dialing)
                play()
                setTimeout(() => {
                    stop()
                    setPuzzleSolved(true)
                }, 1500)
            } else {
                seek(sfxSprite.error)
                play()
                textRef.current.style.color = 'firebrick'
                setTimeout(() => textRef.current.style.color = 'black', 500)
                setTimeout(() => textRef.current.style.color = 'firebrick', 1000)
                setTimeout(() => textRef.current.style.color = 'black', 1500)
                setTimeout(() => textRef.current.style.color = 'firebrick', 2000)
                setTimeout(() => {
                    stop()
                    textRef.current.style.color = 'black'
                    setCodeEntered('')
                    setCodeSubmitted(false)
                    if (smallScreenInput.length === answer.length) {
                        setSmallScreenInput('')
                        inputRef.current.style.display = 'block'
                        textRef.current.style.display = 'none'
                    }
                }, 2900)
            }
        }
    }, [codeEntered, setPuzzleSolved, codeSubmitted, play, stop, seek, sfxSprite, smallScreenInput, answer])
    
    return (
        <>
            <div className="puzzlePopUp_cntrls puzzlePopUp_cntrls-telephone">
                <img
                    className="telephone_smallScreen puzzlePopUp_img"
                    src={fullPhoneImg}
                    alt="a telephone"
                />
                
                <form 
                    onSubmit={smallScreenSubmit} 
                    className="telephone_smallScreen"
                    ref={inputRef}
                >
                    <input
                        className="telephone_smallScreen-input"
                        placeholder="#"
                        value={smallScreenInput}
                        onChange={handleSmallScreenInput}
                    />
                    <br /><br />
                    <button type='submit'>Submit</button>
                </form>

                <img className="telephoneImage" src={blankPhoneImg} alt="a rotary telephone" />

                <div className="telephoneControl" ref={phoneControlRef}>
                    <img src={phoneMiddle} alt="" width="100px" />
                    <div className="phoneNumberContainer phoneNumberContainer-1">
                        <button className="phoneButton phoneButton-3" onClick={handleClick}>3</button>
                        <button className="phoneButton phoneButton-9" onClick={handleClick}>9</button>
                    </div>
                    <div className="phoneNumberContainer phoneNumberContainer-2">
                        <button className="phoneButton phoneButton-2" onClick={handleClick}>2</button>
                        <button className="phoneButton phoneButton-8" onClick={handleClick}>8</button>
                    </div>
                    <div className="phoneNumberContainer phoneNumberContainer-3">
                        <button className="phoneButton phoneButton-1" onClick={handleClick}>1</button>
                        <button className="phoneButton phoneButton-7" onClick={handleClick}>7</button>
                    </div>
                    <div className="phoneNumberContainer phoneNumberContainer-4">
                        <button className="phoneButton placeholderPhoneButton" />
                        <button className="phoneButton phoneButton-6" onClick={handleClick}>6</button>
                    </div>
                    <div className="phoneNumberContainer phoneNumberContainer-5">
                        <button className="phoneButton placeholderPhoneButton" />
                        <button className="phoneButton phoneButton-5" onClick={handleClick}>5</button>
                    </div>
                    <div className="phoneNumberContainer phoneNumberContainer-6">
                        <button className="phoneButton phoneButton-0" onClick={handleClick}>0</button>
                        <button className="phoneButton phoneButton-4" onClick={handleClick}>4</button>
                    </div>
                </div>
            </div>


            <div className="puzzlePopUp_text phoneNumberDisplay" ref={textRef}>
                <p>{codeEntered.length > 0 ? codeEntered : 'Who you gonna call?'}</p>
            </div>
        </>
    )
}

export default TelephonePuzzle