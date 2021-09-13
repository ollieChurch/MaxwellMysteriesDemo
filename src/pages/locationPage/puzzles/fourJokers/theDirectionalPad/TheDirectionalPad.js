import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/fourJokers/TheDirectionalPad.css'

import safeRevealImg from '../../../../../images/puzzles/fourJokers/safeReveal.jpg'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PuzzleReward from '../../../../../components/PuzzleReward'
import DirectionalPadPuzzle from './DirectionalPadPuzzle'

function TheDirectionalPad() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList, updateLocationImg} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['directionalPad', 'dice'],
                newPuzzles: ['safe']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, updateLocationImg])
    
    return (
        <>
            { puzzleSolved ?
                <PuzzleReward
                    imgSrc={safeRevealImg}
                    imgAlt='a newly revealed safe behind the bar'
                    text='With a creak, the mirror behind the bar swings open.'
                /> :
                <DirectionalPadPuzzle setPuzzleSolved={setPuzzleSolved} />
            }
        </>
    )
}

export default TheDirectionalPad