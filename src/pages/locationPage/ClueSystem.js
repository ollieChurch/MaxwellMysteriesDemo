import {useState, useContext} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
import '../../css/pages/ClueSystem.css'

import clueSfxFile from '../../audio/audioFiles/sfx/telegram.mp3'

import {LocationPuzzlesContext} from '../../context/LocationPuzzlesContext'
import {PuzzleChangeContext} from '../../context/PuzzleChangeContext'
import {UnmountContextProvider} from '../../context/UnmountContext'
import useTogglePopUp from '../../hooks/useTogglePopUp'

import BrassPanel from '../../components/BrassPanel'
import InfoPopUp from '../../components/InfoPopUp'

import CluePopUp from './CluePopUp'

function ClueSystem() {
    const [clueState, setClueState] = useState('')
    const [prevClueAvailable, setPrevClueAvailable] = useState(false)
    const [puzzlesToBeAdapted] = useState(['The Darts Game'])
    
    const {togglePopUp, isPopUpOpen} = useTogglePopUp()
    const {adaptPuzzle} = useContext(PuzzleChangeContext)
    const {
        puzzleList,
        updatePuzzleList,
        selectedPuzzle,
        setSelectedPuzzle
    } = useContext(LocationPuzzlesContext)
    
        
    const clueSFX = useAudioPlayer({
        src: clueSfxFile,
        format: 'mp3',
        autoplay: false,
    })
    
    function handleChange(event) {
        setSelectedPuzzle(event.target.value)
    }
    
    function requestClue(newClue) {
        if (newClue) { 
            updatePuzzleList({type: 'SEND_NEW_CLUE'})
            !prevClueAvailable && setPrevClueAvailable(true)
            if (puzzlesToBeAdapted.includes(selectedPuzzle)) {
                adaptPuzzle({name: selectedPuzzle})
            }
        } else if (!prevClueAvailable) {
            return togglePopUp()
        }
        
        setClueState('open')
        clueSFX.play()
    }
     
    return (
        <>
            <BrassPanel extraClasses="sideContainer sideContainer-clueSystem">
                <p className="clueSystem_title">NYPD Helpdesk</p>
                <div className="clueSystem_container">
                    <select className="clueSystem_select" onChange={handleChange} value={selectedPuzzle}>
                        {puzzleList.map((puzzle, index) => {
                            if (puzzle.cluesAvailable) {
                                return <option key={index} value={puzzle.name}>{puzzle.name}</option> 
                            } else {
                                return null
                            }
                        })}
                    </select>
                    <button 
                        className="clueSystem_btn clueSystem_btn-new"
                        onClick={() => requestClue(true)}
                    >
                        New Hint
                    </button>
                    <button 
                        className="clueSystem_btn clueSystem_btn-prev"
                        onClick={() => requestClue(false)}
                    >
                        Previous Hint
                    </button>
                </div>

                {clueState && <CluePopUp clueState={clueState} setClueState={setClueState} />}
            </BrassPanel>

            <UnmountContextProvider>
                <InfoPopUp isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
                    <p className="infoPopUp_text">
                        You have no previous clue to show.
                    </p>
                </InfoPopUp>
            </UnmountContextProvider>
        </>
    )
} 

export default ClueSystem