import booksImg from '../../../../images/puzzles/demo/demoBooks.png'

function TheBookcase() {
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={booksImg} alt="a collection of books with coloured markings" />
            <p className="puzzlePopUp_text">
                These books are fixed in place. Strange that they don't have titles.
            </p>     
        </div>
    )
}

export default TheBookcase