import React, {useState, useContext} from 'react'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PasswordLock from '../../../../../components/PasswordLock'
import answerData from '../../answerData'

import ThePipes from './ThePipes'

function ThePipesPassword() {
    const [answer] = useState(answerData.pipesPassword)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    if (puzzleSolved) {
        setTimeout(() => {
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['pipesPassword', 'prototypeOne', 'prototypeTwo', 'simonMachine', 'soundMachine', 'chalkboard'],
                newPuzzles: ['pipes']
            })
        }, 10) 
    }
    
    return (
        <>
            {puzzleSolved ?
                <ThePipes /> :
                <div className='puzzleContainer'>
                    <PasswordLock answer={answer} setPuzzleSolved={setPuzzleSolved}/>
                    <p className='puzzlePopUp_text'>We need a password to get the pump going.</p>
                </div>
            }
        </>
    )
}

export default ThePipesPassword