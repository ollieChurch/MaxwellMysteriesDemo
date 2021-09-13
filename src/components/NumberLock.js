import React, {useState, useContext} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
import '../css/components/NumberLock.css'
import '../css/animations.css'

import errorSFX from '../audio/audioFiles/sfx/beep.mp3'

import {UnmountContext} from '../context/UnmountContext'
import BrassPanel from './BrassPanel'

function NumberLock({answer, setPuzzleSolved}) {
    const [playerInput, setPlayerInput] = useState(setUpInputs())
    const {updateUnmount} = useContext(UnmountContext)
    const {play} = useAudioPlayer({
        src: errorSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })
        
    function setUpInputs() {
        const initialArr = []
        for (let i=0; i<answer.length; i++) {
            initialArr.push(0)
        } 
        return initialArr
    }
    
    function handleClick(index, direction) {
        const newArr = [...playerInput]
        if (direction === 'up') {
            newArr[index] = newArr[index] < 9 ? newArr[index] + 1 : 0
        } else {
            newArr[index] = newArr[index] > 0 ? newArr[index] - 1 : 9
        } 
        setPlayerInput(newArr)
    }
    
    function handleSubmit() {
        const playerStr = playerInput.join('')
        if (playerStr === answer) {
            setPuzzleSolved(true)
        } else {
            play()
            updateUnmount({name: 'safe', state: false})
        }
    }
        
    return (
        <BrassPanel extraClasses='numberLock'>
            <div className='inputsContainer'>
                {playerInput.map((input, index) => {
                    return (
                        <div key ={index} className='numberInput'>
                            <button 
                                className='numberInput_btn numberInput_btn-up'
                                onClick={() => handleClick(index, 'up')}
                            ></button>
                            <input
                                className='numberInput_display'
                                readOnly
                                value={playerInput[index]}
                                size='1'
                            />
                            <button 
                                className='numberInput_btn numberInput_btn-down'
                                onClick={() => handleClick(index, 'down')}
                            ></button>
                        </div>
                    )
                })}
            </div>
            <button 
                className='numberLock_submit'
                onClick={handleSubmit}
            >
                Submit
            </button>
        </BrassPanel>
    )
}

export default NumberLock