import React, {useState, useEffect, useContext} from 'react'

import {LocationPuzzlesContext} from '../../../../context/LocationPuzzlesContext'

import NumberLock from '../../../../components/NumberLock'
import answerData from '../answerData'

import TheSimonMachine from './theSimonMachine/TheSimonMachine'

function TheLockBox() {
    const [answer] = useState(answerData.lockBox)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['lockBox'],
                newPuzzles: ['simonMachine']
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <div className='puzzleContainer'>
            { puzzleSolved ?
                <TheSimonMachine text='The lock clicks and the box opens. Inside is a fascinating contraption.'/> :
                <>
                    <NumberLock answer={answer} setPuzzleSolved={setPuzzleSolved}/>
                    <p className='puzzlePopUp_text'>I have never seen a lock like this before. It's held shut by some form of electromagnetic force.</p>
                </> 
            }
            
        </div>
    )
}

export default TheLockBox