import React, {useState, useContext} from 'react'
import '../../../../../css/puzzles/library/TheAnswerForm.css'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PuzzleReward from '../../../../../components/PuzzleReward.js'
import AnswerFormPuzzle from './AnswerFormPuzzle'

function TheAnswerForm() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    
    if (puzzleSolved) {
        setTimeout(() => {
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['globe', 'chair', 'floorTile', 'book', 'sign', 'answerForm', 'openPortrait'],
                newPuzzles: ['librarian'],
                itemCollected: true
            })
        }, 10)
    }
    
    return (
        <>
            {puzzleSolved ?
                <PuzzleReward 
                    finalPopUp
                    imgAlt=''
                    text="Happy with your book request form, you put it in your pocket. You can use the form by clicking on it in your inventory."
                /> :
                <AnswerFormPuzzle 
                    setPuzzleSolved={setPuzzleSolved}
                />
            }
        </>
    )
}

export default TheAnswerForm