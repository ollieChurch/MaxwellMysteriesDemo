import {useState, useContext} from 'react'
import '../../css/puzzles/office/DemoPuzzleMarkers.css'

import {LocationPuzzlesContext} from '../../context/LocationPuzzlesContext'
import {UnmountContextProvider} from '../../context/UnmountContext'
import useTogglePopUp from '../../hooks/useTogglePopUp'

import LocationImage from './LocationImage'
import PuzzlePopUp from './PuzzlePopUp'

function LocationInteraction({unmount, updateUnmount}) {
    const [currentPuzzle, setCurrentPuzzle] = useState('')
    const {
        location,
        puzzleList,
        updatePuzzleList,
        updateSceneText,
        isItemSelected,
        setIsItemSelected,
        setIsItemCollected,
    } = useContext(LocationPuzzlesContext)
    const {isPopUpOpen, togglePopUp} = useTogglePopUp()
    
    const puzzleMarkers = puzzleList.map((puzzle, index) => {
        const {puzzleVisible, id, puzzleLocked, specialIcon, sceneText, component} = puzzle
        const lockedClass = puzzleLocked ? 'puzzleMarker-locked' : ''
        
        return (
            puzzleVisible &&
                <div 
                    key={index}
                    className={`puzzleMarker puzzleMarker-${id} ${lockedClass}`}
                    onMouseEnter={() => updateSceneText(sceneText)}
                    onMouseLeave={() => {!isPopUpOpen && updateSceneText()}}
                    onClick={() => openPuzzlePanel(puzzleLocked, component, id)}
                >
                    {specialIcon && <i className={specialIcon}></i>}
                </div>
        )
    })
    
    function openPuzzlePanel(puzzleLocked, component, id) {
        if ((!isItemSelected && !puzzleLocked) || (isItemSelected && puzzleLocked)) {
            setCurrentPuzzle(component)
            togglePopUp()
            if (puzzleLocked) {
               setIsItemSelected(false)
               setIsItemCollected(false)
               updatePuzzleList({type: 'UNLOCK_PUZZLE', id: id})
            }  
        }
    }
    
    function closePuzzlePanel() {
        togglePopUp()
        updateSceneText()
    }

    return (
        <div className="locationContainer">
            <LocationImage location={location} />
            {puzzleMarkers}
            
            {isPopUpOpen &&
                <UnmountContextProvider>
                    <PuzzlePopUp
                        closePuzzlePanel={closePuzzlePanel} 
                        pageUnmount={unmount}
                        updatePageUnmount={updateUnmount}
                        location={location}
                    >
                        {currentPuzzle}
                    </PuzzlePopUp>
                </UnmountContextProvider>

            }
        </div>

        
    )
}

export default LocationInteraction