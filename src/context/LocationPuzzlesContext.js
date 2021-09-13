import React, {useState, createContext} from 'react'
import usePuzzleSetUp from '../hooks/usePuzzleSetUp'

const LocationPuzzlesContext = createContext()

function LocationPuzzlesProvider({children, locationId}) {
    const [location] = useState(locationId)
    const [locationStage, setLocationStage] = useState(0)
    const {puzzles, defaultText} = usePuzzleSetUp(location)
    
    const [puzzleList] = useState(puzzles)
    
    const [defaultSceneText] = useState(defaultText)
    const [inventorySceneText, setInventorySceneText] = useState('')
    const [sceneText, setSceneText] = useState(defaultSceneText)
    
    const [isItemCollected, setIsItemCollected] = useState(false)
    const [isItemSelected, setIsItemSelected] = useState(false)
    
    const [puzzleToClue, setPuzzleToClue] = useState(findFirstPuzzleWithClues)
    const [selectedPuzzle, setSelectedPuzzle] = useState(puzzleToClue.name)
    
    function updateLocationImg() {
        setLocationStage(prevStage => prevStage + 1)
    }
    
    function findFirstPuzzleWithClues() {
        return puzzleList.find(puzzle => puzzle.cluesAvailable === true)
    }
    
    function updateSceneText(text) {
        if (!text) {
            isItemSelected ? setSceneText(inventorySceneText) : setSceneText(defaultSceneText)
        } else {
            setSceneText(text)
        }
    }
    
    function updatePuzzleList(action) {
        switch(action.type) {
            case 'SEND_NEW_CLUE': {
                const thisPuzzle = puzzleList.find(puzzle => puzzle.name === selectedPuzzle)
                setPuzzleToClue(thisPuzzle)
                return thisPuzzle.lastClueSent ++
            }
                
            case 'SOLVE_PUZZLE': {
                action.complete.forEach(completed => {
                    const thisPuzzle = puzzleList.find(puzzle => puzzle.id === completed)
                    thisPuzzle.puzzleVisible = false
                    thisPuzzle.cluesAvailable = false
                })
                
                if (action.newPuzzles) {
                    action.newPuzzles.forEach(newPuzzle => {
                        const nextPuzzle = puzzleList.find(puzzle => puzzle.id === newPuzzle)
                        nextPuzzle.puzzleVisible = true
                        if (nextPuzzle.clues) { nextPuzzle.cluesAvailable = true }
                    })
                }
                
                action.itemCollected && setIsItemCollected(true)
                
                const selectedPuzzleUpdate = puzzleList.find(puzzle => puzzle.puzzleVisible && puzzle.cluesAvailable)
                setSelectedPuzzle(selectedPuzzleUpdate.name)
                
                return
            }
                
            case 'UNLOCK_PUZZLE': {
                const thisPuzzle = puzzleList.find(puzzle => puzzle.id === action.id)
                return thisPuzzle.puzzleLocked = false
            }
                
            default:
                return puzzleList
        }
    }
    
    const context = {
        location,
        locationStage,
        updateLocationImg,
        sceneText,
        updateSceneText,
        setInventorySceneText,
        isItemCollected,
        setIsItemCollected,
        isItemSelected,
        setIsItemSelected,
        puzzleList,
        puzzleToClue,
        selectedPuzzle,
        setSelectedPuzzle,
        updatePuzzleList
    }
    
    return (
        <LocationPuzzlesContext.Provider value={context}>
            {children}
        </LocationPuzzlesContext.Provider>
    )
}

export {LocationPuzzlesProvider, LocationPuzzlesContext}