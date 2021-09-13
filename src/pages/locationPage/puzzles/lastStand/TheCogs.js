import React from 'react'
import '../../../../css/puzzles/lastStand/TheCogs.css'

function TheCogs() {
    function cog(index) {
        return (
            <i className={`
                fas fa-cog theCogs_cog theCogs_cog-${index}
            `}></i>
        )
    }
    
    return (
        <div className='puzzleContainer puzzleContainer-cogs'>
            <div className='cogContainer'>
                {cog(1)} {cog(2)}
            </div>

            <div className='cogContainer'>
                {cog(3)} {cog(4)}
            </div>
        </div> 
    )
}

export default TheCogs