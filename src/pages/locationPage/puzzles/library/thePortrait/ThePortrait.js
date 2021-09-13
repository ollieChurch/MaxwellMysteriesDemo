import React, {useState, useContext, useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
import '../../../../../css/puzzles/library/ThePortrait.css'

import buttonAudio from '../../../../../audio/audioFiles/sfx/buttonSFX.mp3'

import {UnmountContext} from '../../../../../context/UnmountContext'
import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PortraitPuzzle from './PortraitPuzzle'
import TheOpenPortrait from './TheOpenPortrait'

function ThePortrait() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList, updateLocationImg} = useContext(LocationPuzzlesContext)
    const {updateUnmount} = useContext(UnmountContext)    
    const {play, stop} = useAudioPlayer({
        src: buttonAudio,
        format: 'mp3',
        autoplay: false,
        onplay: () => { updateUnmount({name: 'safe', state: false}) },
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['portrait'],
                newPuzzles: ['openPortrait']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, updateLocationImg])
    
    return (
        <div className="puzzleContainer">
            {puzzleSolved ? 
                <TheOpenPortrait
                    text='On the final press, the lights flicker and the portrait pops open to reveal some confusing symbols.'
                /> :
                <PortraitPuzzle 
                    setPuzzleSolved={setPuzzleSolved}
                    play={play}
                    stop={stop}
                />
            }
        </div>
    )
}

export default ThePortrait