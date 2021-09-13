import { Switch, Route } from 'react-router-dom'
import './css/App.css'

import {UnmountContextProvider} from './context/UnmountContext'
import {BackgroundMusicProvider} from './context/BackgroundMusicContext'
import {PuzzleChangeProvider} from './context/PuzzleChangeContext'

import LandingPage from './pages/landingPage/LandingPage'
import LocationPage from './pages/locationPage/LocationPage'

function App() {        
    return (
        <BackgroundMusicProvider>
            <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/location/:locationId/investigate">
                    <PuzzleChangeProvider>
                        <UnmountContextProvider>
                            <LocationPage />
                        </UnmountContextProvider>
                    </PuzzleChangeProvider>
                </Route>
            </Switch>
        </BackgroundMusicProvider>
    )
}

export default App
