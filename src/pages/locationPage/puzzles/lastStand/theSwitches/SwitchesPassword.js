import React, {useState, useEffect, useContext} from 'react'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import NumberLock from '../../../../../components/NumberLock'
import answerData from '../../answerData'

import TheSwitches from './TheSwitches'

function SwitchesPassword() {
    const [answer] = useState(answerData.crates)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['switchesPassword', 'crates'],
                newPuzzles: ['switches']
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <>
            { puzzleSolved ?
                <TheSwitches /> :
                <div className='puzzleContainer'>
                    <NumberLock answer={answer} setPuzzleSolved={setPuzzleSolved}/>
                    <p className='puzzlePopUp_text'>The electricty control switches are safely locked away.</p>
                </div> 
            }
            
        </>
    )
}

export default SwitchesPassword