import React, {useState, useEffect, useContext} from 'react'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PasswordLock from '../../../../../components/PasswordLock'
import answerData from '../../answerData'

import TheFlags from './TheFlags'

function FlagsPassword() {
    const [answer] = useState(answerData.clock)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['flagsPassword', 'clock'],
                newPuzzles: ['flags']
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <>
            {puzzleSolved ?
                <TheFlags /> :
                <div className='puzzleContainer'>
                    <PasswordLock answer={answer} setPuzzleSolved={setPuzzleSolved}/>
                    <p className='puzzlePopUp_text'>We need a password to access the site office.</p>
                </div>
            }
        </>
    )
}

export default FlagsPassword