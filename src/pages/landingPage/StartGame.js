import {Link} from 'react-router-dom'

function StartGame({gameState}) {  

    return (
        <>
            <h2>{gameState === 'newGame' ? 'Ready to begin' : 'Play again'}</h2>
            <Link to={'/location/demo/investigate'}>
                <button className="landing_btn">Let's Go!</button>
            </Link>
        </>
    )
}

export default StartGame