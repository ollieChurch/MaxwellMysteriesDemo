import React, {useState, createContext} from 'react'
import puzzleAnswers from '../pages/locationPage/puzzles/answerData'
const PuzzleChangeContext = createContext()

function PuzzleChangeProvider({children}) {    
    const {dartsJack} = puzzleAnswers
    const [dartsScoreThreshold, setDartsScoreThreshold] = useState(dartsJack)
    const [dartsCount, setDartsCount] = useState(-1)
    const [dartsAdaptations] = useState([
        dartsJack,
        (dartsJack - 10),
        (dartsJack - 15),
        (dartsJack - 20),
        (dartsJack - 40),
        0
    ])
    
    function adaptPuzzle(action) {
        const {name} = action
        
        switch(name) {
            case 'The Darts Game': {
                const nextCount = dartsCount + 1
                if (nextCount < dartsAdaptations.length) {
                    setDartsScoreThreshold(dartsAdaptations[nextCount])
                    setDartsCount(prevCount => prevCount + 1)
                }
                return console.log(`score threshold is now ${dartsAdaptations[nextCount]}`) 
            }
            
            default:
                return console.error('Something Went Wrong!')
        }
    }
        
    const context = {
        dartsScoreThreshold,
        adaptPuzzle
    }
    
    return (
        <PuzzleChangeContext.Provider value={context}>
            {children}
        </PuzzleChangeContext.Provider>
    )
}
                
export {PuzzleChangeProvider, PuzzleChangeContext}