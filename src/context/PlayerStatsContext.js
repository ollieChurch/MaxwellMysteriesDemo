import {useState, createContext} from 'react'
const PlayerStatsContext = createContext()

function PlayerStatsProvider({children}) {
    const [playerStats, setPlayerStats] = useState({
        gameState: 'newGame' // newGame winGame
    })
    
    function updatePlayerStats(action) {
        localStorage.setItem(action.name, action.newState)
        setPlayerStats(prevStats => {
            return {
                ...prevStats,
                [action.name]: action.newState
            }
        })
    }
    
    const context = {
        playerStats,
        updatePlayerStats
    }
    
    return (
        <PlayerStatsContext.Provider value={context}>
            {children}
        </PlayerStatsContext.Provider>
    )
}

export {PlayerStatsProvider, PlayerStatsContext}