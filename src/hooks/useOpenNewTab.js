function useOpenNewTab() {
    
    function openTab(action) {
        switch(action) {
            case 'PURCHASE': {
                return window.open(
                    'https://boxfile.io/shop/paradox-parlours'
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