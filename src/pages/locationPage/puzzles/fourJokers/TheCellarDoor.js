import React, {useState, useContext, useEffect} from 'react'

import {LocationPuzzlesContext} from '../../../../context/LocationPuzzlesContext'

import NumberLock from '../../../../components/NumberLock'
import answerData from '../answerData'

import TheBarrels from './TheBarrels'

function TheCellarDoor() {
    const [answer] = useState(answerData.cellarDoor)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList, updateLocationImg} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['cellarDoor', 'pokerBoard'],
                newPuzzles: ['barrels', 'cashRegister']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, updateLocationImg])
    
    return (
        <>
            { puzzleSolved ?
                <TheBarrels /> :
                <div className='puzzleContainer'>
                    <NumberLock answer={answer} setPuzzleSolved={setPuzzleSolved} />
                    <p className='puzzlePopUp_text'>Just 5 numbers stand between you and seeing what's in this cellar.</p>
                </div>
            }
        </>
    )
}

export default TheCellarDoor