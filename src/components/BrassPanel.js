import React from 'react'
import '../css/components/BrassPanel.css'
import screwImg from '../images/theme/screw.png'

import useExtraClasses from "../hooks/useExtraClasses"

function BrassPanel({children, extraClasses, small=false}) {
    const classString = useExtraClasses(extraClasses)
    const screwClass = "brassPanel_screw brassPanel_screw-"
    const screwPositions = small ? 
        [
            'middleLeft',
            'middleRight'
        ] :
        [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]
    
    
        
    
    return (
        <div className={`brassPanel ${classString}`}>
            {children}
            {screwPositions.map((position, index) => {
                return (
                    <img 
                        key={index}
                        className={`${screwClass}${position}`}
                        src={screwImg}
                        alt=""
                    />
                )
            })}
        </div>
    )
}

export default BrassPanel