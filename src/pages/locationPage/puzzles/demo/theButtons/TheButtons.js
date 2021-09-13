import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/office/TheButtons.css'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import ButtonsPuzzle from './ButtonsPuzzle'
import PuzzleReward from '../../../../../components/PuzzleReward'

function TheButtons() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList, updateLocationImg} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['buttons', 'bookcase'],
                newPuzzles: ['voiceRecorder']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, updateLocationImg])
    
    return (
        <div className="puzzleContainer">
            {puzzleSolved ?
                <PuzzleReward
                    imgAlt="the bookcase from the office"
                    text="With the grinding of gears and scraping of wood, the Professor's bookcase begins to move."
                /> :
                <ButtonsPuzzle setPuzzleSolved={setPuzzleSolved}/>
            }
        </div>
    )
}

export default TheButtons