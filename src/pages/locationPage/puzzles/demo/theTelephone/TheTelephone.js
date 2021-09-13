import React, {useState, useContext, useEffect} from 'react'
import {useAudioPlayer, useAudioPosition} from 'react-use-audio-player'
import '../../../../../css/puzzles/office/TheTelephone.css'

import phoneAudio from '../../../../../audio/audioFiles/sfx/rotaryPhone.mp3'
import keyImg from '../../../../../images/puzzles/office/key.png'

import {UnmountContext} from '../../../../../context/UnmountContext'
import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import TelephonePuzzle from './TelephonePuzzle'
import PuzzleReward from '../../../../../components/PuzzleReward'

function TheTelephone() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {unmount, updateUnmount} = useContext(UnmountContext)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    const {seek} = useAudioPosition()
    const {play, stop, playing, volume} = useAudioPlayer({
        src: phoneAudio,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    volume(0.5)

    useEffect(() => {
        if (unmount.safe === playing) { 
            updateUnmount({name: 'safe', state: !playing}) 
        }
    }, [playing, unmount, updateUnmount])
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['telephone', 'certificate'],
                newPuzzles: ['drawer'],
                itemCollected: true
            })
        }
    },[puzzleSolved, updatePuzzleList, updated]) 
        
    return (
        <div className="puzzleContainer">
            {puzzleSolved ?
                <PuzzleReward
                    imgSrc={keyImg}
                    imgAlt='a key'
                    text='A compartment on the telephone springs open to reveal a key. The key can be used by clicking on it in your inventory.'
                /> :
                <TelephonePuzzle
                    setPuzzleSolved={setPuzzleSolved}
                    play={play} 
                    stop={stop} 
                    seek={seek}
                />
            }
        </div>
    )
}

export default TheTelephone