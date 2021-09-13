import {useState} from 'react'

function useTogglePopUp() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    function togglePopUp() {
        setIsPopUpOpen(prevState => !prevState)
    }
    
    function openMenu() {
        setIsMenuOpen(true) 
        togglePopUp()
    }
    
    !isPopUpOpen && isMenuOpen && setIsMenuOpen(false)
    
    return {isPopUpOpen, togglePopUp, isMenuOpen, openMenu}
}

export default useTogglePopUp