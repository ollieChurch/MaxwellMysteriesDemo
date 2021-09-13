import React, {useState, useContext} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'

import cashRegisterSFX from '../../../../../audio/audioFiles/sfx/cashRegisterSFX.mp3'

import {UnmountContext} from '../../../../../context/UnmountContext'
import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import answerData from '../../answerData'

function CashRegisterPuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.cashRegister)
    const [buttonsStatus, setButtonsStatus] = useState(setUpInputs())
    const [playerInput, setPlayerInput] = useState([])
    const {updateUnmount} = useContext(UnmountContext)
    const {setWrongAnswer, flashIndicator} = useAnswerIndicators('')
    
    const {play} = useAudioPlayer({
        src: cashRegisterSFX,
        format: 'mp3',
        autoplay: true,
        onplay: () => { updateUnmount({name: 'safe', state: false}) },
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    
    function setUpInputs() {
        const inputArr = []
        for (let i=0; i<16; i++) {inputArr.push(false)}
        return inputArr
    }
    
    function handleClick(value) {
        const newStatusArr = [...buttonsStatus]
        newStatusArr[value] = !newStatusArr[value]
        setButtonsStatus(newStatusArr)
        
        const inputArr = [...playerInput]
        const newInputArr = newStatusArr[value] ? 
            [...inputArr, value] : 
            inputArr.filter(input => input !== value)
        setPlayerInput(newInputArr)
    }
    
    function handleSubmit() {
        const submittedCode = playerInput.sort((a, b) => a - b).join('')
        console.log(submittedCode)
        
        if (submittedCode === answer) {
            play()
            setPuzzleSolved(true)
        } else {
            setWrongAnswer(true)
            setPlayerInput([])
            setButtonsStatus(setUpInputs())
        }
    }
    
    function buttonSetUp(leftSide) { 
        return buttonsStatus.map((clicked, index) => {
            const crossBars = [0, 3, 4, 7, 8, 11, 12, 15]
            const verticalPairs = [1, 5, 9, 13]
            const calc = leftSide ? 
                index < buttonsStatus.length / 2 : 
                index >= buttonsStatus.length / 2
            
            if (calc) {
                if (crossBars.includes(index)){
                    return (
                        <button 
                            key={index}
                            className='cashRegister_bar cashRegister_bar-horizontal'
                            onClick={() => handleClick(index)}
                            style={{background: (clicked && 'black') || (flashIndicator && 'red')}}
                        ></button> 
                    )
                } else if (verticalPairs.includes(index)) {
                    return (
                        <div key={index} className='verticalBarContainer'>
                            <button 
                                className='cashRegister_bar'
                                onClick={() => handleClick(index)}
                                style={{background: (clicked && 'black') || (flashIndicator && 'red')}}
                            ></button>
                            <button 
                                className='cashRegister_bar'
                                onClick={() => handleClick(index+1)}
                                style={
                                    {background: 
                                        (buttonsStatus[index+1] && 'black') || 
                                        (flashIndicator && 'red')
                                    }
                                }
                            ></button>
                        </div>
                    )
                } else {
                    return null
                }
            } else {
               return null
            }
       })
    }
        
    return (
        <div className='puzzleContainer'>
            <div className='cashRegister'>
                <div className='cashRegister_inputsContainer'>
                   <div className='cashRegister_input cashRegister_input-left'>
                       {buttonSetUp(true)}
                    </div>
                       
                    <div className='cashRegister_input'>
                        {buttonSetUp(false)}
                    </div>
                </div> 
                <button
                    className='cashRegister_submit'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <p className="puzzlePopUp_text">
                Ka-Ching!
            </p>
        </div>
    )
}

export default CashRegisterPuzzle