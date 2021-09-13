import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/office/TheFilingCabinet.css'

import fileImg from '../../../../../images/puzzles/office/fileReward.png'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import FilingCabinetPuzzle from './FilingCabinetPuzzle'
import PuzzleReward from '../../../../../components/PuzzleReward'

function TheFilingCabinet() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['filing', 'voiceRecorder'],
                newPuzzles: ['certificate']
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <div className="puzzleContainer">
            {puzzleSolved ? 
                <PuzzleReward
                    imgSrc={fileImg}
                    imgAlt='a file with the note "Larry. Take a closer look at my certificate"'
                    text="It seems I should take a closer look at the Professor's framed certificate on the wall."
                /> :
                <FilingCabinetPuzzle setPuzzleSolved={setPuzzleSolved} />
            }
        </div>
    )
}

export default TheFilingCabinet