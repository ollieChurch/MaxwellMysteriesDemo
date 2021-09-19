import { useContext } from 'react'
import {Link} from 'react-router-dom'
import {BackgroundMusicContext} from '../../context/BackgroundMusicContext'



function StartGame({gameState}) {  
    const {userMutedBackground, toggleMuteBackground} = useContext(BackgroundMusicContext)

    return (
        <>
            <h2>{gameState === 'newGame' ? 'Ready to begin' : 'Play again'}</h2>
            <Link to={'/location/demo/investigate'}>
                <button className="landing_btn" onClick={() => (
                    userMutedBackground && toggleMuteBackground
                )}>Let's Go!</button>
            </Link>
        </>
    )
}

export default StartGame