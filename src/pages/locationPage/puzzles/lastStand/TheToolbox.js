import React, {useState, useEffect, useContext} from 'react'

import {LocationPuzzlesContext} from '../../../../context/LocationPuzzlesContext'

import NumberLock from '../../../../components/NumberLock'
import PuzzleReward from '../../../../components/PuzzleReward'
import answerData from '../answerData'

function TheToolbox() {
    const [answer] = useState(answerData.cogs)
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['cogs', 'toolbox'],
                newPuzzles: ['lockedDoor'],
                itemCollected: true
            })
        }
    },[puzzleSolved, updatePuzzleList, updated])
    
    return (
        <>
            {puzzleSolved ?
                <PuzzleReward
                    imgAlt=''
                    text='The toolbox pops open and inside is a heavy looking wrench. You can use the wrench by selecting it in your inventory.'
                /> :
                <div className='puzzleContainer'>
                    <NumberLock
                        setPuzzleSolved={setPuzzleSolved}
                        answer={answer}
                    />
                    <p className='puzzlePopUp_text'>The workers must have a way of remembering the code to their toolbox.</p>
                </div>
                
            }
        </>
    )
}

export default TheToolbox