import {useContext} from 'react'

import {LocationPuzzlesContext} from '../../context/LocationPuzzlesContext'
import PaperPanel from '../../components/PaperPanel'

function CluePopUp({clueState, setClueState}) {
    const {puzzleToClue} = useContext(LocationPuzzlesContext) 
    const {name, clues, lastClueSent} = puzzleToClue
        
    let index = 0
    if (lastClueSent >= clues.length) {
        index = clues.length - 1
    } else if (lastClueSent > -1) {
        index = lastClueSent
    } else {
        index = 0
    }

    const includeImage =  clues[index].image ? true : false 
    
    function closeCluePopUp() {
        setClueState('close')
        setTimeout(() => {clueState === 'close' && setClueState('')}, 2000)
    }
    
    return (
        <PaperPanel extraClasses={`clueSystem_cluePopUp clueSystem_cluePopUp-${clueState}`}>
            <button className="infoPopUp_close" onClick={closeCluePopUp}>X</button>
            <h3 className="cluePopUp_clueTitle">{name}</h3>
            <p className="cluePopUp_clueText">{clues[index].text}</p>
            {includeImage ? <img className='cluePopUp_clueImg' src={clues[index].image} alt="" /> : ''}
        </PaperPanel>
    )
}

export default CluePopUp