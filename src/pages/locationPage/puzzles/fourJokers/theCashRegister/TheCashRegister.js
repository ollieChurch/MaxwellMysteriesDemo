import React, {useState, useEffect, useContext} from 'react'
import '../../../../../css/puzzles/fourJokers/TheCashRegister.css'

import panelRevealImg from '../../../../../images/puzzles/fourJokers/panelReveal.jpg'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import PuzzleReward from '../../../../../components/PuzzleReward'
import CashRegisterPuzzle from './CashRegisterPuzzle'

function TheCashRegister() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {updatePuzzleList, updateLocationImg} = useContext(LocationPuzzlesContext)
    
    useEffect(() => {
        if (puzzleSolved && !updated) {
            setUpdated(true)
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['barrels', 'cashRegister'],
                newPuzzles: ['directionalPad']
            })
            updateLocationImg()
        }
    },[puzzleSolved, updatePuzzleList, updated, updateLocationImg])
    
    return (
        <>
            { puzzleSolved ?
                <PuzzleReward
                    imgSrc={panelRevealImg}
                    imgAlt='a newly opened panel on the wall'
                    text='The cash register chimes and a small panel in the wall, smoothly, slides open'
                /> :
                <CashRegisterPuzzle setPuzzleSolved={setPuzzleSolved} />
            }
        </>
    )
}

export default TheCashRegister