function useOpenNewTab() {
    
    function openTab(action) {
        switch(action) {
            case 'PURCHASE': {
                return window.open(
                    'https://paradoxparlours.com/escape-rooms/online'
                )
            }

            default: {
                return null
            }
        }
    }
    
    return {openTab}
    
}

export default useOpenNewTab