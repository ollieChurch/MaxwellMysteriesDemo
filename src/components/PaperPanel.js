import React from 'react'
import '../css/components/PaperPanel.css'

import useExtraClasses from '../hooks/useExtraClasses'

function PaperPanel({children, extraClasses='', ...props}) {
    const classString = useExtraClasses(extraClasses)
    
    return (
        <div className={`paperPanel ${classString}`} {...props}>
            {children}
        </div>
    )
}

export default PaperPanel