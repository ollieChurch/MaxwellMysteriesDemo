import React, {useContext} from 'react'
import '../css/components/OptionsMenu.css'

import {BackgroundMusicContext} from '../context/BackgroundMusicContext'
import {UnmountContextProvider} from '../context/UnmountContext'
import useTogglePopUp from '../hooks/useTogglePopUp'

import InfoPopUp from '../components/InfoPopUp'
import MusicAttribution from './MusicAttribution'
function OptionsMenu() {
    const {isBackgroundPlaying, toggleMuteBackground} = useContext(BackgroundMusicContext)
    const {isPopUpOpen, togglePopUp} = useTogglePopUp()

    return (
        <div className='optionsMenu'>
            <h3>Menu</h3>
            <button 
                className='optionsMenu_btn' 
                onClick={() => toggleMuteBackground(prevState => !prevState)}
            >
                <i className={`fas ${isBackgroundPlaying ? 'fa-volume-mute' : 'fa-music'}`}></i> 
                <span> {isBackgroundPlaying ? 'Mute' : 'Play'} Music</span>
            </button>
            <p className='optionsMenu_btn landing_creditsLink ' onClick={togglePopUp}><em>Music Attribution</em></p>
            
            <UnmountContextProvider>
                <InfoPopUp isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
                    <MusicAttribution />
                </InfoPopUp>
            </UnmountContextProvider>
        </div>
    )
}

export default OptionsMenu