import {useContext} from 'react'
import {LocationPuzzlesContext} from '../../context/LocationPuzzlesContext'
import BrassPanel from '../../components/BrassPanel'

function Inventory() {
    const {
        location,
        setInventorySceneText,
        updateSceneText,
        isItemCollected,
        isItemSelected, 
        setIsItemSelected
    } = useContext(LocationPuzzlesContext)
    
    const inventoryIndex = {
        demo: {icon: "fas fa-key", text: "It's a key!"}
    }
    
    const classString = isItemSelected ? 'inventory_box-clicked' : ''
    const chooseText = 'Choose somewhere to use it'
    const selectText = 'Click to select it'
    
    function changeSceneText() {
        const itemText = `${inventoryIndex.[location].text} ${isItemSelected ? chooseText : selectText}`
        const textToShow = isItemCollected ? itemText : 'Your pockets are empty'
        updateSceneText(textToShow)
    }
    
    function handleClick() {
        if (isItemCollected) {
            const instruction = !isItemSelected ? chooseText : selectText
            const sceneText = `${inventoryIndex.[location].text} ${instruction}`
            updateSceneText(sceneText)
            !isItemSelected && setInventorySceneText(sceneText)
            setIsItemSelected(prevState => !prevState)
        }
    }
    
    return (
        <BrassPanel extraClasses="sideContainer sideContainer-inventory">
            <p>Inventory</p>
            <div 
                className={`inventory_box ${classString}`}
                onMouseEnter={changeSceneText}
                onMouseLeave={() => {!isItemSelected && updateSceneText()}}
                onClick={handleClick}
            >
                <i className={isItemCollected ? inventoryIndex.[location].icon : 'fas fa-times'}></i>
            </div>
        </BrassPanel>
    )
}

export default Inventory