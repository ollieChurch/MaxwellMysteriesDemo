import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/lastStand/TheSwitches.css'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PuzzleReward from '../../../../../components/PuzzleReward'
import SwitchesPuzzle from './SwitchesPuzzle'

function TheSwitches() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['switches', 'flags'],
                newPuzzles: ['cogs']
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <>
            {puzzleSolved ?
                <PuzzleReward 
                    imgAlt='A power generator'
                    text='The power generator whirs into life.'    
                /> :
                <SwitchesPuzzle setPuzzleSolved={setPuzzleSolved} />
            }
        </>
    )
}

export default TheSwitches