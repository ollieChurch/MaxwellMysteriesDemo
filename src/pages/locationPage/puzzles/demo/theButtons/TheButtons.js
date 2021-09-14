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
                complete: ['buttons', 'flags'],
                newPuzzles: ['filing']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, updateLocationImg])
    
    return (
        <div className="puzzleContainer">
            {puzzleSolved ?
                <PuzzleReward
                    imgAlt="the filing cabinet from the office"
                    text="Across the room, the filing cabinet suddenly springs open."
                /> :
                <ButtonsPuzzle setPuzzleSolved={setPuzzleSolved}/>
            }
        </div>
    )
}

export default TheButtons