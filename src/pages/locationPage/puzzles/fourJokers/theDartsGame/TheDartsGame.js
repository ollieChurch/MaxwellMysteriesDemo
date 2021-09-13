import React, {useState, useContext} from 'react'
import '../../../../../css/puzzles/fourJokers/TheDartsGame.css'

import jackImg from '../../../../../images/puzzles/fourJokers/jack.png'

import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'
import {UnmountContext} from '../../../../../context/UnmountContext'

import TextParagraphs from '../../../../../components/TextParagraphs'
import DartsGamePuzzle from './DartsGamePuzzle'

function TheDartsGame() {
    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
    const {updateUnmount} = useContext(UnmountContext)
    const rewardText = [
        'Jack keeps his word and ushers you to a quiet table.',
        `"There is a safe. Inside the safe is the Professor's research and a camera. Bring the camera to me and I'll owe you one. What you do with the research is up to you."`,
        'When you ask where to find the safe and what the combination is, Jack just shrugs.'   
    ]
    
    if (puzzleSolved) {
        setTimeout(() => {
            updatePuzzleList({
                type: 'SOLVE_PUZZLE',
                complete: ['darts'],
                newPuzzles: ['pokerBoard', 'cellarDoor', 'cashRegister', 'dice', 'jack']
            })
        }, 10) 
    }
    
    return (
        <>
            {puzzleSolved ? 
                <div className='puzzleContainer'>
                    <img className='puzzlePopUp_img' src={jackImg} alt='' />
                    <TextParagraphs text={rewardText} extraClasses='puzzlePopUp_text' />
                </div> :
                <DartsGamePuzzle 
                    setPuzzleSolved={setPuzzleSolved}
                    updateUnmount={updateUnmount}
                />
            }
        </>
    )
}

export default TheDartsGame