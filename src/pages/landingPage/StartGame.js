import { useContext } from 'react'
import {Link} from 'react-router-dom'
import {BackgroundMusicContext} from '../../context/BackgroundMusicContext'



function StartGame({gameState}) {  
    const {toggleMuteBackground} = useContext(BackgroundMusicContext)

    return (
        <>
            <h2>{gameState === 'newGame' ? 'Ready to begin' : 'Play again'}</h2>
            <Link to={'/location/demo/investigate'}>
                <button className="landing_btn" onClick={() => {
                    console.log(localStorage.getItem('muteMusic') === false)
                    if (localStorage.getItem('muteMusic') === "false") { toggleMuteBackground() }
                }}>Let's Go!</button>
            </Link>
        </>
    )
}

export default StartGame