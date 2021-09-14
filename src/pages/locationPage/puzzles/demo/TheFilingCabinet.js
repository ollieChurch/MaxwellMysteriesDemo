import pageImg from '../../../../images/puzzles/demo/bookPage.jpg'

function TheFilingCabinet() {
    return (
        <div className="puzzleContainer">
                <img className='puzzlePopUp_img' src={pageImg} alt="a page with the letters A S T R O L O G Y highlighted" />
                <p className='puzzlePopUp_text'>The Professor's been workig on a new book.</p>
        </div>
    )
}

export default TheFilingCabinet