import React, {useState, createContext, useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'

import Backbay_Lounge from '../audio/audioFiles/backgroundMusic/Backbay_Lounge.mp3'
import Bass_Walker from '../audio/audioFiles/backgroundMusic/Bass_Walker.mp3'
import Cool_Vibes from '../audio/audioFiles/backgroundMusic/Cool_Vibes.mp3'
import Covert_Affair from '../audio/audioFiles/backgroundMusic/Covert_Affair.mp3'
import Dances_Dames from '../audio/audioFiles/backgroundMusic/Dances_Dames.mp3'
import Fast_Talkin from '../audio/audioFiles/backgroundMusic/Fast_Talkin.mp3'
import Faster_Does_It from '../audio/audioFiles/backgroundMusic/Faster_Does_It.mp3'
import George_Street_Shuffle from   
    '../audio/audioFiles/backgroundMusic/George_Street_Shuffle.mp3'
import Hot_Swing from '../audio/audioFiles/backgroundMusic/Hot_Swing.mp3'
import I_Knew_a_Guy from '../audio/audioFiles/backgroundMusic/I_Knew_a_Guy.mp3'
import In_Your_Arms from '../audio/audioFiles/backgroundMusic/In_Your_Arms.mp3'
import On_the_Cool_Side from 
    '../audio/audioFiles/backgroundMusic/On_the_Cool_Side.mp3'
import Poppers_Prosecco from 
    '../audio/audioFiles/backgroundMusic/Poppers_Prosecco.mp3'
import Rollin_at_5 from '../audio/audioFiles/backgroundMusic/Rollin_at_5.mp3'
import Shades_of_Spring from 
    '../audio/audioFiles/backgroundMusic/Shades_of_Spring.mp3'
import Sidewalk_Shade from '../audio/audioFiles/backgroundMusic/Sidewalk_Shade.mp3'
import Spy_Glass from '../audio/audioFiles/backgroundMusic/Spy_Glass.mp3'
import Spysome from '../audio/audioFiles/backgroundMusic/Spysome.mp3'
import Walking_Along from '../audio/audioFiles/backgroundMusic/Walking_Along.mp3'

import machineBackground from '../audio/audioFiles/backgroundMusic/machineBackground.mp3'


const BackgroundMusicContext = createContext()

function BackgroundMusicProvider({children}) {
    const [userMutedBackground, setUserMutedBackground] = useState(false)
    const [isBackgroundPlaying, setIsBackgroundPlaying] = useState(false)
    const [fading, setFading] = useState(false) //possible options: OUT / UP / false
    const maxVolume = 0.2
    const [staticVol, setStaticVol] = useState(maxVolume)
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
    const {stop, play, volume, load} = useAudioPlayer()
    
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
            onend: () => {
                const nextSong = trackNum < (playlist.length -1) ?
                      trackNum + 1 : 0
                loadTrack(nextSong)
            }
        })
    }
    
    function playMachineBackground() {
        if (!userMutedBackground) {
            toggleMuteBackground()
            load({
                src: machineBackground,
                autoplay: true,
                format: 'mp3',
                loop: true
            })
        }
    }
            
    function toggleMuteBackground() {
        userMutedBackground ? play() : stop() 
        setUserMutedBackground(prevState => !prevState)
    }
    
    function fadeBackgroundAudio(action) {
        action ? setFading(action) : setFading(false)        
    }

    function operateFade() {
        if (fading === 'OUT') {
            if (volume() > 0.1) {
                const minusVol = volume() - 0.01
                volume(minusVol)
                setStaticVol(minusVol)
            } else {
                volume(0)
                setFading(false)
            }
        } else if (fading === 'UP') {
            if (volume() < maxVolume) {
                const addVol = volume() + 0.01
                volume(addVol)
                setStaticVol(addVol)
            } else (
                setFading(false)
            )
        }
    }

    useEffect(() => {
        if (fading) {
            const timer = setTimeout(() => operateFade(), 250)
            return () => clearTimeout(timer)
        }
    // eslint-disable-next-line
    }, [fading, staticVol])
    
    
    useEffect(() => {
        volume() > maxVolume && volume(maxVolume) 
    }, [volume, maxVolume])
    
    useEffect(() => {
        if (isBackgroundPlaying === userMutedBackground) {
            setIsBackgroundPlaying(!userMutedBackground)
        }
    }, [userMutedBackground, isBackgroundPlaying, setIsBackgroundPlaying])
    
    const context = {
        loadTrack,
        isBackgroundPlaying,
        userMutedBackground,
        toggleMuteBackground,
        fadeBackgroundAudio,
        stop,
        playMachineBackground
    }
    
    return (
        <BackgroundMusicContext.Provider value={context}>
            {children}
        </BackgroundMusicContext.Provider>
    )
}

export {BackgroundMusicProvider, BackgroundMusicContext}