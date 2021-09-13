import React from 'react'

import useExtraClasses from '../hooks/useExtraClasses'

function TextParagraphs({text, extraClasses=''}) {
    const classString = useExtraClasses(extraClasses)
    
    return (
        <div className={classString}>
            {text.map((para, index) => 
                <p key={index}>
                    {para}
                    <br /><br />
                </p>
             )}
        </div>
    )
}

export default TextParagraphs