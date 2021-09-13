import React, {useState, useContext} from 'react'
import '../../../../../css/puzzles/fourJokers/TheSafe.css'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PuzzleReward from '../../../../../components/PuzzleReward'
import SafePuzzle from './SafePuzzle'

function TheSafe() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    if (puzzleSolved) {
        setTimeout(() => {
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['safe', 'jack'],
                newPuzzles: ['cameraJack'],
                itemCollected: true
            })
        }, 10) 
    }
    
    return (
        <>
            {puzzleSolved ?
                <PuzzleReward
                    imgAlt=''
                    text="The safe springs open. Inside is some of the Professor's research and a camera. You can use the camera by clicking on it in your inventory."
                /> :
                <SafePuzzle setPuzzleSolved={setPuzzleSolved} />
            }
        </>
    )
}

export default TheSafe