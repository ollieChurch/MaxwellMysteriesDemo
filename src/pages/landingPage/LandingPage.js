import { useContext } from "react"
import '../../css/pages/LandingPage.css'
import '../../css/animations.css'

import useOpenNewTab from '../../hooks/useOpenNewTab'
import useTogglePopUp from '../../hooks/useTogglePopUp'

import {UnmountContextProvider} from '../../context/UnmountContext'
import {PlayerStatsContext} from '../../context/PlayerStatsContext'

import GameHeader from '../../components/GameHeader'
import BrassPanel from '../../components/BrassPanel'
import InfoPopUp from '../../components/InfoPopUp'
import OptionsMenu from '../../components/OptionsMenu'
import newspaperImg from '../../images/foldedPaper-double.png'

import LandingMainText from './LandingMainText'
import Website from './Website'
import StartGame from './StartGame'

function LandingPage() {
    const {playerStats} = useContext(PlayerStatsContext)
    const {gameState} = playerStats
    const {openTab} = useOpenNewTab()
    const {isPopUpOpen, togglePopUp, isMenuOpen, openMenu} = useTogglePopUp()
        
    return (
        <div className="pageContainer pageContainer-landing">
            <GameHeader extraClasses='paperPanel'>
                <p className='header_link header_link-landing' onClick={openMenu}>
                    <i className="fas fa-cog"></i> options menu
                </p> 
            </GameHeader>

            <main className="main-landing">
                <LandingMainText gameState={gameState} />
                
                <BrassPanel extraClasses="landing_panel landing_panel-download">
                    <Website />
                </BrassPanel>
                
                <BrassPanel extraClasses="landing_panel landing_panel-start">
                    <StartGame gameState={gameState} />
                </BrassPanel>
                
                <img
                    className="diamondNewspaper"
                    src={newspaperImg}
                    onClick={() => openTab('PURCHASE')}
                    alt="a newspaper with the headline 'Priceless Diamond Stolen From City Museum'"
                />
            </main>
            
            <UnmountContextProvider>
                    <InfoPopUp isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
                        { isMenuOpen && <OptionsMenu /> }
                    </InfoPopUp>
            </UnmountContextProvider>
        </div>
    )
}

export default LandingPage