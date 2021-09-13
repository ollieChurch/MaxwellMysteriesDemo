import {useContext, useEffect} from 'react'
import { PlayerStatsContext } from '../../context/PlayerStatsContext'
import {UnmountContext} from '../../context/UnmountContext'
import PaperPanel from '../../components/PaperPanel'
import { useHistory } from 'react-router-dom'


function PuzzlePopUp({children, closePuzzlePanel, updatePageUnmount}) {
    const {finalPuzzle} = children.props
    const {updatePlayerStats} = useContext(PlayerStatsContext)
    const {unmount, updateUnmount} = useContext(UnmountContext)
    const changeRoute = useHistory()
    
    function saveAndReturn() {
        updatePlayerStats({name: 'gameState', newState: 'winGame'})
        updatePageUnmount({name: 'safe', state: true})
        changeRoute.push('/')
    }
        
    useEffect(() => {
        unmount.waiting && unmount.safe && closePuzzlePanel()
    }, [unmount, closePuzzlePanel])
        
    return (
        <PaperPanel extraClasses="puzzlePopUp">
            {!finalPuzzle &&
                <button
                    className="infoPopUp_close"
                    onClick={() => updateUnmount({name: 'waiting', state: true})}
                >
                    {unmount.waiting ? '...' : 'X'}
                </button>
            }
            {children}
            {finalPuzzle && 
                <button 
                    className='finalPuzzleBtn' 
                    onClick={saveAndReturn}
                >
                    Click to finish
                </button>
            }
        </PaperPanel>
    )
}

export default PuzzlePopUp