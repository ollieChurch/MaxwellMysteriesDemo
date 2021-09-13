import {useEffect, useContext} from "react"
import {useParams} from 'react-router-dom'
import { AudioPlayerProvider } from 'react-use-audio-player'
import '../../css/pages/LocationPage.css'
import '../../css/animations.css'

import {LocationPuzzlesProvider} from '../../context/LocationPuzzlesContext'
import {UnmountContext} from '../../context/UnmountContext'
import {UnmountContextProvider} from '../../context/UnmountContext'
import useTogglePopUp from '../../hooks/useTogglePopUp'

import GameHeader from '../../components/GameHeader'
import InfoPopUp from '../../components/InfoPopUp'

import SceneTextPanel from './SceneTextPanel'
import ClueSystem from './ClueSystem'
import Inventory from './Inventory'
import LocationInteraction from './LocationInteraction'
import OptionsMenu from "../../components/OptionsMenu"

function LocationPage() {
    const {locationId} = useParams()
    const {isPopUpOpen, togglePopUp, isMenuOpen, openMenu} = useTogglePopUp()
    const {unmount, updateUnmount} = useContext(UnmountContext)
    
    useEffect(() => {
        !isPopUpOpen && unmount.safe && updateUnmount({name: 'safe', state: false})
    }, [isPopUpOpen, unmount, updateUnmount])
        
    return (
        <div className="pageContainer pageContainer-location">
            <GameHeader>
                <p className='header_link header_link-landing' onClick={openMenu}>
                    <i className="fas fa-cog"></i> options menu
                </p> 
            </GameHeader>

            <LocationPuzzlesProvider locationId={locationId}>
                <aside className="side">
                    <SceneTextPanel />
                    <Inventory />
                    <AudioPlayerProvider><ClueSystem /></AudioPlayerProvider>
                </aside>

                <main className="main-location">
                    <LocationInteraction
                        unmount={unmount}
                        updateUnmount={updateUnmount}
                    />
                </main>
            </LocationPuzzlesProvider>

            <UnmountContextProvider>
                    <InfoPopUp isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
                        { isMenuOpen && <OptionsMenu /> }
                    </InfoPopUp>
            </UnmountContextProvider>
        </div>
    )
}

export default LocationPage