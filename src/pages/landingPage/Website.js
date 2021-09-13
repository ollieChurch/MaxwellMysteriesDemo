import useOpenNewTab from '../../hooks/useOpenNewTab'

function Website() {
    const {openTab} = useOpenNewTab()
    
    return (
        <>
            <h2>Want to play the full game?</h2>
            <button className="landing_btn" onClick={() => openTab('PURCHASE')}>
                Visit Paradox Parlours
            </button>
        </>
    )
}

export default Website