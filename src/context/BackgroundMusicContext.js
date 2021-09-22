import {useState, createContext, useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'

import Backbay_Lounge from '../audio/backgroundMusic/Backbay_Lounge.mp3'
import Bass_Walker from '../audio/backgroundMusic/Bass_Walker.mp3'
import Cool_Vibes from '../audio/backgroundMusic/Cool_Vibes.mp3'
import Covert_Affair from '../audio/backgroundMusic/Covert_Affair.mp3'
import Dances_Dames from '../audio/backgroundMusic/Dances_Dames.mp3'
import Fast_Talkin from '../audio/backgroundMusic/Fast_Talkin.mp3'
import Faster_Does_It from '../audio/backgroundMusic/Faster_Does_It.mp3'
import George_Street_Shuffle from   
    '../audio/backgroundMusic/George_Street_Shuffle.mp3'
import Hot_Swing from '../audio/backgroundMusic/Hot_Swing.mp3'
import I_Knew_a_Guy from '../audio/backgroundMusic/I_Knew_a_Guy.mp3'
import In_Your_Arms from '../audio/backgroundMusic/In_Your_Arms.mp3'
import On_the_Cool_Side from 
    '../audio/backgroundMusic/On_the_Cool_Side.mp3'
import Poppers_Prosecco from 
    '../audio/backgroundMusic/Poppers_Prosecco.mp3'
import Rollin_at_5 from '../audio/backgroundMusic/Rollin_at_5.mp3'
import Shades_of_Spring from 
    '../audio/backgroundMusic/Shades_of_Spring.mp3'
import Sidewalk_Shade from '../audio/backgroundMusic/Sidewalk_Shade.mp3'
import Spy_Glass from '../audio/backgroundMusic/Spy_Glass.mp3'
import Spysome from '../audio/backgroundMusic/Spysome.mp3'
import Walking_Along from '../audio/backgroundMusic/Walking_Along.mp3'

const BackgroundMusicContext = createContext()

function BackgroundMusicProvider({children}) {
    const savedState = localStorage.getItem('muteMusic')
    const [userMutedBackground, setUserMutedBackground] = useState(savedState === 'true' ? true : false)
    const [playlist] = useState([
        Backbay_Lounge, //File size more than 2mb
        Bass_Walker,
        Cool_Vibes,
        Covert_Affair,
        Dances_Dames,
        Fast_Talkin,
        Faster_Does_It,
        George_Street_Shuffle, //File size more than 2mb
        Hot_Swing,
        I_Knew_a_Guy,
        In_Your_Arms,
        On_the_Cool_Side,
        Poppers_Prosecco,
        Rollin_at_5,
        Shades_of_Spring,
        Sidewalk_Shade,
        Spy_Glass,
        Spysome,
        Walking_Along
    ])
    const {stop, play, load, playing} = useAudioPlayer()
    
    function randomTrack() {
        return Math.floor(
            Math.random() * Math.floor(playlist.length)
        )
    }
    
    function loadTrack(trackNum=randomTrack()) {
        console.log(playlist[trackNum])
        load({
            src: playlist[trackNum],
            autoplay: true,
            format: 'mp3',
            volume: 0.2,
            onend: () => {
                const nextSong = trackNum < (playlist.length -1) ?
                      trackNum + 1 : 0
                loadTrack(nextSong)
            }
        })
    }
    
    function toggleMuteBackground() {
        userMutedBackground ? play() : stop()
        localStorage.getItem('muteMusic') && localStorage.setItem('muteMusic', playing)
        setUserMutedBackground(prevState => !prevState)
    }
    
    useEffect(() => {
        if (playing === userMutedBackground) {
            !userMutedBackground && loadTrack()
        }
    // eslint-disable-next-line
    }, [userMutedBackground])
    
    const context = {
        loadTrack,
        playing,
        userMutedBackground,
        toggleMuteBackground,
        stop
    }
    
    return (
        <BackgroundMusicContext.Provider value={context}>
            {children}
        </BackgroundMusicContext.Provider>
    )
}

export {BackgroundMusicProvider, BackgroundMusicContext}