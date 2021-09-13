import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/laboratory/TheSimonMachine.css'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import SimonMachinePuzzle from './SimonMachinePuzzle'
import PrototypeResults from '../PrototypeResults'

function TheSimonMachine({text=''}) {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['simonMachine'],
                newPuzzles: ['prototypeOne']
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <div className='puzzleContainer'>
            { puzzleSolved ?
                <PrototypeResults option='1' text='The contraption beeps and springs open to reveal some important papers.'/> :
                <SimonMachinePuzzle setPuzzleSolved={setPuzzleSolved} text={text}/>
            }
        </div>
    )
}

export default TheSimonMachine