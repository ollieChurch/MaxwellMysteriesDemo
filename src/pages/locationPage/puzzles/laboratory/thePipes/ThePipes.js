import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/laboratory/ThePipes.css'

import testTubeImg from '../../../../../images/puzzles/laboratory/testTube.png'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'
import {UnmountContext} from '../../../../../context/UnmountContext'

import PuzzleReward from '../../../../../components/PuzzleReward'
import PipesPuzzle from './PipesPuzzle'

function ThePipes() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    const {unmount, updateUnmount} = useContext(UnmountContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['pipes'],
                newPuzzles: ['chainedCupboard'],
                itemCollected: true
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <>
            {puzzleSolved ?
                <PuzzleReward
                    imgSrc={testTubeImg}
                    imgAlt='a test tube of chemcials'
                    text="The cocktail of chemicals bubbles and fizzes. You can use the vial by clicking on it in your inventory."
                /> :
                <PipesPuzzle 
                    setPuzzleSolved={setPuzzleSolved}
                    unmount={unmount}
                    updateUnmount={updateUnmount}
                />  
            }
        </>
    )
}

export default ThePipes