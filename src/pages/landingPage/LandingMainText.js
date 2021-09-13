import React from 'react'

import PaperPanel from '../../components/PaperPanel'
import TextParagraphs from '../../components/TextParagraphs'

function LandingMainText({gameState}) {
    let titleText = ''
    let bodyText = []
        
    if (gameState === 'winGame') {
        titleText = 'You Solved The Case!'
        bodyText = [
            'Professor Foxworth and his research are safe thanks to your efforts. Well done on completing The Case Of The Kidnapped Professor.',

            'As one case closes another opens. P.I. Larry Maxwell needs your help on more investigations. There is a diamond that has disappeared from the City Museum and the trial of Vince Baxter is due to start any day, open and shut case, provided the evidence makes it to the court.',

            'You can find out about these, plus all the other incredible online and real world escape games Paradox Parlours has to offer by visiting the website.',

            'See you at the next mystery!'
        ]
    } else {
        titleText = 'Instructions - Read Me First'
        bodyText = [
            'Private Investigator Larry Maxwell needs your help on the latest case and there is no time to lose!',

            "This is a playable demo for the Maxwell Mysteries play-at-home puzzle game series. Everything you need to play this mini case will be on screen, though a pencil and paper may be handy.",

            'Remember every detective needs a little help sometimes. Even Larry. If you need a nudge in the right direction, you can request a hint using the NYPD Helpdesk at each location.',

            'Good luck!'
        ]       
    }
        
    return (
        <PaperPanel extraClasses={`landing_infoPanel`}>
            <h4 className="welcome">
                {gameState === 'winGame' ? 'Congratulatons' : 'Welcome'} Detectives
            </h4>
            <h3 className={`${gameState}_title`}>{titleText}</h3>
            <TextParagraphs extraClasses={`${gameState}_text`} text={bodyText} />
        </PaperPanel>
    )
}

export default LandingMainText