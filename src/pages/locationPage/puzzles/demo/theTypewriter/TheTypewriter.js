import React, {useState, useEffect, useContext} from 'react'
import {useAudioPlayer, useAudioPosition} from 'react-use-audio-player'
import '../../../../../css/puzzles/office/TheTypewriter.css'

import typewriterSFX from '../../../../../audio/audioFiles/sfx/typewriterSFX.mp3'

import {UnmountContext} from '../../../../../context/UnmountContext'
import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import TypewriterPuzzle from './TypewriterPuzzle'
import PuzzleReward from '../../../../../components/PuzzleReward'

function TheTypewriter() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList, updateLocationImg} = useContext(LocationPuzzlesContext)
    const {unmount, updateUnmount} = useContext(UnmountContext)
    
    const {seek} = useAudioPosition()
    const {play, stop, playing} = useAudioPlayer({ 
        src: typewriterSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    
    useEffect(() => {
        if (unmount.waiting) { 
            playing ? stop() : updateUnmount({name: 'safe', state: true})
        }
    }, [unmount, playing, stop, updateUnmount])
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            seek(0.7)
            play() 
            updateUnmount({name: 'safe', state: false}) 
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['typewriter'],
                newPuzzles: ['buttons']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, seek, play, updateUnmount, updateLocationImg])
    
    return (
        <>
            {puzzleSolved ? 
                <PuzzleReward
                    imgAlt='a hidden panel swinging open'
                    text='A small panel in the wall swings open.'
                /> :
                <TypewriterPuzzle setPuzzleSolved={setPuzzleSolved} />
            }
        </>
    )
}

export default TheTypewriter