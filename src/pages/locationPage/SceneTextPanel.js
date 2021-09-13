import {useContext} from 'react'
import {LocationPuzzlesContext} from '../../context/LocationPuzzlesContext'

import PaperPanel from '../../components/PaperPanel'

function SceneTextPanel() {
    const {sceneText} = useContext(LocationPuzzlesContext)
    
    return (
        <PaperPanel extraClasses="sideContainer sideContainer-sceneText">
            <p>"{sceneText}"</p>
        </PaperPanel>
    )
}

export default SceneTextPanel