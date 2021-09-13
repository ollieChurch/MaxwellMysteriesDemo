import React, {useEffect, useContext} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
import '../css/components/Keyboard.css'

import typewriterSFX from '../audio/audioFiles/sfx/typewriterSFX.mp3'

import {UnmountContext} from '../context/UnmountContext'

function Keyboard({playerInput, setPlayerInput, answer, keyboardStyleChanges}) {
    const {unmount, updateUnmount} = useContext(UnmountContext)
    const keys = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]
    
    const {play, stop, playing} = useAudioPlayer({ 
        src: typewriterSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })

    useEffect(() => {
        if (unmount.safe === playing) { 
            updateUnmount({name: 'safe', state: !playing}) 
        }
    }, [playing, unmount, updateUnmount])
     
    function handleClick(event) {
        const {textContent} = event.target
        const newPlayerInput = playerInput + textContent
        play()
        setTimeout(() => {
            stop()
        }, 500)
        
        setPlayerInput(newPlayerInput)
    }
    
    return (
        <div className="typeWriterKeys" style={keyboardStyleChanges}>
            {keys.map((row, index) => {
                return (
                    <div key={`row-${index}`} className="typeWriterKeys_row">
                        {row.map((letter) => {
                               return (
                                    <button 
                                        key={letter}
                                        className="typeWriterKey"
                                        onClick={handleClick}
                                    >
                                        {letter}
                                    </button> 
                                )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Keyboard